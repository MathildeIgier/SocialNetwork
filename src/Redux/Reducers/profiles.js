import { GET_PROFILES } from '../Actions';

const profiles = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILES: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default profiles;
