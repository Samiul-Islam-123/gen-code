import React, { useContext, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import FileContext from '../Contexts/FileContext';

const EditorComponent = () => {
  const { fileContent, setFileContent } = useContext(FileContext);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        model.setValue(fileContent);
      }
    }
  }, [fileContent]);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value) => {
    setFileContent(value);
  };

  return (
    <Editor
      height="90vh"
      language="javascript"
      value={fileContent}
      theme="vs-dark"
      editorDidMount={handleEditorDidMount}
      onChange={handleEditorChange}
    />
  );
};

export default EditorComponent;
