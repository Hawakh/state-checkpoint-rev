import React, { Component } from 'react';
import proptypes from 'prop-types';

class Profile extends Component {
  state = {
    person: {
      fullName: "Haoua Khleifi",
      bio: "5 years of experience",
      imgSrc: "./profilephoto.jpg",
      profession: "Web Developper"
    },
    timeSinceMounted: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      let timeSinceMounted = this.state.timeSinceMounted + 1;
      let hours = Math.floor(timeSinceMounted / 3600);
      let minutes = Math.floor((timeSinceMounted % 3600) / 60);
      let seconds = timeSinceMounted % 60;
      this.setState({
        timeSinceMounted,
        hours,
        minutes,
        seconds
      });
    }, 1000);
  };
  render() {
    return (
      <div>

            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <p>{this.state.person.profession}</p>
       
          
          <p>Time since last mount: {this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
      </div>
    );
  }
}
Profile.prototypes={
fullName:proptypes.string,
Bio:proptypes.string,
profession:proptypes.string

}
export default Profile;