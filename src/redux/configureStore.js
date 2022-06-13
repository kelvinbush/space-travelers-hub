import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
