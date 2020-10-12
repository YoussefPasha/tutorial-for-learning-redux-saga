import { act } from "react-dom/test-utils";

// get heada class action types (request to get user and send user in success)
import { Types } from "../actions/users";

// Make INITIAL_STATE to set items value to show in all class and can handle in store
// to send with combine in index class and connect to store
const INITIAL_STATE = {
  items: [],
};

// default class to export users when we send req to get user
// set state to update on INITAL_STATE and send action
// in Logic what happens
/* {switch case user send req this class cant have case which type is Get_User_request
    but have Type Which Get_User_SUCCESS when action Types send SUCCESS to RETURN 
    action payload and return this payload items this cycle called 🎈redux🎈 }*/
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        items: action.payload.items,
      };
    }
    default: {
      return state;
    }
  }
}
