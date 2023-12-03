import React from 'react';
import { useNavigate } from 'react-router-dom';

import './mainStyles.css'
import Navbar from './navbar';

const MainPage = () => {

    const navigate = useNavigate();

    const hooksArray = ['useState','useEffect', 'useRef']

    const openHookPageHandler = (e) => { 
        navigate(`/hooks/${e}`, {replace: true});
    }

    return ( 
        <div className="mainPage">
            <Navbar />
            <h1 style={{fontFamily: "RockSalt-Regular"}}>Hooks and more, much more...</h1>
            <div className="mainPage--Hooks">
                {hooksArray.map(el => <div className="workshopBox" onClick={() => openHookPageHandler(el)}><h4>{el}</h4></div>)}

                {/* THIS IS WHAT YOU HAVE TO WRITE IF YOU DONT USE REACT */}
                {/* <div className="workshopBox">
                    <h4>useState</h4>
                </div>
                <div className="workshopBox">
                    <h4>useEffect</h4>
                </div>
                <div className="workshopBox">
                    <h4>useRef</h4>
                </div>
                <div className="workshopBox">
                    <h4>useParams</h4>
                </div>
                <div className="workshopBox">
                    <h4>useReducer</h4>
                </div>
                <div className="workshopBox">
                    <h4>useContext</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div> */}
            </div>
            <hr />
        </div>
     );
}
 
export default MainPage;