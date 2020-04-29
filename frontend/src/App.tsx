import React, { useState } from 'react';
import { Container, Paper, TextField, Typography } from "@material-ui/core"
import io from 'socket.io-client';
import './App.css';

const messageHTMLList = (msgs: string[]): React.ReactElement[] => {
  return msgs.map((msg: string) => <Typography>{msg}</Typography>);
}

const socket = io('http://localhost:8080/');

socket.on('connect', () => {
  console.log(socket.connected); // true
});

socket.emit('username', "Christina");

function App() {
  const [messageList, setMessageList] = useState<string[]>([])

  socket.on('chat_message', (data: string) => {
    setMessageList(messageList.concat(data));
  });

  return (
    <div className="App">
      <Container>
        <Paper style={{maxHeight: "80%", height: "80vh", overflow: "auto"}}>
          {messageHTMLList(messageList)}
        </Paper>
        <TextField
          id="outlined-textarea-static"
          label="Write a Message!"
          multiline
          rows="1"
          rowsMax="4"
          variant="outlined"
          fullWidth
          onKeyPress={(ev: any) => {
            if (ev.key === 'Enter') {
              ev.preventDefault();
              socket.emit('chat_message', ev.target.value)
            }
          }}
        />
      </Container>
    </div>
  );
}

export default App;