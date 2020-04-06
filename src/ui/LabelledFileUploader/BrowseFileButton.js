import React from 'react';
import PrimaryButton from '../PrimaryButton';

const BrowseFileButton = ({ label, accept, onChange }) => {
  const browseFiles = React.useCallback(e => {
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = accept;
    input.onchange = onChange;
    input.click();
  }, [accept, onChange]);
  return <PrimaryButton type='button' onClick={browseFiles}>{label}</PrimaryButton>;
};

export default BrowseFileButton;