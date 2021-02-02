import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => (
  <header>
    <h1>give feedback</h1>
  </header>
)

const Button = ({name, handleClick}) =>(
  <button onClick={handleClick}>{name}</button>
)

const Statistics = ({good, neutral, bad, totalFeedback, score}) => {

  const average = (score / totalFeedback)
  const positive = (good / totalFeedback * 100)

  if(totalFeedback === 0){
    return (
      <section>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </section>
    )
  }

  return(
    <section>
      <h2>statistics</h2>
      <table>
        <tbody>        
          <Statistic text='good' value={good}/>
          <Statistic text='neutral' value={neutral}/>  
          <Statistic text='bad' value={bad}/>  
          <Statistic text='all' value={totalFeedback}/>  
          <Statistic text='average' value={average}/>  
          <Statistic text='positive' value={positive} option='%'/> 
        </tbody>    
      </table>
    </section>
  )
}

const Statistic = ({text, value, option = ''}) =>(
  <tr>
    <td>{text}</td>
    <td>{value} {option}</td>   
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedback, setTotalFeedback] = useState(0)
  const [score, setScore] = useState(0);

  const handleClickGood = () => {
    setGood(good +1)
    setTotalFeedback(totalFeedback +1)   
    setScore(score +1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral +1)
    setTotalFeedback(totalFeedback +1)
  }

  const handleClickBad = () => {
    setBad(bad +1)
    setTotalFeedback(totalFeedback +1)
    setScore(score -1)
  }

  return (
    <>
      <Header />

      <div>
        <Button 
          name="good"
          handleClick={handleClickGood}
        />
        <Button 
          name="neutral"
          handleClick={handleClickNeutral}
        />
        <Button 
          name="bad"
          handleClick={handleClickBad}
        />
      </div>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        score={score}        
      />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)