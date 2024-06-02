import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
        {image: leaf, checked: false, view: 'front'},
        {image: leaf, checked: false, view: 'front'},
        {image: monkey, checked: false, view: 'front'},
        {image: monkey, checked: false, view: 'front'},
        {image: sit, checked: false, view: 'front'},
        {image: sit, checked: false, view: 'front'}
    ])

    const [play, setPlay] = useState([])

    const shuffle = (array) => { 
        return array.sort(() => Math.random() - 0.5); 
    }; 


    //Sophia ino avaz kardim, inja ro deghat kon:
    const boxClickHandler = (e, img) => { 
        if(play.length < 2) { 
            setPlay(prev => [...prev, [e, img]])
            setBoard(prevBoard => 
                prevBoard.map((item, idx) => 
                    idx === e ? { ...item, view: 'back' } : item
                )
            );
        } else { 
            setPlay([])
            setBoard(prev => prev.map(el => ({ ...el, view: 'front' })));
        } 
    }
    useEffect(() => {
        // if(play.length === 2) { 
        //     if(play[0][1] === play[1][1]) { 
        //         console.log(play)
        //         console.log('BINGO')
        //     }
        // }

        const activeCards = board.filter(card => card.view === 'back');
        if (activeCards.length === 2 && activeCards[0].image === activeCards[1].image) {
            setBoard(prevBoard =>
                prevBoard.map(item =>
                    item.image === activeCards[0].image ? { ...item, checked: true } : item
                )
            );
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[play])

    useEffect(() => {
        board.filter(item => item.checked === true).length === 12 && console.log('Game Completed!')
    },[board])


    const shuffleHandler = () => { 
        setBoard(prev => shuffle(prev))
        setBoard(prevBoard => prevBoard.map(item => ({...item, checked: false })));
    }


    return (
        <>
            <Navbar />
            <button onClick={shuffleHandler} style={{marginTop: 200}}>START</button>
            {board.filter(item => item.checked === false) !== 0 && <div className="board-container">
                    {board.map((box, index) => <Box 
                        boxClick={boxClickHandler} 
                        image={box.image} 
                        view={box.view} 
                        checked={box.checked}
                        id={index}
                        key={index}
                    >Click me!</Box> )}
                </div>}
            {board.filter(item => item.checked === true).length === 12 && <h1 style={{marginTop: 100}}>You Won!</h1>}
        </>
    );
}
 
export default MemoryCard;