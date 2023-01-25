import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad
  let all = good + neutral + bad
  let average = (good - neutral) / all
  let positive = good / all

  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" value ={good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" value ={neutral} /></td>
          </tr>
          <tr>
            <td> <StatisticLine text="bad" value ={bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" value ={all} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" value ={average} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" value ={positive} /></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
  return <p>No feedbacks given</p>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h3>statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
