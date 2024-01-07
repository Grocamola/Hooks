import React, { useEffect } from 'react';
import Navbar from '../../containers/navbar';

import './fetchData.css'


const FetchData = () => {

    useEffect(() => {
        // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=524901&appid=9ab470bf248b295059167622b17c2983`)
        // .then(response => response.json())
        // .then(data => console.log(data))

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
    },[])

    return ( 
        <>
            <Navbar />
            <div className="fetchData--container">
                <div className="fetchData--final">
                    <p>Lets fetch some good stuff!</p>
                </div>
                <div className="fetchData--exercise"><p>Hello</p></div>
            </div>
        </>
     );
}
 
export default FetchData;