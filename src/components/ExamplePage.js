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
      inputValue: 50,
      time: 0
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
      finalScore : this.state.finalScore,
      snaps: this.snapshots
    }

    console.log(user_snapshots);

    axios.post(`https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form`,
      { user_snapshots },
      { headers: { 'content-type': 'application/json' } })
      .then(res => {


        if (res.data.statusCode === 200) {
          alert("Success! Thank you! Registered in the database");
          this.snapshots = [];
        }
      })
  }

  ref = player => {
    this.player = player
  }

  handlePrepSeq(player) {

    player.seekTo(this.startTime, "seconds");
    this.player.getInternalPlayer().playVideo()
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

    if (this.player.getCurrentTime() > this.endTime) {
      this.player.getInternalPlayer().pauseVideo()
    }

    let time = this.player.getCurrentTime()

    let currState = this.state
    this.snapshots.push(currState)


    console.log("Snapshot " + this.snapshots)
  };

  changePage(newPage) {
    this.setState({ video: newPage });
    console.log("changed" + this.state.video)
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
      <div className="ExamplePage">
        <header>

        </header>
        <body className="ExamplePage-body">

          Please rate how engaging you find the video, looking at the

          <p className='Feature'>
            {this.feature.toUpperCase()}
          </p>


          <div className='contents'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              player={this.playing}
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

            <p style={{ "fontSize": 15 }}>
              Please add a score between 1 and 10, for how engaging the overall video was.
            </p>
            <TextField id="score" label="Please add overall score" variant="outlined" onChange={e => this.changeFinalScore(e.target.value)}/>
            <br />
            <br />

            <Button color="success" type="submit" variant="contained" onClick={this.handleSubmit}>Submit</Button>
          </div>

        </body>

      </div>

    );
  }
}

export default ExamplePage;

