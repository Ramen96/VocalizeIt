import React from "react";
import { Component } from "react";
import '../../assets/tailwind.css';

class Submit extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <button id="submit" className="ext-button postion-bottom">Submit</button>
      </div>
    )
  }
}

export default Submit;
