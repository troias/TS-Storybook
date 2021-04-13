
import './App.css';
import { useState } from 'react'
import Wrapper from './components/UI/atoms/wrappers/wrapper'
import Title from './components/UI/atoms/titles/Title'
import Button from './components/UI/atoms/buttons/button'

function App() {

  const [btnState, setBtnState ] = useState(false)

  const btnHandler = () => {
    setBtnState(!btnState)
    console.log(btnState)
  }

  return (
   
    <div className="App">
      <header className="App-header">
      <Wrapper primary={btnState} onClick={btnHandler}>
      <Title primary={btnState} onClick={btnHandler}> Hello World</Title>
      <Button primary={btnState} onClick={btnHandler}> Primary </Button>
      </Wrapper>
     
      </header>
    </div>
  
  );
}

export default App;
