import React, { useContext, useState } from 'react';
import { Treebeard } from 'react-treebeard';
import FileContext from '../Contexts/FileContext';

// Initial data structure for the file tree
const initialData = {
  name: 'root',
  toggled: true,
  children: [
    {
      name: 'src',
      children: [
        { name: 'components', children: [{ name: 'index.js' }] },
        { name: 'hooks', children: [{ name: 'useHook.js' }] },
      ],
    },
  ],
};

const FileTree = () => {
  const { setSelectedFile, setFileContent } = useContext(FileContext);
  const [treeData, setTreeData] = useState(initialData);
  const [cursor, setCursor] = useState(null);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    } else {
      setSelectedFile(node.name);
      // Simulate fetching file content
      const fileContent = `Content of ${node.name}`;
      setFileContent(fileContent);
    }
    setCursor(node);
    setTreeData({ ...treeData });
  };

  return <Treebeard data={treeData} onToggle={onToggle} />;
};

export default FileTree;
