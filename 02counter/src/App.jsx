import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue]=useState(0);
  const inc=()=>{
    setValue(value+1);
  }
  const dec=()=>{
    if(value==0){
      return;
    }
    else{
    setValue(value-1);
    }
  }
  let counter=5;

  return (
    <>
   <h1>hello! we triggering useState</h1>   
   <h2>Counter value: {value}</h2>
   <button onClick={inc}>Increment</button>
   <button onClick={dec}>Decrement</button>
    </>
  )
}

export default App
