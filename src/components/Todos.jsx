import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const [clicked , setClicked] = useState({})
    const dispatch = useDispatch()

    const handleGreenButtonClick = (id) => {
      setClicked((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }))};

  return (
    <>
    <div className='text-2xl font-bold text-center'>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-2 flex justify-between items-center bg-black px-4 py-2 rounded ${
              clicked[todo.id] ? 'bg-green-700' : 'bg-black'
            }`}
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className='flex space-x-2'>
          <button onClick={() => handleGreenButtonClick(todo.id)}
          className=" bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md">
            <svg className="h-6 w-6 text-white" 
            viewBox="0 0 24 24"  
            fill="none"  
            stroke="currentColor"  
            strokeWidth={2}  
           >  
            <polyline points="9 11 12 14 22 4" />  
            <path
             strokeLinecap="round"  
             strokeLinejoin="round"
             d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" 
             />
            </svg>
            </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button></div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos