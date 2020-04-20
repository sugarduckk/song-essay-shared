import React from 'react';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';
import ImageCropperContainer from './ImageCropperContainer';
import ImageArea from './ImageArea';
import BrowseFileButton from '../LabelledFileUploader/BrowseFileButton';
import ImageAreaContainer from './ImageAreaContainer';
import AnotherContainer from './AnotherContainer';
import usePointerHandlers from './usePinterHandlers';
import ZoomBar from './ZoomBar';

const maxZoom = 4;
const canvasRatio = 1;
const padding = 0.15;

const ImageCropper = ({ label, error, value, onChange, ...otherProps }) => {
  const [crop, setCrop] = React.useState();
  const [dim, setDim] = React.useState();
  const { anchor, isMoving, offset, setOffset, zoomOffset, setZoomOffset, move, ...pointerHandlers } = usePointerHandlers();
  const [zoom, setZoom] = React.useState(0);
  const [img, setImg] = React.useState();
  const canvasRef = React.useRef();
  React.useEffect(() => {
    if (img) {
      const imgRatio = img.width / img.height;
      const portrait = imgRatio < canvasRatio;
      // determine canvas dimension
      var cWidth, cHeight;
      if (portrait) {
        cHeight = img.height;
        cWidth = canvasRatio * cHeight;
      }
      else {
        cWidth = img.width;
        cHeight = cWidth / canvasRatio;
      }
      // define box size
      var bx = padding * cWidth;
      var by = padding * cHeight;
      var bwidth = (1 - 2 * padding) * cWidth;
      var bheight = (1 - 2 * padding) * cHeight;
      // draw the image onto canvas
      var ix, iy, iwidth, iheight;

      if (portrait) {
        iwidth = bwidth;
        iheight = iwidth / imgRatio;
      }
      else {
        iheight = bheight;
        iwidth = bheight * imgRatio;
      }
      ix = (cWidth - iwidth) / 2;
      iy = (cHeight - iheight) / 2;
      setDim({
        cDim: {
          width: cWidth,
          height: cHeight
        },
        bDim: {
          x: bx,
          y: by,
          width: bwidth,
          height: bheight
        },
        iDim: {
          x: ix,
          y: iy,
          width: iwidth,
          height: iheight
        }
      });
    }
  }, [img]);
  React.useEffect(() => {
    if (dim) {
      const { cDim, bDim, iDim } = dim;
      var ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = cDim.width;
      canvasRef.current.height = cDim.height;

      // image position
      var mul = (1 + (zoom * maxZoom / 100));
      var zwidth = iDim.width * mul;
      var zheight = iDim.height * mul;

      var extraX = (offset.x + move.x + zoomOffset.x) * cDim.width;
      var extraY = (offset.y + move.y + zoomOffset.y) * cDim.height;
      var zx, zy;
      zx = iDim.x + extraX;
      zy = iDim.y + extraY;

      var exceedX = false;
      var exceedY = false;
      var newOffsetX, newOffsetY;
      if (zx > bDim.x) {
        zx = bDim.x;
        newOffsetX = ((bDim.x - iDim.x) / cDim.width) - move.x - zoomOffset.x;
        exceedX = true;
      }
      else if (zx + zwidth < bDim.x + bDim.width) {
        zx = bDim.x + bDim.width - zwidth;
        newOffsetX = ((bDim.x + bDim.width - zwidth - iDim.x) / cDim.width) - move.x - zoomOffset.x;
        exceedX = true;
      }
      if (zy > bDim.y) {
        zy = bDim.y;
        newOffsetY = ((bDim.y - iDim.y) / cDim.height) - move.y - zoomOffset.y;
        exceedY = true;
      }
      else if (zy + zheight < bDim.y + bDim.height) {
        zy = bDim.y + bDim.height - zheight;
        newOffsetY = ((bDim.y + bDim.height - zheight - iDim.y) / cDim.height) - move.y - zoomOffset.y;
        exceedY = true;
      }
      if (exceedX || exceedY) {
        setOffset(preOffset => {
          return {
            x: exceedX ? newOffsetX : preOffset.x,
            y: exceedY ? newOffsetY : preOffset.y
          };
        });
      }

      const m = img.width / zwidth;

      setCrop({
        x: (bDim.x - zx) * m,
        y: (bDim.y - zy) * m,
        width: bDim.width * m,
        height: bDim.height * m
      });

      ctx.drawImage(img, 0, 0, img.width, img.height, zx, zy, zwidth, zheight);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.rect(0, 0, cDim.width, cDim.height);
      ctx.rect(bDim.x, bDim.y, bDim.width, bDim.height);
      ctx.fill("evenodd");
    }
  }, [img, move.x, move.y, offset.x, offset.y, zoomOffset.x, zoomOffset.y, setOffset, zoom, dim]);
  const selectImage = React.useCallback(e => {
    const file = e.target.files[0];
    var img = new Image;
    img.onload = () => {
      setImg(img);
    };
    img.src = URL.createObjectURL(file);
  }, []);
  React.useEffect(() => {
    if (crop && img) {
      onChange('profile', () => {
        return {
          img, crop
        };
      });
    }
  }, [onChange, crop, img]);
  const onZoom = React.useCallback(e => {
    const currentZoom = e.target.value;
    setZoom(preZoom => {
      // const newZoomOffsetX = (iDim.width - zwidth) / (2 * cDim.width);
      // const newZoomOffsetY = (iDim.height - zheight) / (2 * cDim.height);
      setZoomOffset(preZoomOffset => {
        if (dim) {
          const { iDim, cDim, bDim } = dim;
          //preZoom
          var preMul = (1 + (preZoom * maxZoom / 100));
          var preZwidth = iDim.width * preMul;
          var preZheight = iDim.height * preMul;

          var mul = (1 + (currentZoom * maxZoom / 100));
          var zwidth = iDim.width * mul;
          var zheight = iDim.height * mul;

          var px = ((bDim.width / 2) - ((preZoomOffset.x + offset.x) * cDim.width)) / preZwidth;
          var py = ((bDim.height / 2) - ((preZoomOffset.y + offset.y) * cDim.height)) / preZheight;

          var tx = px * zwidth;
          var ty = py * zheight;

          var newZoomOffsetX = (((bDim.width / 2) - (tx)) / cDim.width) - offset.x;
          var newZoomOffsetY = (((bDim.height / 2) - (ty)) / cDim.height) - offset.y;
        }
        return {
          x: newZoomOffsetX,
          y: newZoomOffsetY
        };
      });
      return currentZoom;
    });
  }, [dim, setZoomOffset, offset.x, offset.y]);
  return <>
    <Label htmlFor={label}>{label}</Label>
    <ImageCropperContainer>
      <AnotherContainer>
        <ImageAreaContainer>
          <ImageArea ref={canvasRef} {...pointerHandlers} hasTouchAction={img == undefined} />
        </ImageAreaContainer>
      </AnotherContainer>
      {img && <ZoomBar min="0" max="100" value={zoom} onChange={onZoom} />}
      <BrowseFileButton label={'select file'} accept={'.jpg,.jpeg,.png'} onChange={selectImage} multiple={false} />
    </ImageCropperContainer>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </>;
};

export default ImageCropper;