import React, { useState } from 'react';

const Test = () => {

    const todo = ['read book', 'go shopping', 'do homeworks'];
    const urgents = todo.map(item => <p style={{color: 'red'}}>{item}</p>)

    const shopingItems = todo.filter(item => item === 'go shopping')

    const [number, setNumber] = useState(0)

    const increaseHandler = () => {
        let tempNumber = number;
        setNumber(tempNumber + 1)
    }


    return ( 
        <div>
            {urgents}

            {shopingItems}

            <button onClick={increaseHandler}>{number}</button>
        </div>
     );
}
 
export default Test;