import React from 'react';

const eventToCoor = e => {
  var rect = e.target.getBoundingClientRect();
  var x = (e.clientX - rect.left) / rect.width; //x position within the element.
  var y = (e.clientY - rect.top) / rect.height; //y position within the element.
  return { x, y };
};

const usePointerHandlers = () => {
  const [anchor, setAnchor] = React.useState();
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [movedDis, setMovedDis] = React.useState({ x: 0, y: 0 });
  const onPointerDown = React.useCallback(e => {
    console.log('onPointerDown');
    setAnchor(eventToCoor(e));
  }, []);

  const save = React.useCallback(e => {
    if (anchor) {
      setOffset(preOffset => {
        return {
          x: preOffset.x + movedDis.x,
          y: preOffset.y + movedDis.y
        };
      });
      setAnchor();
      setMovedDis({ x: 0, y: 0 });
    }
  }, [movedDis, anchor]);

  const onPointerUp = React.useCallback(e => {
    console.log('onPointerUp');
    save(e);
  }, [save]);
  const onPointerLeave = React.useCallback(e => {
    console.log('onPointerLeave');
    save(e);
  }, [save]);
  const onPointerMove = React.useCallback(e => {
    const movedCoor = eventToCoor(e);
    if (anchor) {
      setMovedDis({
        x: movedCoor.x - anchor.x,
        y: movedCoor.y - anchor.y
      });
    }
  }, [anchor]);

  return {
    movedDis,
    offset,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerLeave
  };
};

export default usePointerHandlers;