import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'missionstore/missions/FETCH_MISSIONS';

const initialState = [];

const fetchMissionAction = (mission) => ({
  type: FETCH_MISSIONS,
  payload: mission,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch(fetchMissionAction(response.data));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};
