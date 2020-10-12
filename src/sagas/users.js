/// takeEvey to get all data into yield which generatied by yield
/// call is allow us to call a promise to wait data to fetch
/// {fork lets discuss if we have a main progress if we fork from it
/// we get a child of this process which ew fork from it
/// and we can call it from and procss the main use or why i use it
/// to get process from a process and another one & another one
// and when any process have an error dont effect in other forks
/// to understand read line: 23 24
import { takeEvery, call, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";
function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log(result);
  } catch (err) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];
export default usersSagas;
