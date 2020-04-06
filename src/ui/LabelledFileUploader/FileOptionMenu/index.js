import React from 'react';
import FileOptionMenuContainer from './FileOptionMenuContainer';
import PrimaryButton from '../../PrimaryButton';
import RedButton from '../../RedButton';

const FileOptionMenu = ({ showMenu, onRemove, onCancel }) => {
  const onClick = React.useCallback(e => {
    e.stopPropagation();
  }, []);
  return <FileOptionMenuContainer showMenu={showMenu} onClick={onClick}>
    <RedButton type='button' onClick={onRemove}>Delete</RedButton>
    <PrimaryButton type='button' onClick={onCancel}>Cancel</PrimaryButton>
  </FileOptionMenuContainer>;
};

export default FileOptionMenu;