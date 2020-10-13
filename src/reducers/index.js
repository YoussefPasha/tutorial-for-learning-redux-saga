// This class is something like main class for this directory
// what is logic
//**            The Logic is 🎆 */
/**         we have to classes to take about first is action
 *          second is users.js in reducers directory
 *          what combine reducers make it store what send to and
 *          in index.js in src or THE MAIN ON THIS PROJECT
 *          I called or import createStore function
 *          create store is connect with combinr reducers and package or
 *          funtion called connect To send data {{{{which combine reducers saves it}}}}
 *          The Logic from all of this is
 *          I import two classes {combineReducers} & usersReducers
 *          combineReducers To get Data Which userReducers Send and save it into
 *          store and you can get it with class called connect from 'react-redux'
 *                                      🎗🎗🎗
 */

import { combineReducers } from "redux";
import UsersReducer from "./users";
console.log(UsersReducer)
export default combineReducers({
  users: UsersReducer,
});
