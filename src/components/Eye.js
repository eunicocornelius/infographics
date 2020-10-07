import React, { Component } from "react";
import "./Eye.css";
import pupil from "../assets/images/pupil.png";
import eyelid from "../assets/images/eye.png";

class Eye extends Component {
  componentDidMount() {
    window.addEventListener("mousemove", this._onMouseMove);
    window.addEventListener("mouseout", this._onMouseLeave);
  }

  _onMouseMove = (e) => {
    var balls = document.getElementsByClassName("ball");

    var x = (e.clientX * 100) / window.innerWidth + "%";
    var y = (e.clientY * 100) / window.innerHeight + "%";

    console.log(e.clientX, e.clientX);

    balls[0].style.left = x;
    balls[0].style.top = y;
    balls[0].style.transform = "translate(-" + x + ",-" + y + ")";
    balls[0].style.transitionDuration = "0s";
  };

  _onMouseLeave = (e) => {
    var balls = document.getElementsByClassName("ball");

    var x = "50%";
    var y = "50%";

    balls[0].style.left = x;
    balls[0].style.top = y;
    balls[0].style.transform = "translate(-" + x + ",-" + y + ")";
    balls[0].style.transitionDuration = ".5s";
  };

  render() {
    return (
      <div className='eyes'>
        <img className='eyelid' src={eyelid} />
        <div className='eye'>
          <div className='ball'>
            <img className='pupil' src={pupil} />
          </div>
        </div>
      </div>
    );
  }
}

export default Eye;
