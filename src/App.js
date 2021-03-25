import logo from './logo.svg';
import styled from 'styled-components';
import AndroidIcon from '@material-ui/icons/Android';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Sarang>Hello from <AndroidIcon/></Sarang>
      </header>
    </div>
  );
}

export default App;
const Sarang = styled.main`

--fire: #f00;
color: var(--fire);
`
