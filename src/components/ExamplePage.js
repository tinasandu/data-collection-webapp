import './ExamplePage.css';
import React from 'react';
import ReactPlayer from 'react-player'
import { Slider, Button, TextField } from "@mui/material";
import axios from 'axios';
import { format } from 'react-string-format';

export class ExamplePage extends React.Component {

  constructor(props) {
    super(props);

    this.observerName = props.observerName;
    this.information = props.information;
    this.links = props.links;

    this.state = {
      video: props.video,
      finalScore: 5,
      inputValue: 0,
      time: 0,
      prevScore: 0
    };

    this.displayLink = this.links[format("video{0}", this.state.video)]
    this.feature = this.links[format("feature{0}", this.state.video)]
    this.endTime = this.links[format("endTime{0}", this.state.video)]
    this.startTime = this.links[format("startTime{0}", this.state.video)]

    this.snapshots = [];
  }

  handleSubmit = event => {
    event.preventDefault();

    const user_snapshots = {
      user: this.observerName,
      information: this.information,
      video: this.state.video,
      feature: this.feature,
      finalScore: this.state.finalScore,
      snaps: this.snapshots
    }

    console.log(user_snapshots);

    axios.post(`https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form`,
      { user_snapshots },
      { headers: { 'content-type': 'application/json' } })
      .then(res => {


        if (res.data.statusCode === 200) {
          alert("Success! Thank you! Collected your scores.\
 Please navigate to the next video, by clicking on the next video down the page");
          // this.snapshots = [];
        }
      })
  }

  ref = player => {
    this.player = player
  }

  handlePrepSeq(player) {

    player.seekTo(this.startTime, "seconds");
    this.player.getInternalPlayer().playVideo()
  }

  handleSliderChange(newValue) {
    if (this.player.getCurrentTime() === 0) {
      console.log("not playing")
      return
    }
    this.setState({
      inputValue: newValue,
      time: this.player.getCurrentTime().toFixed(2)
    });

    if (this.player.getCurrentTime() > this.endTime) {
      this.player.getInternalPlayer().pauseVideo()
    }

    if (this.state.prevScore !== this.state.inputValue) {

      const currState = {inputValue: this.state.inputValue, time : this.state.time}
      this.setState({ prevScore: this.state.inputValue });

      this.snapshots.push(currState)
    }

    console.log("Snapshot " + this.snapshots)
  };

  changePage(newPage) {
    this.setState({ video: newPage });
    console.log("changed" + this.state.video)
    this.snapshots = [];
  }

  changeFinalScore(score) {
    this.setState({ finalScore: score });
    console.log("final Score: ", this.state.finalScore)
  }

  displayFinalScore() {

    if (this.player) {
      console.log(this.player.getCurrentTime());
      return (this.player.getCurrentTime() > 2.0 ? "required" : "disabled");
    } else {
      return "disabled";
    }
  }

  render() {
    return (
      <div className="ExamplePage-body">
        <p className="ExamplePage-instructions">
          I would like you to assess continously, and to move the slider as the video plays. You can use the keyboard to move the slider when you click on it once.
          <br />

          You will be asked to rate one feature or the overall performance. If you are asked to rate a feature, I mean the following:
          <br />
          <br />

          <b>POSE</b> - you can assess the body posture, use of gestures and/or movements around the room: how engaging is it to you?
          <br />
          <b>FACIAL EXPRESSION </b>-  you can assess the facial expressivity  (do they smile, are they animated?): how engaging is it to you?
          <br />
          <b>VOICE</b> - you can assess the rhythm, vocal tone (happy, enthusiastic or bored), and/or how animated the voice is, but not the content: how engaging is it to you?

        </p>

        Please rate CONTINUOUSLY, using the slider, how engaging you find the video, looking at the:

        <p className='Feature'>
          {this.feature.toUpperCase()}
        </p>


        <div className='contents'>
          <div className='player-wrapper'>
            <ReactPlayer
              width='100%'
              height='100%'
              ref={this.ref}
              className='react-player'
              url={this.displayLink}
              onStart={e => this.handlePrepSeq(this.player)}
            />
          </div>
          <br />
          <br />

          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="on"
            onChange={evt => this.handleSliderChange(evt.target.value)}
            step={1}
            marks={[
              {
                value: -5,
                label: '-5, not engaging at all'
              },
              {
                value: 5,
                label: '5, very engaging'
              }]}

            min={-5}
            max={5} />

          <p style={{ "fontSize": 18 }}>
            Please add a score between -5 and 5, for how engaging the overall video was.
            <br />
            Only one score is necessary, AFTER watching the video.
          </p>
          <TextField type="number" id="score" label="Please add overall score" variant="outlined" onChange={e => this.changeFinalScore(e.target.value)} />
          <br />
          <br />

          <p style={{ "fontSize": 18 }}>
            Please submit when you finish rating each video.
          </p>

          <Button color="success" type="submit" variant="contained" onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>

    );
  }
}

export default ExamplePage;

