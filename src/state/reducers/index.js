import { combineReducers } from "redux";
import WeatherApiReducers from "./weatherApiReducers";





const rootReducer = combineReducers({
    search: WeatherApiReducers
})

export default rootReducer;