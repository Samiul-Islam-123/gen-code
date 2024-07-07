import React, { useState, useEffect } from 'react';
import './App.css'; // Add this for styling
import CodeEditor from './Pages/Private/CodeEditor/CodeEditor';
import {FileProvider} from './Contexts/FileContext';

const App = () => {
  const [fileContent, setFileContent] = useState('');
 
  return (
   <>
   <FileProvider>
    <CodeEditor />
   </FileProvider>
   </>
  );
};

export default App;
