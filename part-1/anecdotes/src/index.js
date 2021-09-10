import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

const votesArray = Array(anecdotes.length).fill(0)


  // Components

  const Button = ({onClick, text}) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }

  const Anecdote = ({title, anecdote, votes}) => {
    return(
      <div>
        <h3>{title}</h3>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
      </div>
    )
  }

const App = (props) => {
  const [votes, setVotes] = useState(props.votes)
  const [selected, setSelected] = useState(0)

  const maxVotes = votes.indexOf(Math.max.apply(null, votes))

  // Functions 

  const randomGuy = () => {
    const len = anecdotes.length;
    setSelected(Math.floor(Math.random() * len));
  }

  const updateVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  console.log(votes)
  return (
    <div>
      <Anecdote title='Anecdote of the day' anecdote={props.anecdotes[selected]} votes={votes[selected]}/>
      <Button onClick={randomGuy} text="next anecdote"/>
      <Button onClick={updateVote} text="vote" />
      <Anecdote title='Anecodte with most votes' anecdote={props.anecdotes[maxVotes]} votes={votes[maxVotes]} />
    </div>
  )
}

ReactDOM.render(
    <App anecdotes={anecdotes} votes={votesArray}/>,
  document.getElementById('root')
);
