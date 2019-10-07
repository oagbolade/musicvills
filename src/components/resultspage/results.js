import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import style from "../../css/Results.css";
import Modal from "./../modal/Modal";
import Spinner from "./../LoadingSpinner/Spinner";
import { connect } from "react-redux";
import { getSongs } from "../../ReduxBoilerPlate/actions/getSongsActions";
import { viewLyrics } from "../../ReduxBoilerPlate/actions/ViewLyricsActions";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modalIsOpen: false,
      lyrics: {},
      trackId: null,
      trackName: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getTrackId = this.getTrackId.bind(this);
    this.getTrackName = this.getTrackName.bind(this);
  }

  componentDidMount() {
    this.props.getSongs(this.props.match.params.songTitle);
  }

  openModal(id, trackName) {
    this.getTrackId(id);
    this.getTrackName(trackName);
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  getTrackId(id) {
    this.setState({ trackId: id });
    //this.props.viewLyrics(15953433);
  }

  getTrackName(trackName) {
    this.setState({ trackName });
  }

  loading() {
    this.setState({ loading: false });
  }

  SongsExists() {
    if (this.props.songProps.length !== 0) {
      console.log(this.props.songProps);
      return true;
    }
  }

  render() {
    let allSongs = null;
    if (this.SongsExists()) {
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
              <button
                className={style.button}
                onClick={() =>
                  this.openModal(
                    songs.track.commontrack_id,
                    songs.track.track_name
                  )
                }
                type="button"
              >
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
        <div>
          {this.SongsExists() ? (
            <div className={style.resultContainer}>{allSongs}</div>
          ) : (
            <Spinner />
          )}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          trackId={this.state.trackId}
          closeModal={this.closeModal}
          songName={this.state.trackName}
        />
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
