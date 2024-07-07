import { createContext, useContext, useEffect, useState } from "react";

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [fileContent, setFileContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    console.log(fileContent, selectedFile)
  },[fileContent, selectedFile])

  return (
    <FileContext.Provider value={{
      selectedFile,
      setSelectedFile,
      fileContent,
      setFileContent
    }}>
      {children}
    </FileContext.Provider>
  )
}

export default FileContext;
