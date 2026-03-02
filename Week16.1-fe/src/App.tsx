import React, { useEffect, useRef, useState } from 'react'
import './App.css'


const App = () => {
  const [socket,setSocket] = useState();
  const inputRef = useRef();


  function sendMessage(){
    if(!socket){
      return;
    };

    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message)
  }

  // before everything we need to connect to the ws server
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)


    ws.onmessage = (ev)=>{
      console.log(ev.data)
    }
  },[])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='message...' />
      <button onClick={sendMessage} >Send</button>
    </div>
  )
}

export default App