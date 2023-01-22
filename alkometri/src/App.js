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
  const conversion2 = gramsLeft / (weight * 0.6)
  

  if (conversion1 , conversion2 < 0) {setResult(0)}
else {setResult("If the user is male " + conversion1 + ". If the user is female " + conversion2)}


}


  return (
    <form onSubmit = {handleSubmit}>

    <h3>The alcohol blood level calculator</h3>
    
    

  <div>

      <label>Weight</label>
    <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/> 

  </div>

  <div>


    <label>Bottles</label>
    <select type="number" value={bottles} onChange={e => setBottles(e.target.value)}>

    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>

    </select>


  </div>


  <div>

    <label>Time</label>
    <select type="number" value={time} onChange={e => setTime(e.target.value)}>

    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>

    </select>


    </div>


    <div>

    <label> Blood alcohol level:</label>
    <output> {result} </output>
    <button> Calculate</button>

    </div>    

    
    </form>
  )
}

export default App;
