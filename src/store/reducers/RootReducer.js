import { combineReducers } from "redux";
import authReducer from "./AuthReducers";
import dataReducer from "./DataReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    data: dataReducer
})

export default rootReducer