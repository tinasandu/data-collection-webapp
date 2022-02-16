import './Auth.css';
import React from 'react';
import { TextField, Box } from '@mui/material';
import ConditionalLink from './components/ConditionalLink';

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
  document.title = 'Teaching Videos'
    return (
        <div className="App-header">
          <p className="App-instructions">
            Hi! Thanks for taking the time!
            <br/>
            Please add your name, background and the passcode. 
            This information will not be stored, but will be used in creating a weighted average of the scores.
            (For example, the computing lecture snippet, participants with a computing background will have a higher weight.)
            <br/>
            We are trying to understand the perception on the para-verbal communication, rather than content delivered, and this will ensure the impact of background difference is minimised.
            For best results, please continue on a desktop, not a phone.
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

          <br/>

          <nav>
            <ConditionalLink to="/tutorial" 
            passState={this.state}
            links = {this.state.links}
            children={"Let's Go!"}
            >Let's Go!</ConditionalLink>
          </nav>

          <p style={{"fontSize":20}}>
            Please allow a second after you put the passcode for the links to load.
          </p>
        </div>
    );
  }
}

export default App;
