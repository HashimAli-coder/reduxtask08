import React from 'react'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  return (
    <>
   <h1 className='font-bold text-center text-5xl'>Work With Schedule</h1>
   <AddTodo />
   <Todos />
    </>
  )
}
export default App;

