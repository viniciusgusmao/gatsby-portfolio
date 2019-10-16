import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import backgroundImg from "../images/background-note.jpg";
import styled from "styled-components";

import ContactLinks from "./ContactLinks";
import fonts from "../res/fonts";
import config from "../res/config";

const Header = () => ( 
      <Container>      
        <Info>
          <InfoText>{config.titleHeader}</InfoText>
          <InfoText fontSize="2.5em" fontWeight="400" >{config.subtitleHeader}</InfoText>
          <ContactLinks />
        </Info>
      </Container>
)

const InfoText = styled.p`
  color: white;
  font-weight: ${props => props.fontWeight || "600"};;
  margin-bottom: 45px;
  font-size: ${props => props.fontSize || "4em"};
  font-family: ${fonts.fontHeader};
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

export default Header
