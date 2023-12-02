import React, { useState } from 'react';
import Navbar from '../../containers/navbar';

import '../../containers/mainStyles.css';
import './useStateHook.css'


// OK what are we going to have here: 
// 1. Usage of useState
// 2. MAP in arrayes
// 3. Create a simple todo


const UseStateHook = () => {

    const [todo, setTodo] = useState([])
    const [todoItem, setTodoItem] = useState({
        status: false,
        desc: '',
    })

    const inputChangeHandler = (e) => { 
        e.preventDefault();
        setTodoItem({status: false, desc: e.target.value})
    }

    const todoSubmitHandler = (e) => { 
        e.preventDefault();
        todoItem.desc.length > 3 && setTodo(prev => [...prev, todoItem])
        todoItem.desc.length > 3 && setTodoItem({ status: false, desc: '' }); // Reset the input
        console.log(todo)
        // If you check the console, you'll see useState is 1step behind !
    }

    const todoCompleteHandler = (index) => { 
        setTodo((prevTodo) => (
            prevTodo.map((el, i) => (
                i === index ? { ...el, status: true } : el
            ))
        ));
    };

    return ( 
        <>
            <Navbar />
            <div className="UseStateHook">
                <h2 style={{marginTop: 150}}>The very first project, TODO!</h2>
                <div className="todo--container">
                    <form onSubmit={todoSubmitHandler}>
                        <input className="todoInput" value={todoItem.desc} type="text" onChange={inputChangeHandler} />
                        <button className="submitBtnRed" type="submit">Add</button>
                    </form>
                    <div className="todos">
                        {todo.map((el, index) => <div className="todoboxEach" key={index}>
                            <p>{el.desc}</p><button disabled={el.status} onClick={() => todoCompleteHandler(index)}>Done</button>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default UseStateHook;