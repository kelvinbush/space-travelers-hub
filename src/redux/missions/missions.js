import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'FETCH_MISSIONS';

const initialState = [];
const fetchMissionAction = (mission) => ({
  type: FETCH_MISSIONS,
  payload: mission,
});
const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch(fetchMissionAction(response.data));
};
