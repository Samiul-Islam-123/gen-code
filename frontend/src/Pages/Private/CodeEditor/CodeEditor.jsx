import React from 'react'
import FileTree from '../../../Components/FileTree'
import Editor from '../../../Components/Editor'
import TerminalComponent from '../../../Components/Terminal';
import { useState } from 'react';

function CodeEditor() {

    const [fileContent, setFileContent] = useState('');


  return (
    <>
        <div className="app-container">
      <div className="file-tree-container">
        <FileTree  />
      </div>
      <div className="editor-terminal-container">
        <Editor fileContent={fileContent}  />
        <TerminalComponent />
      </div>
    </div>
    </>
  )
}

export default CodeEditor