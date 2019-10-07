import React, { Component } from "react";
import SpinnerGif from "./spinner.gif";
import styles from './spinner.css';

class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinnerMain}>
        <img src={SpinnerGif} alt="loading..." />
      </div>
    );
  }
}

export default Spinner;