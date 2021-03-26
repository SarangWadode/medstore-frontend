// import logo from './logo.svg';
import styled from 'styled-components';
import AndroidIcon from '@material-ui/icons/Android';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sarang>Hello from <AndroidIcon/></Sarang>
      </header>
    </div>
  );
}

export default App;
const Sarang = styled.main`
  --fire: #f00;
  color: var(--fire);
`;
