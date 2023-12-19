// import React, { useState } from 'react';
// import Navbar from '../../containers/navbar';

// import './useStateHook.css'

// const UseStateHook = () => {

//     const [todoItems, setTodoItems] = useState([])
//     const [todoItem, setTodoItem] = useState({desc: '', status: ''})


//     const formSubmitHandler = (e) => {
//         e.preventDefault()

//         setTodoItems(prev => [...prev, todoItem])
//         console.log(todoItems)
//     }

//     const inputChangeHandler = (e) => {
//         let tempTodoItem = {desc: e.target.value, status: 'inProgress'}
//         setTodoItem(tempTodoItem)
//     }


//     return (
//         <div>
//             <Navbar />
//             <div className="useState--container">
//                 <form onSubmit={formSubmitHandler}>
//                     <input type="text" onChange={inputChangeHandler} />
//                     <button type='submit'>ADD</button>
//                 </form>
//                 {todoItems.map(item => <p>{item.desc}</p>)}
//             </div>
//         </div>
//     )
// }

// export default UseStateHook;




//  const array = [1,2,3,4]
//  const array2 = [...array,5]
//  console.log(array2)






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
        // console.log(todo)
        // uncomment the line above,
        // If you check the console, you'll see useState is 1step behind !
    }

    const todoCompleteHandler = (index) => { 
        // setTodo((prevTodo) => (
        //     prevTodo.map((el, i) => (
        //         i === index ? { ...el, status: el.status === true ? false : true } : el
        //     ))
        // ));

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
            <div className="UseStateHook">
                <h2 style={{marginTop: 150}}>The very first project, TODO!</h2>
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
                                    onClick={() => todoCompleteHandler(index)}>Ongoing</button>
                                <button 
                                    className="todoboxEach--buttons--green"
                                    disabled={!el.status} 
                                    style={{display: el.status === false ? "none" : 'unset'}} 
                                    onClick={() => todoCompleteHandler(index)}>Done</button>
                                <button
                                    className="todoboxEach--buttons--delete"
                                    style={{display: el.status === false ? "none" : 'unset'}} 
                                    onClick={() => deleteTodoHandler(el)}>X</button>
                            </div>

                        </div>)}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default UseStateHook;