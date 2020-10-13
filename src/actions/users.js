//const for types of actions request and send success like response
export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  CREATE_USER_REQUEST: "users/create_user_request",
};

//const funcyion to set action type and get Make request To get User
export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

//const function to get user and check success to get user send type(action)
// and get payload what payload is it is what action send to code to return payload
// likely return function
export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName,
  },
});
