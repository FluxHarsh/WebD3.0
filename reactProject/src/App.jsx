// import React from 'react'

// const App = () => {
//   const name1 = 'Jonny';

//   return (
//     <div>
//       <h1>Hi my name is {name1}</h1>
//     </div>
//   )
// }

// export default App






// import React, { Children } from 'react'

// const Welcome = (props) =>{
//   return <div>
//     {props.children}
//   </div>
// }

// const App = () => {
//   return (
//     <Welcome>
//       <h1>My name is Harsh</h1>
//       <p>Testing props</p>
//     </Welcome>
//   )
// }

// export default App




// react lists
import React from 'react'

const App = () => {
  const fruits = ["apple","bannana","mango"]
  return (
    <div>
      <h1>My fruits</h1>
      <ul>
        {fruits.map((item, index) => (
          <li key={index} >{item}</li>
        ) )}
      </ul>
    </div>
  )
}

export default App
