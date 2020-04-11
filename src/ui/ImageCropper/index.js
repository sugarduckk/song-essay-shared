import React from 'react';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';
import ImageCropperContainer from './ImageCropperContainer';
import ImageArea from './ImageArea';
import BrowseFileButton from '../LabelledFileUploader/BrowseFileButton';
import ImageAreaContainer from './ImageAreaContainer';
import AnotherContainer from './AnotherContainer';
import usePointerHandlers from './usePinterHandlers';

const maxScale = 4;

const ImageCropper = ({ label, error, ...otherProps }) => {
  const { movedDis, offset, ...pointerHandlers } = usePointerHandlers();
  const [zoom, setZoom] = React.useState(0);
  const [img, setImg] = React.useState();
  const canvasRef = React.useRef();
  React.useEffect(() => {
    if (img) {
      var ctx = canvasRef.current.getContext('2d');
      const ratio = img.width / img.height;
      const portrait = ratio < 1;
      const side = portrait ? img.height : img.width;
      const cWidth = side;
      const cHeight = side;
      canvasRef.current.width = cWidth;
      canvasRef.current.height = cHeight;
      var sx, sy, swidth, sheight, x, y, width, height;
      sx = 0;
      sy = 0;
      swidth = img.width;
      sheight = img.height;
      if (portrait) {
        y = 0;
        height = side;
        width = ratio * side;
        x = (side - width) / 2;
      }
      else {
        x = 0;
        width = side;
        height = side / ratio;
        y = (side - height) / 2;
      }
      // define inner square
      var ix, iy, iwidth, iheight;
      if (portrait) {
        ix = x;
        iy = (side - width) / 2;
        iwidth = width,
          iheight = width;
      }
      else {
        ix = (side - height) / 2;
        iy = y;
        iwidth = height,
          iheight = height;
      }
      // image position
      var mul = (1 + (zoom * maxScale / 100));
      var dwidth = width * mul;
      var dheight = height * mul;

      var dx = ((side - dwidth) / 2) + (movedDis.x * cWidth) + (offset.x * cWidth);
      var dy = ((side - dheight) / 2) + (movedDis.y * cHeight) + (offset.y * cHeight);

      if (dx > ix) {
        dx = ix;
      }
      else if (dx + dwidth < ix + iwidth) {
        dx = ix + iwidth - dwidth;
      }
      if (dy > iy) {
        dy = iy;
      }
      else if (dy + dheight < iy + iheight) {
        dy = iy + iheight - dheight;
      }

      ctx.drawImage(img, 0, 0, img.width, img.height, dx, dy, dwidth, dheight);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.rect(0, 0, side, side);
      ctx.rect(ix, iy, iwidth, iheight);
      ctx.fill("evenodd");
    }
  }, [img, zoom, movedDis.x, movedDis.y, offset.x, offset.y, movedDis, offset]);
  const selectImage = React.useCallback(e => {
    const file = e.target.files[0];
    var img = new Image;
    img.onload = () => {
      setImg(img);
    };
    img.src = URL.createObjectURL(file);
  }, []);
  return <>
    <Label htmlFor={label}>{label}</Label>
    <ImageCropperContainer>
      <AnotherContainer>
        <ImageAreaContainer>
          <ImageArea ref={canvasRef} {...pointerHandlers} hasTouchAction={img == undefined} />
        </ImageAreaContainer>
      </AnotherContainer>
      <input type="range" min="0" max="100" value={zoom} onChange={e => { setZoom(e.target.value); }} />
      <BrowseFileButton label={'select file'} accept={'.jpg,.jpeg,.png'} onChange={selectImage} multiple={false} />
    </ImageCropperContainer>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </>;
};

export default ImageCropper;