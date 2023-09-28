import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
      </div>
    </>
  )
}

export default App;
