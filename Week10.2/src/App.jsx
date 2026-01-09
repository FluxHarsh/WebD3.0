// import { useState } from 'react'
// import './App.css'

// function App() {
//   return <div>
//     <LightBlub/>
//   </div>
// }

// function LightBlub(){
//     const [bulbOn, setBlubOn]=useState(true)

// //bulbOn is a prop to the BlubState component
// //setBlubOn is a prop to the ToggleBulbState component

//   return <div>
//     <BlubState bulbOn={bulbOn} />
//     <ToggleBulbState setBlubOn={setBlubOn} />
//   </div>
// }

// function BlubState({bulbOn}){

//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off" }
    
//   </div>
// }

// function ToggleBulbState({setBlubOn}){

//   function toggle(){
//     setBlubOn(currentState => !currentState)
//   }

//   return <div>
//     <button onClick={toggle} >Toggle the button</button>
//   </div>
// }


// export default App


import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Increase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;
