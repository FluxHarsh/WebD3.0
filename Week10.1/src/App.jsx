// import './App.css'
// import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// function App() {

//   return <div>
//     <BrowserRouter>

//       <Routes>

//         <Route path='/' element={<Layout />}>
//           <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//           <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//           <Route path="/" element={<Landing />} />
//         </Route>

//       </Routes>

//     </BrowserRouter>
//   </div>
// }

// function Layout() {
//   return <div>
//     <Link to="/">Allen</Link>
//     |
//     <Link to="/neet/online-coaching-class-11">Class 11</Link>
//     |
//     <Link to="/neet/online-coaching-class-12">Class 12</Link>
//     <Outlet />
//     footer
//   </div>
// }

// function Landing() {
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program() {
//   return <div>
//     NEET programs for Class 11th
//   </div>
// }

// function Class12Program() {
//   return <div>
//     NEET programs for Class 12th
//   </div>
// }

// export default App




//useRef 
import { useRef, useState } from 'react'
import './App.css'



// function App(){

//   const inputRef = useRef()

//   function focusOnInput(){
//   // document.getElementById('name').focus()
//   inputRef.current.focus()

// }

//   return <div>
//     SignUp
//     <input ref={inputRef} id="name" type={"text"} />
//     <input type={"text"} />
//     <button onClick={focusOnInput} >Submit</button>
//   </div>
// }


// useref in value
function App(){
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef()

  function clockBegins(){
    let value = setInterval(() => {
      setCurrentCount( c => c + 1 )
    }, 1000);
    timer.current = value
  }

  function clockStops(){
    clearInterval(timer.current)
  }

  return <div>
    <button onClick={clockBegins} > Start </button> <br />
    {currentCount} <br />
    <button onClick={clockStops}>
      Stop
    </button>
  </div>

}

export default App