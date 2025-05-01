import { useState } from 'react'


const Statitics = (props) => {
  const{good,neutral,bad,average,positive, total}=props 
if (total === 0 ){
return (
<div>
<h3>No feedback given</h3> 
</div>
)
}
  return (
    <div>
    
    <h2>Estadisticas</h2>
 <table>  
  <tbody>

<StatisticLine text='Goods' value={good}/>
<StatisticLine text='Neutral' value={neutral}/>
<StatisticLine text='Bad' value={bad}/>
<StatisticLine text='Alls Clicks' value={total}/>
<StatisticLine text='Average'value={average}/>
<StatisticLine text="Positive Average" value={positive}/>
</tbody>

</table> 
  



    </div>
    )
  }

  const StatisticLine = (props) => {
     
     return(
      
        
        <tr>  
        <td>{props.text}</td> 
        
        <td>{props.value}</td>
        </tr>
      
     )
    
    
    }



const Button = (props) => {
 return <button onClick={props.handleClick}>
  {props.text} 
  
  </button>
}




const App = () => {
  // guarda los clics de cada botón en su propio estado
  

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    
  const total = good + neutral + bad 
  const average =(good-bad) / 100


  const positive = Number.isNaN((good/total)*100)?0:(good/total)*100

  const handleGoodClicks = () => {
    setGood(good+1)
    
    
    }
 const handleNeutralClicks = () => {
  setNeutral(neutral+1)
  
 }
  const handleBadClicks = () => {
    setBad(bad+1)
    
  } 
  const resetClicks = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
    
  }

  

  return (
    <div>
      <h1>Give feedback Please</h1>
      <Button handleClick={handleGoodClicks} text='Good'/>
      <Button handleClick={handleNeutralClicks} text='Neutral'/>
      <Button handleClick={handleBadClicks} text='Bad'/>
      <Button handleClick={resetClicks} text='Reset'/>
      <Statitics good={good} neutral={neutral} bad={bad} average={average} positive={positive} total={total}/>
      
    </div>
  )
}

export default App