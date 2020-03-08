import { combineReducers } from 'redux';
import app from './app/reducer';
import posts from './posts/reducer';
import users from './users/reducer';


export default function createReducer(asyncReducers) {
  return combineReducers({
    app,
    posts,
    users,
    ...asyncReducers,
  });
}
