import React, { Component } from "react";
import styles from "./modal.css";
import Spinner from "./../LoadingSpinner/Spinner";
import { connect } from "react-redux";
import { viewLyrics } from "../../ReduxBoilerPlate/actions/ViewLyricsActions";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidUpdate() {
    this.props.viewLyrics(this.props.trackId);
  }

  lyricsExists() {
    if (this.props.viewLyricsProps.length !== 0) {
      return true;
    }
  }

  lyricsBodyExists() {
    if (this.props.viewLyricsProps.data.message.body.length !== 0) {
      return true;
    }
  }

  render() {
    let isLoading = true;
    if (this.props.isOpen && this.lyricsExists()) {
      return (
        <div>
          <div className={styles.modal}>
            <section className={styles.modalMain}>
              <div className={styles.modalHead}>
                <b>Song Name</b>: {this.props.songName}
              </div>
              <div className={styles.modalBody}>
                {this.lyricsBodyExists()
                  ? this.props.viewLyricsProps.data.message.body.lyrics
                      .lyrics_body
                  : "Lyrics to this song is not available, try searching for another song"}
              </div>
              <div className={(styles.modalButton, styles.modalFooter)}>
                <button onClick={this.props.closeModal}>close</button>
              </div>
            </section>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  viewLyricsProps: state.viewLyrics.items
});

export default connect(
  mapStateToProps,
  { viewLyrics }
)(Modal);
