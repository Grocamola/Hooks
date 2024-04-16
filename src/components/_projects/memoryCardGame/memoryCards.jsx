import React, { useState } from 'react';
import Navbar from '../../../containers/navbar';
import './memoryCard.css';
import Box from './box';

import bee from '../../../assets/images/bee.png';
import cat from '../../../assets/images/cat.png';
import flower from '../../../assets/images/flower.png';
import leaf from '../../../assets/images/leaf.png';
import monkey from '../../../assets/images/monkey.png';
import sit from '../../../assets/images/sit.png'



const MemoryCard = () => {

    const [board, setBoard] = useState([
        {image: bee, checked: false, view: 'front'},
        {image: bee, checked: false, view: 'front'},
        {image: cat, checked: false, view: 'front'},
        {image: cat, checked: false, view: 'front'},
        {image: flower, checked: false, view: 'front'},
        {image: flower, checked: false, view: 'front'},
        {image: leaf, checked: false, view: 'back'},
        {image: leaf, checked: false, view: 'front'},
        {image: monkey, checked: false, view: 'front'},
        {image: monkey, checked: false, view: 'back'},
        {image: sit, checked: false, view: 'front'},
        {image: sit, checked: false, view: 'front'}
    ])

    const boxClickHandler = (e) => { 
        setBoard(prev => prev.map(el => ({ ...el, view: 'front' })));
        setBoard(prevBoard => 
            prevBoard.map((item, idx) => 
                idx === e ? { ...item, view: 'back' } : item
            )
        );
    }

    return (
        <>
            <Navbar />

            <div className="board-container">
                {board.map((box, index) => <Box 
                    boxClick={boxClickHandler} 
                    image={box.image} 
                    view={box.view} 
                    id={index}
                    key={index}
                >Click me!</Box> )}
            </div>
        </>
    );
}
 
export default MemoryCard;