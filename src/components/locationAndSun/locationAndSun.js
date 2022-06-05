import "./locationAndSun.css"
import map from "../../images/map.png";
import search from "../../images/search.png"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import SendLocation from "../../state/actions/weatherApiActions";


function LocationAndSun() {
    
    const dispatch1 = useDispatch()

    const [DisplayClass, SetClass] = useState({
        class: "none",
        value: "",
    })



    const handleChange=(e)=>{
        SetClass({value: e.target.value })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch1(SendLocation(DisplayClass.value))
        
    }

    const loccc = useSelector(state=>state.search)

    return ( 
    <div className="locAndSunCont">
        <div className="locContainer">

            <div className="mapAndCountryContainer">
                <img src={map} alt="map" className="mapImage"/>
                <div className="locationName">{loccc.data.data ? loccc.data.data.name : null }</div>
            </div>

            <div className= "inputContainer">
                <form className="SearchForm" action="/" onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Search Location" onChange={handleChange} value = {DisplayClass.value}/>    
                    <button type="submit" className="SubmitButton"><img src={search} className="searchbutton" alt="search" /></button>
                </form>
            </div>
            

        </div>

        <div className="Error">
            {loccc.error.length> 0 ? loccc.error : null}
        </div>
        <div className="sunRiseSunSetContainer">
            <div className="sunriseContainer">
                <p className="SunriseText">Sunrise</p>
                <div className="clock">{loccc.data.data ? String(new Date(1000 * Number(loccc.data.data.sys.sunrise))).split(" ")[4] : null }</div>
            </div>

            <div className="sunsetContainer">
                <p className="sunsetText">Sunset</p>
                <div className="clock">{loccc.data.data ? String(new Date(1000 * Number(loccc.data.data.sys.sunset))).split(" ")[4] : null }</div>
            </div>
        </div>
    </div> 
    );
}

export default LocationAndSun;