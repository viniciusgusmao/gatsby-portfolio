import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import backgroundImg from "../images/background-note.jpg";
import styled from "styled-components";

const Header = () => ( 
      <Container>      
        <Info>
          <InfoText>Vinícius Gusmão</InfoText>
          <InfoText subtitle="2.5em">Desenvolvedor Web Full Stack</InfoText>
        </Info>
      </Container>
)

const InfoText = styled.p`
  color: white;
  font-weight: 600;
  margin-bottom: 45px;
  font-size: ${props => props.subtitle || "4em"};
  font-family: 'Montserrat',sans-serif;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Container = styled.div`
   width: '100%';
   height: ${window.innerHeight+'px'};
   background-image: url(${backgroundImg});    
   background-size: 'constrained';
   background-position: center;    
   display: flex;
   flex: 1;
   justify-content: center;
   align-items: center;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
