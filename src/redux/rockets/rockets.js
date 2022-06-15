import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const BOOK_ROCKET = 'rockets/BOOK_ROCKET';
const CANCEL_BOOK_ROCKET = 'rockets/CANCEL_BOOK_ROCKET';

const initialState = [];

const fetchRocketsAction = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  const newResponse = response.data.map((res) => ({
    id: res.rocket_id,
    rocketname: res.rocket_name,
    type: res.rocket_type,
    image: res.flickr_images[0],
    description: res.description,
  }));
  dispatch(fetchRocketsAction(newResponse));
};

export const bookRocket = (rocket) => ({
  type: BOOK_ROCKET,
  payload: rocket,
});

export const cancelBookRocket = (rocket) => ({
  type: CANCEL_BOOK_ROCKET,
  payload: rocket,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case BOOK_ROCKET: {
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    }

    case CANCEL_BOOK_ROCKET: {
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    }
    default:
      return state;
  }
};
