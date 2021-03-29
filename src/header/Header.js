import React from "react";
import styled from "styled-components";
import Logo from './../logo.svg'

class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.loggedIn = props.loggedIn;
  }

  render() {
    return <Container>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
    </Container>;
  }
}

export default Header;

const Container = styled.header`
  background-color: hsl(220, 50%, 50%);
`;

const LogoContainer = styled.div`
  height: var(--header-height);
  position: relative;
  
  img{
    height: 100%;
    animation: rotate 2s linear infinite;
    -webkit-user-drag: none;
  }

  @keyframes rotate{
    from{transform: rotate(0);}
    to{transform: rotate(360deg);}
  }
`;
