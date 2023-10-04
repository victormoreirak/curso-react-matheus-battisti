import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");

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
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        {/* reaproveitando */}
        <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
        <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      </div>
    </>
  );
}

export default App;
