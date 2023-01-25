import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => {
  return (
    <div>
      <p>{props.anecdotes}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(8).fill(0))
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * Math.abs(anecdotes.length-1))
  }
  
  const handleNextClick = () => {
    const x = getRandomNumber()
    setSelected(x)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  const getMax = () => {
    return votes.indexOf(Math.max(...votes))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <p>
        <Button handleClick={handleVoteClick} text='vote' />
        <Button handleClick={handleNextClick} text='next anecdote' />
      </p>
      <h1>Anecdote with most votes</h1>
      <Display anecdotes={anecdotes[getMax()]} votes={votes[getMax()]} />
    </div>
  )
}

export default App
