import React, { useState } from 'react';
import Console from 'react-console-emulator';
import axios from 'axios';

const TerminalComponent = () => {
  const [output, setOutput] = useState('');

  const commands = {
    help: () => 'Available commands: help, echo [text], fetch [url]',
    echo: (args) => args.join(' '),
    fetch: async (args) => {
      const url = args[0];
      try {
        const response = await axios.get(url);
        return JSON.stringify(response.data, null, 2);
      } catch (error) {
        return `Error fetching data from ${url}: ${error.message}`;
      }
    },
  };

  const commandCallback = (command, print) => {
    const commandName = command.split(' ')[0];
    const args = command.split(' ').slice(1);
    
    if (commands[commandName]) {
      const result = commands[commandName](args);
      print(result);
    } else {
      print(`Command not found: ${command}`);
    }
  };

  return (
    <Console
      handler={commandCallback}
      welcomeMessage="Welcome to the console! Type 'help' to see available commands."
      autoFocus={true}
    />
  );
};

export default TerminalComponent;
