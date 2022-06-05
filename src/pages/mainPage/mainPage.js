import React, { useEffect } from 'react';
import DailyWeather from '../../components/DailyWeather/DailyWeather';
import CurrentWeather from "../../components/currentWeather/currentWeather"
import LocationAndSun from '../../components/locationAndSun/locationAndSun';
import "./mainPage.css";
import { useDispatch, useSelector } from 'react-redux';
import SendLocation from '../../state/actions/weatherApiActions';
import Loading from '../../components/Loading/loading';

function Mainpage() {
    const dispatch2 = useDispatch()
    const data = useSelector(state=>state.search)

    //current city finder...
    useEffect(()=>{

        fetch("https://extreme-ip-lookup.com/json/?key=DUhwRMMw4XITzEag7em7")
        .then( res => res.json())
        .then(response => {
            // console.log("Country is : ", response);
            dispatch2(SendLocation(response.city))

        })
        .catch((data, status) => {
            // console.log('Request failed:', data);
        })


    },[])



    return ( 
        data.loading ? <Loading /> :
        
        <div className='colorContainer'>
            <div className='mainPage'>

                <div className='currentAndDaily'>
                    <CurrentWeather />
                </div>

                <div className='rightSide'>
                    <LocationAndSun />
                </div>

            </div>

            <DailyWeather />
        </div>

    );
}

export default Mainpage;