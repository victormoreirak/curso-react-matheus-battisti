import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import City from './assets/city.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Avançando em React</h1>
        {/* Imagem em public*/}
        <div>
          <img src="/img1.jpg" alt="paisagem" />
        </div>
        {/* Imagem em Asset */}
        <div>
          <img src={City} alt="cidade" />
        </div>
      </div>
    </>
  );
}

export default App;
