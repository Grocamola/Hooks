import React, { useState, useEffect } from 'react';
import Navbar from '../../containers/navbar';

import './useEffectStyles.css';


const UseEffectHook = () => {

    const [responseType, setResponseType] = useState('posts')
    const [items, setItems] = useState([])

    // useEffect(() => {
    //     console.log('Welcome to our useEffect hook!')
    // },[])

    useEffect(() => { 
        fetch(`http://jsonplaceholder.typicode.com/${responseType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        // .then(data => console.log(data))
    },[responseType])

    return (
        <>
            <Navbar />
            <div className="useEffect--full">
                <div className="useEffect--final">
                    <div className="useEffect--container">
                        <button onClick={() => setResponseType('posts')}>Posts</button>
                        <button onClick={() => setResponseType('albums')}>Users</button>
                        <button onClick={() => setResponseType('comments')}>Comments</button>
                        <hr />
                        <div className="useEffect--items">
                            <ul>
                                {items.splice(1,10).map((item, index) => <li key={index}>{responseType === 'comments' ? item.body : item.title}</li>)} 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="useEffect--exercise" style={{textAlign: 'left', padding: '0 20px 40px', border: '1px solid #ccc', borderRadius: 20}}>
                    <p>Create your own list here :)</p>
                    <p>All you have to do is...</p>
                    <ul>
                        <li>Check my code, create the UI</li>
                        <li>Then try to fetch data from the free API website :)</li>
                        <li>Make sure you can add update list by clicking other buttons</li>
                        <li>Good luck!</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default UseEffectHook;





