import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import style from "../../css/Results.css";
import { connect } from "react-redux";
import { getSongs } from "./../../ReduxBoilerPlate/actions/getSongsActions";
import { viewLyrics } from "./../../ReduxBoilerPlate/actions/ViewLyricsActions";

class Result extends Component {
  componentDidMount() {
    this.props.getSongs(this.props.match.params.songTitle);
  }
  render() {
    var allSongs = null;

    if (this.props.songProps.length !== 0) {
      allSongs = this.props.songProps.data.message.body.track_list.map(
        songs => (
          <div className={style.resultCard}>
            <div className={style.cardHead}>
              <b>Song Name </b> <span>{songs.track.track_name}</span>
            </div>
            <div className={style.cardBody}>
              <b>Artist Name </b> <span>{songs.track.artist_name}</span>
              <b>Album Name</b> <span>{songs.track.album_name}</span>
            </div>
            <div className={style.cardFooter}>
              <button className={style.button} type="button">
                View Lyrics
              </button>
            </div>
          </div>
        )
      );
    }

    return (
      <div className={style.bodyComponentResults}>
        <div className={style.backButton}>
          <Link to="/">
            <button type="button">Back</button>
          </Link>
        </div>

        <div className={style.resultContainer}>
          {allSongs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songProps: state.search.items,
  viewLyricsProps: state.viewLyrics.items
});

export default connect(
  mapStateToProps,
  { getSongs, viewLyrics }
)(Result);
