
import Lottery from './Lottery'
import './App.css'
import { sum } from './help'

function App() {

  let winCondition = (ticket) =>{
    return sum(ticket)===15;
  }
  return (
    <>
    <Lottery n={3} winCondition ={winCondition}/>
    </>
  )
}

export default App
