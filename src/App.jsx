
import './App.css'
import Header from './Components/Header'
import Middle from './Components/Middle'
import Right from './Components/Right'

function App() {
  return (
    <div className="root">
      <Header />
      <div className="main-content">
        <Middle />
        <Right />
      </div>
    </div>
  )
}

export default App