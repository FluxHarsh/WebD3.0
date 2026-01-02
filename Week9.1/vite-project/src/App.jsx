import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodos] = useState([
    {
      title : "Go to GYM",
      description:"Hit the gym regularly",
      done: false
    }
  ])

  function addTodo(){}

  return (
    <>
      <div>
        <button onClick={addTodo} >Add Todo</button>
      </div>
    </>
  )
}

export default App
