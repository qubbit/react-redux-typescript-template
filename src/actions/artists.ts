import { get } from '../api';
// import { ThunkDispatch } from 'redux-thunk';
import {
  FETCH_SIMILAR_ARTISTS_FAILURE,
  FETCH_SIMILAR_ARTISTS_REQUEST,
  FETCH_SIMILAR_ARTISTS_SUCCESS
} from '../actions/types';

export async function fetchSimilarArtists(artistName: string) {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_SIMILAR_ARTISTS_REQUEST });
    try {
      const artists = await get(`&artist=${encodeURIComponent(artistName)}`);
      dispatch({ type: FETCH_SIMILAR_ARTISTS_SUCCESS, data: artists });
    } catch {
      dispatch({ type: FETCH_SIMILAR_ARTISTS_FAILURE });
    }
  };
}
