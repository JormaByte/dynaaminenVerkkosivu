import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


function App() {

  const [age, setAge ] = useState(0) 
  const [upper, setUpper] = useState(0) 
  const [lower, setLower] = useState(0) 
  

  const result = lower + "-" + upper

function handleSubmit(e) {


  e.preventDefault()
  const conversion1 = (220 - age) * 0.65
  setLower(conversion1)

  const conversion2 = (220 - age) * 0.85
  setUpper(conversion2)

  
}


  return (
    <form onSubmit = {handleSubmit}>

    <h3>HRLC</h3>
    
    <label>Age</label>
    <input type="number" value={age} onChange={e => setAge(e.target.value)}/>

    <label> Limits</label>
    <output> {result} </output>

    <button> Laske</button>
    </form>
  )
}

export default App;
