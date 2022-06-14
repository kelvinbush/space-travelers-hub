import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
