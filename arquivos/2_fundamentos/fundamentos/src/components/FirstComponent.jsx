// testando comentários

import MyComponent from './MyComponent';

const FirstComponent = () => {
  // essa função faz isso...
  
  /*
  
  comentários multi line
  
  */
  return (
    <div>
       {/* Algum comentário*/}
      <h1>Meu primeiro componente</h1>
      <p className='teste'>Meu texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;