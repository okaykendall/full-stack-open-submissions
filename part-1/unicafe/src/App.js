import React, { useState } from 'react'


const Button = ({onClick, text}) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }

  const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>
            {text}: 
            </td>
            <td>
            {value}
            </td>
        </tr>

    )
  }


  const Statistics = ({good, neutral, bad, clicks}) => {
      const clickos = clicks.length
      if (clickos > 0 ) {
    return(
      <div>
        <h1>Statistics</h1>
        <table>
            <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value ={bad} />
            <StatisticLine text="all reviews" value={clickos} />
            <StatisticLine text={'Average'} value={(good + bad) / clickos} />
            <StatisticLine text={'Positive'} value={good * 100 / clickos} />
            </tbody>
        </table>
      </div>
    ) } else {
        return (
            <div>
                <h1>no feedback yet</h1>
            </div>
        )
    }
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState([])

  const incrementGood = () => {
    setGood(good+1)
    setClicks(clicks+1)
  }

  const incrementNeutral= () => {
    setNeutral(neutral+1)
    setClicks(clicks+1)
  }

  const incrementBad= () => {
    setBad(bad+1)
    setClicks(clicks+1)
  }

  return (
    <div>
    <h1>give feedback</h1>
      <Button onClick={incrementGood} text='good'/>
      <Button onClick={incrementNeutral} text='neutral'/>
      <Button onClick={incrementBad} text='bad'/>
      <Statistics good={good} bad={bad} neutral={neutral} clicks={clicks} />
    </div>
  )
}

export default App