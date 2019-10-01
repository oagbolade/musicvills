import React, { Component } from "react";
import {
  Route,
  Link,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import style from "../../css/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { songTitle: "", redirect: false };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  search() {
    this.setState({ redirect: true });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`/results/${this.state.songTitle}`} />;
    }

    return (
      <div className={style.bodyComponentHome}>
        <div className={style.textDescription}>
          <h3>Musicvills</h3>
          <h6>Discover lyrics to over 100 million songs worldwide</h6>
        </div>
        <div className={style.searchBar}>
          <div>
            <input
              type="text"
              placeholder="Enter song title..."
              name="songTitle"
              value={this.state.songTitle}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type="button" onClick={this.search}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
