import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


function App() {

  const [weight, setWeight ] = useState(0) 
  const [bottles, setBottles] = useState(0) 
  const [time, setTime] = useState(0) 
  const [result, setResult] = useState(0)

  
  const litres = bottles *0.33
  const grams = litres * 8 * 4.5
  const burning = weight / 10
  const gramsLeft = grams - (burning * time)


function handleSubmit(e) {


  e.preventDefault()


  const conversion1 = gramsLeft / (weight * 0.7)
  

  if (conversion1 < 0) {setResult(0)}
else {setResult(conversion1)}

}


  return (
    <form onSubmit = {handleSubmit}>

    <h3>Joelin humalamittari</h3>
    
    <label>Weight</label>
    <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>

    <label>Bottles</label>
    <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>

    <label>Time</label>
    <input type="number" value={time} onChange={e => setTime(e.target.value)}/>

   

    <label> Promillemäärä:</label>
    <output> {result} </output>

  

    <button> Laske</button>
    </form>
  )
}

export default App;
