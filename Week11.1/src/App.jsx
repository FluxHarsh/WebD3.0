import { useState } from 'react'
import './App.css'


//custom hook
function useCounter() {
  const [count, setCount] = useState(0);

  function
    increaseCounter() {
    setCount(count + 1)
  }

  return {
    count,
    increaseCounter
  }
}

function App() {
  const { count, increaseCounter } = useCounter()

  return <div>
    <button onClick={increaseCounter}>Start Count: {count}</button>
  </div>

}

export default App