import React from "react";
import "./App.css";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [
        {
          keyCode: 81,
          pad: "Q",
          audioUrl:
            "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        {
          keyCode: 87,
          pad: "W",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        },
        {
          keyCode: 69,
          pad: "E",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        },
        {
          keyCode: 65,
          pad: "A",
          audioUrl:
            "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        },
        {
          keyCode: 83,
          pad: "S",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        },
        {
          keyCode: 68,
          pad: "D",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        },
        {
          keyCode: 90,
          pad: "Z",
          audioUrl:
            "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        },
        {
          keyCode: 88,
          pad: "X",
          audioUrl:
            "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        },
        {
          keyCode: 67,
          pad: "C",
          audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        },
      ],
      displayNote: " ",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handlePress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlePress);
  }

  handleClick = (e) => {
    const audio = e.target.children[0];
    audio.play();

    this.setState({
      displayNote: e.target.id,
    });
  };

  handlePress = (e) => {
    this.state.details.forEach((d) => {
      if (d.keyCode === e.keyCode) {
        let audio = document.getElementById(d.pad);
        audio.play();

        this.setState({
          displayNote: d.pad + "-chord",
        });
      }
    });
  };

  render() {
    return (
      <div className="drum-machine" id="drum-machine">
        <div className="drum-pads">
          {this.state.details.map((letters, index) => (
            <div
              className="drum-pad"
              key={index}
              id={letters.pad + "-chord"}
              onClick={this.handleClick}
            >
              {letters.pad}
              <audio
                src={letters.audioUrl}
                id={letters.pad}
                className="clip"
              ></audio>
            </div>
          ))}
        </div>
        <div className="display" id="display">
          <h2>Display</h2>
          <div className="note-name">{this.state.displayNote}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>My React Drum Machine</h1>
        <DrumMachine />
      </div>
    );
  }
}

export default App;
