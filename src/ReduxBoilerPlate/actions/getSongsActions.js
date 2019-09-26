import { GET_SONGS, VIEW_LYRICS } from "./types";
import axios from "axios";

export const getSongs = songTitle => dispatch => {
  const CORS = "https://cors-anywhere.herokuapp.com/";
  const URL = "http://api.musixmatch.com/ws/1.1/track.search";
  const preparedURL = `${CORS}${URL}`;
  const params = {
    q_track: songTitle,
    apikey: "d175c41a09dfcb1098e2f6fcce494ad7"
  };

  axios
    .get(preparedURL, { params })
    .then(songs =>
      dispatch({
        type: GET_SONGS,
        payload: songs
      })
    )
    .catch(error => console.log(error));
};