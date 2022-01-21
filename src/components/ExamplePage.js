import React, { useState }  from 'react';
import ReactPlayer from 'react-player'
import { Box, Slider,TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import axios from 'axios';

export class ExamplePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      observerName: "test_integration",
      inputValue: 50,
      time: 0
    };

    this.snapshots = []
  }

  handleTextChange = event => {
    this.setState({ observerName: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user_snapshots = {
      user : this.observerName,
      snaps : this.snapshots
    }

    const user = "hello"

    console.log(user_snapshots);
    axios.post(`https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form`, 
                { user },
                { headers: {'content-type': 'application/json',
                            'Access-Control-Allow-Origin': '*'}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleSliderChange(newValue) {
    this.setState({
      inputValue: newValue,
      time: this.player.getCurrentTime()
    });

    console.log("changed to " + this.state.inputValue)
    let time = this.player.getCurrentTime()
    console.log("played " + time)
    console.log(this.state.observerName)

    let currState = this.state
    this.snapshots.push(currState)

    console.log("Snapshot" + this.snapshots)
  };

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <div className="ExamplePage">
        <header className="ExamplePage-header">
          <p>
            Example Page
          </p>
          <TextField color="primary" 
                      id="outlined-basic" 
                      padding="5px" 
                      label="Please add your name" 
                      variant="outlined"
                      onChange={this.handleTextChange}/>
          <div>
            <ReactPlayer
                ref={this.ref}
                className='react-player'
                url="https://www.youtube.com/watch?v=LNHBMFCzznE"
                
            />
            <Box sx={{ width: 300 }}>
              <Slider defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="on" 
                    onChange={evt => this.handleSliderChange(evt.target.value)}
                    step={10}
                    marks
                    min={10}
                    max={100}/>
            </Box>

            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        </header>
      </div>
    );
  }
}
 
export default ExamplePage;

 