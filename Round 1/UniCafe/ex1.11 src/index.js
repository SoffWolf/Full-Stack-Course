import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick, state}) => {
  return(
    <button onClick={() => handleClick(state + 1)}>{text}</button>
  )
}


const Statistic = ({text, value}) => {
  if (text==="positive"){
    return(
      <p>{text} {value*100}%</p>
    )
  }
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if ((good+neutral+bad) === 0){
    return(<h1>No feedback given.</h1>)
  }
  return(
  <div>
    <h1>statistics</h1>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} />
    <Statistic text="all" value={good+neutral+bad} />
    <Statistic text="average" value={(good-bad)/(good+neutral+bad)} />
    <Statistic text="positive" value={good/(good+neutral+bad)} />
  </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={setGood} state={good} />
      <Button text='neutral' handleClick={setNeutral} state={neutral} />
      <Button text='bad' handleClick={setBad} state={bad} />
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)