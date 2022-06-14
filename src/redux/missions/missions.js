import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'missionstore/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'missionstore/missions/JOIN_MISSION';

const initialState = [];

const fetchMissionAction = (mission) => ({
  type: FETCH_MISSIONS,
  payload: mission,
});

export const joinMissionAction = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch(fetchMissionAction(response.data));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    default:
      return state;
  }
};
