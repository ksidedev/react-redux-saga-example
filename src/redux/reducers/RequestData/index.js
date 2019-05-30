import { RECEIVE_API_DATA } from "../../actions/RequestData";

export const initialState = {
  receiveApiData: 'aaaa'
};
export const requestData = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return Object.assign({}, state, {
        receiveApiData: action.data
      });
    default:
      return state;
  }
};
