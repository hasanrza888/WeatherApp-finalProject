import { ERROR, GETDAILY, LOAD, SEARCHLOCATION } from "../action-types";

const initialState = {
    loading: false,
    data: [],
    daily:[],
    error:[]
}

function WeatherApiReducers(state = initialState, action){

    switch(action.type){

        case LOAD:
            return {
                ...state, loading:true
            }

        case SEARCHLOCATION:
            return {
                ...state, loading:false, data:action.payload
                
            }

        case GETDAILY:
            return {
                ...state, loading:false, daily:action.payload, error: ""
                    
            }

        case ERROR:
            return {
                ...state, loading:false, error: "Not Found !!!"
                        
            }

        default:
            return state;
    }
}

export default WeatherApiReducers;

