import UsersSagas from "./users";
// what is all do if i have multiaple promises on
// javaScript we can promise all at the same time
// then only act upon it once all those are resolved

import { all } from "redux-saga/effects";

// so what this yield all will do in the root
// saga is allow all these forked processes to be created in
// {{{{{{{{{{{{{{{{{{{{{{PARALLEl}}}}}}}}}}}}}}}}}}}}}}

export default function* rootSaga() {
  yield all([...UsersSagas]);
}
