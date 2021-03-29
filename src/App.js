import styled from 'styled-components';
import Header from './header/Header'
import Content from './content/Content'
import Footer from './footer/Footer'
import {BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return <>
    <HeaderContainer >
      <Header />
    </HeaderContainer>
    
    <MainContainer>
      <Content />
    </MainContainer>

    <FooterContainer>
      <Footer />
    </FooterContainer>

  </>
}

export default App;

const HeaderContainer = styled.header``;
const MainContainer = styled.div``;
const FooterContainer = styled.footer``;
