const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = 5000;

app.use(express.json());

const projectDirectory = 'C:\\Users\\USER\\Desktop\\code-editor\\backend\\project';


// Endpoint to list files in the project directory
app.get('/api/files', (req, res) => {
  fs.readdir(projectDirectory, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    res.json(files);
  });
});

// Endpoint to read a specific file
app.get('/api/files/:filename', (req, res) => {
  console.log(req.params.filename)
  const filePath = path.join(projectDirectory, req.params.filename);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Unable to read file');
    }
    res.send(data);
  });
});

// Endpoint to write to a specific file
app.post('/api/files/:filename', (req, res) => {
  const filePath = path.join(projectDirectory, req.params.filename);
  fs.writeFile(filePath, req.body.content, 'utf8', (err) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Unable to write file');
    }
    res.send('File saved successfully');
  });
});

// Endpoint to execute terminal commands~
app.post('/api/terminal', (req, res) => {
  const command = req.body.command;
  exec(command, { cwd: projectDirectory }, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(stderr);
    }
    res.send(stdout);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
