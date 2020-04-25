import React from 'react';
import logo from './logo.svg';
import { Container, Paper, TextField, Typography } from "@material-ui/core"
import './App.css';

const messageList = (msgs: string[]): React.ReactElement[] => {
  return msgs.map((msg: string) => <Typography>{msg}</Typography>);
}

function App() {
  return (
    <div className="App">
      <Container>
        <Paper style={{maxHeight: "80%", height: "80vh", overflow: "auto"}}>
          {messageList(["text1", "text2", "text3"])}
        </Paper>
        <TextField
          id="outlined-textarea-static"
          label="Write a Message!"
          multiline
          rows="1"
          rowsMax="4"
          variant="outlined"
          fullWidth
        />
      </Container>
       {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.tsx</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header> */}
    </div>
  );
}

export default App;