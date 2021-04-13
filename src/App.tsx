
import './App.css';
import {useSelector} from 'react-redux'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalStyle } from './components/UI/styles/globalStyles'



function App() {

const theme = useSelector((state: any) => state.theme)

const StyledH1 = styled.h1` 
color: ${(props: any) => props.theme.primary};
`

  return (
   
      <ThemeProvider theme={theme}>
          <div className="App">
        <GlobalStyle/>
        <StyledH1>
        React themes
        </StyledH1>
        <header className="App-header">

        </header>
      
          </div>
      
      </ThemeProvider>

  
  );
}

export default App;
