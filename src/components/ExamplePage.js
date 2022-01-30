import './ExamplePage.css';
import React from 'react';
import ReactPlayer from 'react-player'
import { Box, Slider, Button } from "@mui/material";
import axios from 'axios';
import { format } from 'react-string-format';

export class ExamplePage extends React.Component {

  constructor(props) {
    super(props);

    this.observerName = props.observerName;
    this.information = props.information;
    this.links = props.links;
    this.video = props.video;

    this.displayLink = this.links[format("video{0}", this.video)]

    this.state = {
      inputValue: 50,
      time: 0
    };

    this.snapshots = [];
  }

  changePage = event => {
    console.log(event)
  }

  handleSubmit = event => {
    event.preventDefault();

    const user_snapshots = {
      user: this.observerName,
      information: this.information,
      video: this.video,
      snaps: this.snapshots
    }

    console.log(user_snapshots);

    axios.post(`https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form`,
      { user_snapshots },
      { headers: { 'content-type': 'application/json' } })
      .then(res => {
        console.log(res);
        console.log(res.data);

        if (res.data.statusCode === 200) {
          console.log('s')
          alert("Success! Thank you! Registered in the database");
        }
      })
  }

  ref = player => {
    this.player = player
  }

  handlePrepSeq(player) {
    player.seekTo(10.0, "seconds")
    console.log("started")
    this.setState({ playing: true })
  }

  handleSliderChange(newValue) {
    if (this.player.getCurrentTime() === 0) {
      console.log("not playing")
      return
    }
    this.setState({
      inputValue: newValue,
      time: this.player.getCurrentTime()
    });
    console.log("changed to " + this.state.inputValue)
    let time = this.player.getCurrentTime()
    console.log("played " + time)
    console.log(this.observerName)

    let currState = this.state
    this.snapshots.push(currState)


    console.log("Snapshot " + this.snapshots)
  };

  render() {
    return (
      <div className="ExamplePage">
        <header>
  
        </header>
        <body className="ExamplePage-body">
          <p className="ExamplePage-instructions">
            This is the tutorial page, for you to test the interface.
            When you start the video, it will jump to the important section, that I would like you to rate.
            Please watch and assess until it automatically stops.
            I would like you to assess continously, and to move the slider as the video plays. You can use the keyboard to move the slider once you click on it once.
          </p>
          <p className="ExamplePage-instructions">
            Please click submit, at the bottom of the page, when you finished watching.
          </p>
          Please rate how engaging you find the video, looking at the

          <p className='Feature'>
            POSE
          </p>


          <div className='contents'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              url={this.displayLink}
              onStart={e => this.handlePrepSeq(this.player)}
            />

            <Slider
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="on"
              onChange={evt => this.handleSliderChange(evt.target.value)}
              step={1}
              marks={[
                {
                  value: -5,
                  label: '-5, not engaging at all',
                },
                {
                  value: 5,
                  label: '5, very engaging'
                }]}

              min={-5}
              max={5} />


            <Button color="success" type="submit" variant="contained" onClick={this.handleSubmit}>Submit</Button>
          </div>
        </body>
        
      </div>
      
    );
  }
}

export default ExamplePage;

