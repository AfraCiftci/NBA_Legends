import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import {data} from "./helper/data"
import "./App.css"
function App() {
  console.log(data)
  return (
    <div className="App">
      <Header/>
      <CardContainer/>
    
    </div>
  )
}

export default App
