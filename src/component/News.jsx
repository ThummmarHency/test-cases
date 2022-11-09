// import axios from "axios";
import React, { Component } from "react";
import * as math from "../Mock";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsCount: 0,
      age: 0,
    };
  }
  componentDidMount() {
    this.anyTemp();
    setTimeout(() => {
      this.changeStat();
    }, 2000);
    this.func();
  }

  changeStat() {
    this.setState({ newsCount: 3 });
  }

  func = async (no1, no2) => {
    let url = "http://localhost:3000/age";
    let options = {
      method: "get",
      url: url,
    };
    try {
      let response = await options;
      this.setState({ age: response?.data[0] });
    } catch (error) {
      return error;
    }
  };
  anyTemp = () => {
    return true;
  };
  multiplyNumber = () => {
    math.multi(20,20)
    math.multi(20,20)
  };
  render() {
    return (
      <div>
        News component
        <input type="text" name="test" value="0" />
        <button onClick={this.multiplyNumber}></button>
      </div>
    );
  }
}

export default News;
