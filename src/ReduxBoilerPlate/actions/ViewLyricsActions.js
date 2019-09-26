import { VIEW_LYRICS } from "./types";
import axios from "axios";

export const viewLyrics = () => dispatch => {
  const CORS = "https://cors-anywhere.herokuapp.com/";
  const URL =
    "http://api.musixmatch.com/ws/1.1/track.lyrics.get";
  const preparedURL = `${CORS}${URL}`;
  const params = {
    track_id: "15953433",
    apikey: "d175c41a09dfcb1098e2f6fcce494ad7"
  };

  axios
    .get(preparedURL, { params })
    .then(lyrics =>
      dispatch({
        type: VIEW_LYRICS,
        payload: lyrics
      })
    )
    .catch(error => console.log(error));
};