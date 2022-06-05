import axios from "axios"
import { ERROR, GETDAILY, LOAD, SEARCHLOCATION } from "../action-types";

const SendLocation = (location)=>{
    return async(dispatch1)=>{

        try {

            dispatch1({
                type: LOAD,
    
            });

            let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=77510d5d12bbba5d898766b12c24d582&units=metric`)
            let data2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=77510d5d12bbba5d898766b12c24d582&units=metric`)

            dispatch1({
                type: SEARCHLOCATION,
                payload:data
            })

            dispatch1({
                type: GETDAILY,
                payload:data2
            })

        } catch (error) {

            dispatch1({
                type: ERROR,
            })
        }
    }
}
export default SendLocation;