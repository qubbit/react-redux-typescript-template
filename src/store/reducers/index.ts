import { combineReducers } from 'redux';
import artists from './artists';

export const rootReducer = combineReducers({ artists });
export type RootState = ReturnType<typeof rootReducer>;
