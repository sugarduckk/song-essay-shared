import React from 'react';
import FileDivContainer from './FileDivContainer';
import FileIconWrapper from './FileIconWrapper';
import RedButton from '../RedButton';
import TextTag from '../TextTag';
import FileUnsupported from '../../res/icons/file_unsupported.svg';
import FilePDF from '../../res/icons/file_pdf.svg';
import FileDOC from '../../res/icons/file_doc.svg';

const FILE_EXTENTIONS = [
  'pdf',
  'png',
  'jpg',
  'jpeg',
  'doc',
  'docx'
];

const FileDiv = ({ file, onRemove }) => {
  const [error, setError] = React.useState();
  const [extension, setExtension] = React.useState();
  React.useEffect(() => {
    const extArray = file.name.split('.');
    if (extArray.length === 1) {
      setError('File without extension');
    }
    else {
      const ext = extArray.pop().toLowerCase();
      console.log(ext);
      if (FILE_EXTENTIONS.includes(ext)) {
        setExtension(ext);
      }
      else {
        setError(`.${ext} not supported`);
      }
    }
  }, [file]);

  const renderError = React.useMemo(() => {
    if (error) {
      console.log(error);
      return <>
        <FileIconWrapper src={FileUnsupported} />
        <TextTag bgColor='crimson'>{error}</TextTag>
      </>;
    }
    else {
      // supported
      if (extension === 'pdf') {
        return <>
          <FileIconWrapper src={FilePDF} />
          <TextTag bgColor='#E3242B'>{`.${extension} file`}</TextTag>
        </>;
      }
      else if (extension === 'doc' || extension === 'docx') {
        return <>
          <FileIconWrapper src={FileDOC} />
          <TextTag bgColor='#2A5699'>{`.${extension} file`}</TextTag>
        </>;
      }
      else {
        return <>
          <FileIconWrapper src={URL.createObjectURL(file)} />
          <TextTag bgColor='#2A5699'>{`.${extension} file`}</TextTag>
        </>;
      }
    }
  }, [error, extension, file]);
  return <FileDivContainer error={error}>
    {error && <RedButton onClick={onRemove}>Remove</RedButton>}
    {renderError}
    <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{file.name}</div>
  </FileDivContainer>;
};

export default FileDiv;