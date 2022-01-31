import './Auth.css';
import React from 'react';
import { TextField, Button } from '@mui/material';
import ConditionalLink from './components/ConditionalLink';
import axios from 'axios';
import { Box } from '@mui/material/node_modules/@mui/system';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      observerName: "" ,
      password: "",
      information: "",
      links : {}
    }
  }

  handleNameChange = event => {
    this.setState({ observerName: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  handleDegreeChange = event => {
    this.setState({ information: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi! Thanks for taking the time!

            Please add your name and the passcode.
          </p>

          <Box sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
            }}>
          <TextField color="primary"
            id="name"
            padding="5px"
            label="Please add your name"
            variant="outlined"
            onChange={this.handleNameChange}/>

          <div> 

          <TextField 
            name='degree'
            id="degree"
            label="Please add your degree or background"
            variant="outlined"
            onChange={this.handleDegreeChange}/>   
          </div>

          <TextField 
            name='password'
            id="password"
            label="Please add the password"
            variant="outlined"
            type="password"
            onChange={this.handlePasswordChange}/>

          </Box> 

          <nav>
            <ConditionalLink to="/tutorial" 
            passState={this.state}
            links = {this.state.links}
            >Let's Go!</ConditionalLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
