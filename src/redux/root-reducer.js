import {combineReducers} from "redux";
import {authentication} from "./auth/auth.reducer";
import {users} from "./user/user.reducer";
import {alert} from "./alert/alert.reducer";

const rootReducer = combineReducers({
    authentication,
    users,
    alert
});

export default rootReducer;