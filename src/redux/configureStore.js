import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
