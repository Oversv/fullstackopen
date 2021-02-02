import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, event }) =>(
  <button onClick={event}>{text}</button>
)

const MostPopularAnecdote = ({anecdote}) =>(
  <section>
    <h2>Anecdote with most votes</h2>
    <p>{anecdote}</p>
  </section>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [indexMostPopularAnecdote, setIndexMostPopularAnecdote] = useState(0);

  const getRandom = (max) => Math.floor(Math.random() * max)   

  const randomAnecdote = () =>{

    let rdn = getRandom(anecdotes.length)
   
    while(rdn === selected){
      rdn = getRandom(anecdotes.length)
    }

    setSelected(rdn)    
  }

  const setAnecdotePoint = () =>{

    const newPoints = [...points]
    newPoints[selected] += 1

    getMostPopularAnecdote(newPoints)
    setPoints(newPoints)
  }

  const getMostPopularAnecdote = (arr) =>{    

    const indexHighestScore = arr.indexOf(Math.max(...arr))

    setIndexMostPopularAnecdote(indexHighestScore)   
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p> 
        <p>has {points[selected]} votes</p>
      </div>

      <Button
          text='vote' 
          event={setAnecdotePoint}
      />
      <Button
          text='next anecdote' 
          event={randomAnecdote}
      />

      <MostPopularAnecdote anecdote ={anecdotes[indexMostPopularAnecdote]}/> 
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
