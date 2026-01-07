import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <LightBlub/>
  </div>
}

function LightBlub(){
    const [bulbOn, setBlubOn]=useState(true)

//bulbOn is a prop to the BlubState component
//setBlubOn is a prop to the ToggleBulbState component

  return <div>
    <BlubState bulbOn={bulbOn} />
    <ToggleBulbState setBlubOn={setBlubOn} />
  </div>
}

function BlubState({bulbOn}){

  return <div>
    {bulbOn ? "Bulb on" : "Bulb off" }
    
  </div>
}

function ToggleBulbState({setBlubOn}){

  function toggle(){
    setBlubOn(currentState => !currentState)
  }

  return <div>
    <button onClick={toggle} >Toggle the button</button>
  </div>
}


export default App
