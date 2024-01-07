import React, { useState } from 'react';
import Navbar from '../../containers/navbar'
import '../../containers/mainStyles.css';
import './useStateHook.css'



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
        todoItem.desc.length > 3 && setTodoItem({ status: false, desc: '' });
    }

    const todoCompleteHandler = (index) => { 
        let todoTemp = todo;
        todoTemp[index].status === true ? todoTemp[index].status = false : todoTemp[index].status = true ;
        console.log(todoTemp)

        setTodo(() => [...todoTemp])
    };

    const deleteTodoHandler = (item) => {
        console.log(item, todo)
        setTodo(prev => prev.filter(el => el !== item))
    }

    return ( 
        <>
            <Navbar />
            <div className="useStateHookFull">
                <div className="UseStateHook">
                    <h2>The very first project, TODO!</h2>
                    <div className="todo--container">

                        <form onSubmit={todoSubmitHandler}>
                            <input className="todoInput" value={todoItem.desc} type="text" onChange={inputChangeHandler} />
                            <button className="submitBtnRed" type="submit">Add</button>
                        </form>

                        <div className="todos">
                            {todo.map((el, index) => <div className="todoboxEach" key={index}>
                                <p>{el.desc}</p>

                                <div className="todoboxEach--buttons">
                                    <button 
                                        className="todoboxEach--buttons--gray"
                                        disabled={el.status} 
                                        style={{display: el.status === true ? "none" : 'unset'}} 
                                        onClick={() => todoCompleteHandler(index)}>Done ?</button>
                                    <button 
                                        className="todoboxEach--buttons--green"
                                        disabled={!el.status} 
                                        style={{display: el.status === false ? "none" : 'unset'}} 
                                        onClick={() => todoCompleteHandler(index)}>Done!</button>
                                    <button
                                        className="todoboxEach--buttons--delete"
                                        style={{display: el.status === false ? "none" : 'unset'}} 
                                        onClick={() => deleteTodoHandler(el)}>X</button>
                                </div>

                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="UseStateHookExercise" style={{textAlign: 'left', padding: '0 20px 40px', border: '1px solid #ccc', borderRadius: 20}}>
                    <p>Create your own todo here :)</p>
                    <p>All you have to do is...</p>
                    <ul>
                        <li>Check my code, create a form</li>
                        <li>Then try to modify todo array :)</li>
                        <li>Make sure you can add and delete todos</li>
                        <li>Good luck!</li>
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default UseStateHook;