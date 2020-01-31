import {
  FETCH_SIMILAR_ARTISTS_FAILURE,
  FETCH_SIMILAR_ARTISTS_REQUEST,
  FETCH_SIMILAR_ARTISTS_SUCCESS
} from '../../actions/types';

export interface State {
  total: Record<string, any>;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
}

const initialState: State = { error: false, loading: false, total: {} };

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  const { type } = action;
  switch (type) {
    case FETCH_SIMILAR_ARTISTS_SUCCESS:
      return { ...state, loading: false };
    case FETCH_SIMILAR_ARTISTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SIMILAR_ARTISTS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
