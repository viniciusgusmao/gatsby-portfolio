import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import backgroundImg from "../images/background-note.jpg";
import styled from "styled-components";

const Header = () => (  
    <ContainerBlack>
      <ContainerImg>      
        <Container>
          <Titulo>Vinícius Gusmão</Titulo>
        </Container>
      </ContainerImg>
    </ContainerBlack>
)

const Titulo = styled.h1`
  color: white;
  font-size: 4em;
`;

const ContainerBlack = styled.div`
  background-color: black;
  opacity: 0.9;
`;

const ContainerImg = styled.div`
   width: '100%';
   height: ${window.innerHeight+'px'};
   background-image: url(${backgroundImg});    
   background-size: 'constrained';
   background-position: center;      
   
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;  
`;



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
