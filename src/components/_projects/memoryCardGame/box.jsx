import React from 'react';
import './memoryCard.css'


const Box = (props) => {

    return ( 
    <div 
        className="box--box" onClick={() => props.boxClick(props.id, props.image)}
        style={{opacity: props.checked === true ? 0 : 100}}>
        {props.view === 'front' ? 
            <div style={{marginTop: 55}}>{props.children}</div> : 
            <img alt="box" style={{width: 110, height: 110, margin: 10}} src={props.image} 
        />}
    </div>
 );
}
 
export default Box;