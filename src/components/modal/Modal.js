import React, { Component } from "react";
import styles from "./modal.css";
import { connect } from "react-redux";
import { viewLyrics } from "../../ReduxBoilerPlate/actions/ViewLyricsActions";

class Modal extends Component {
  componentDidUpdate() {
    this.props.viewLyrics(this.props.trackId);
  }

  lyricsExists() {
    if (this.props.viewLyricsProps.length !== 0) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.isOpen && this.lyricsExists()) {
      return (
        <div className={styles.modal}>
          <div>{this.props.trackId}</div>
          <section className={styles.modalMain}>
            <div className={styles.modalHead}>
              <b>Song Name</b>: {this.props.songName}
            </div>
            <div className={styles.modalBody}>
              {this.props.viewLyricsProps.data.message.body.lyrics.lyrics_body}
            </div>
            <div className={(styles.modalButton, styles.modalFooter)}>
              <button onClick={this.props.closeModal}>close</button>
            </div>
          </section>
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
