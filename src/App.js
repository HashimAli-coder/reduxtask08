import React from 'react'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
   <Hero />
   <AddTodo />
   <Todos />
    </>
  )
}
export default App;

