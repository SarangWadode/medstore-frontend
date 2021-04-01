import styled from 'styled-components';
import Header from './header/Header'
import Content from './content/Content'
import Footer from './footer/Footer';
import SignUp from './content/SignUp'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {urls} from './urls';

function App() {

  return <Router>
    
    <Header />
    
    <MainContainer>
    <Switch>
      {
        urls.map(url=>{
          return <Route path={url.path} component={url.component} key={url.path} />
        })
      }

      {/* Register page */}
      <Route path="/signup/" component={SignUp}/>

      <Route path="/">
            <Content />
      </Route>
    </Switch>
    </MainContainer>
      
    <Footer />
  </Router>
}

export default App;

const MainContainer = styled.div`
    background-color: hsl(130, 50%, 50%);
`;
