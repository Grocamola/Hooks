import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../../containers/navbar';

import cloud from '../../assets/images/cloud.png'
import sun from '../../assets/images/sun.png'

import './fetchData.css'


const FetchData = () => {

    var api_key = '524901&appid=9ab470bf248b295059167622b17c2983';

    const [weatherInfo, setWeatherInfo] = useState()
    const [weatherDownloaded, setWeatherDownloaded] = useState({
        temp: 0, 
        icon: '', 
        city: 'City', 
        desc: 'Description',

    })

    const date = new Date();
    const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear()
];

    useEffect(() => {
        fetch(`//api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&key=${api_key}`)
        .then(response => response.json())
        .then(info => setWeatherInfo(info))
    },[])

    useEffect(() => {
        if(!weatherInfo) {
            return
        } else {
            let description = weatherInfo.weather[0].description;
            let temp = `${Math.floor((( weatherInfo.main.temp - 273.15) * 9/5) + 32)}º`
            let icon = weatherInfo.weather[0].main === "Clouds" ? cloud : sun;
            let city = weatherInfo.name;

            setWeatherDownloaded({temp: temp, icon: icon, city: city, desc: description})
        }
    },[weatherInfo])


    return ( 
        <>
            <Navbar />
            <div className="fetchData--container">
                <div className="fetchData--final">
                    <div className="fetching-data--weather-container">
                        <div className="weatherCity">{weatherDownloaded.city}</div>
                        <div className="weatherIcon"><img src={weatherDownloaded.icon !== "" && weatherDownloaded.icon} alt="icon" /></div>
                        <div className="weatherTemp"><h2>{weatherDownloaded.temp}</h2></div>
                        <div className="weatherStatus"><h2>{weatherDownloaded.desc}</h2></div>
                        <div className="weatherDate">{`${year}/${month}/${day}`}</div>
                    </div>
                </div>
                <div className="fetchData--exercise"><p>Go ahead, this is your box, do some magic!</p></div>
            </div>
        </>
     );
}
 
export default FetchData;