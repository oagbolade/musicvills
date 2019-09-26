import { combineReducers } from 'redux';
import SearchSongReducer from "./SearchSongReducer";
import ViewLyricsReducer from "./ViewLyricsReducer";

export default combineReducers({
  search: SearchSongReducer,
  viewLyrics: ViewLyricsReducer
});
