import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';

const initialState = [];

const fetchRocketsAction = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  const newResponse = response.data.map((res) => [
    res.rocket_id,
    res.rocket_name,
    res.rocket_type,
    res.flickr_images,
  ]);
  dispatch(fetchRocketsAction(newResponse));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};
