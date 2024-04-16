import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import deviderone from '../assets/images/deviderOne.svg'

import './mainStyles.css'


const MainPage = () => {

    const navigate = useNavigate();

    const hooksArray = ['useState','useEffect', 'useRef', 'useContext', 'useReducer']
    const jsArray = ['signin', 'memoryCard']

    const openHookPageHandler = (e) => { 
        navigate(`/hooks/${e}`, {replace: true});
    }

    const openProjectPageHandler = (e) => { 

        const pagename = e === 'signin' ? "signinForm" : e === 'memoryCard' ? 'memory-cards' : null;

        navigate(`/projects/${pagename}`, {replace: true});
    }

    return ( 
        <div className="mainPage">
            <Navbar />
                <div className="hooksAndMore">
                    <h1 style={{fontFamily: "RockSalt-Regular"}}>Hooks and more, much more...</h1>
                    <div className="mainPage--Hooks">
                        {hooksArray.map((el, index) => <div key={index} className="workshopBox" onClick={() => openHookPageHandler(el)}><h4>{el}</h4></div>)}
                    </div>
                    <h1 style={{fontFamily: "RockSalt-Regular", marginTop: 100}}>Lets fetch some data!!</h1>
                    <div className="react--api">
                        <div className="workshopBox" style={{margin: 'auto'}} onClick={() => navigate(`/hooks/${'fetching-data'}`, {replace: true})}><h4>FETCH</h4></div>
                    </div>
                </div>
                <div className="deviderOne" style={{backgroundImage: deviderone}} />
                <div className="projectsamples">
                    <h1 style={{fontFamily: "RockSalt-Regular"}}>Projects :)</h1>
                    <div className="mainPage--Javascript">
                        {jsArray.map((el, index) => <div key={index} className="jsBox" onClick={() => openProjectPageHandler(el)}><h4>{el}</h4></div>)}
                    </div>
                </div>
                <div className="deviderOne" style={{backgroundImage: deviderone, rotate: "180deg"}} />
        </div>
     );
}
 
export default MainPage;