import React, { useState, useEffect } from 'react';
import Navbar from '../../containers/navbar';

import './useEffectStyles.css';


const UseEffectHook = () => {

    // const [btn, setBtn] = useState(0)

    // useEffect(() => {
    //     // setBtn(btn + 1) <-- if you uncomment this, it will start an infinite loop ;)
    //     btn > 1 && console.log(`You hit me ${btn} times?!`)
    // },[btn])

    // return ( 
    //     <>
    //         <Navbar />
    //         <div className="useEffect--container">
    //             <button onClick={() => setBtn(btn => btn + 1)}>HIT ME! {btn > 0 && btn}</button>
    //         </div>
    //     </>
    //  );

    // ------------------------------------------------------------ //

    const [responseType, setResponseType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(() => {
        console.log('Welcome to our useEffect hook!')
    },[])

    useEffect(() => { 
        fetch(`http://jsonplaceholder.typicode.com/${responseType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        // .then(json => console.log(json))
    },[responseType])

    return (
        <>
            <Navbar />
            <div className="useEffect--container">
                <button onClick={() => setResponseType('posts')}>Posts</button>
                <button onClick={() => setResponseType('albums')}>Users</button>
                <button onClick={() => setResponseType('comments')}>Comments</button>
                <hr />
                <div className="useEffect--items">
                    <ul>
                        {responseType === 'posts' && items.length > 0 ? items.splice(1,10).map((item, index) => <li key={index}>{item.title}</li>) : 
                        responseType === 'albums' && items.length > 0 ? items.splice(1,10).map((item, index) => <li key={index}>{item.title}</li>) : 
                        responseType === 'comments' && items.length > 0 ? items.splice(1,10).map((item, index) => <li key={index}>{item.body}</li>) : 
                        null}
                        {/* {items.splice(1,10).map((item, index) => <li key={index}>{item.title}</li>)} */}
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default UseEffectHook;





