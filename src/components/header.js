import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import backgroundImg from "../images/background-note.jpg";
import styled from "styled-components";

import ContactLinks from "./ContactLinks";
import fonts from "../res/fonts";
import config from "../res/config";
import { FaAngleDoubleDown } from 'react-icons/fa';

function Header(){ 
  return (
      <Container>      
        <Info>
          <InfoText>{config.titleHeader}</InfoText>
          <InfoText fontSize="1.2em" fontWeight="400" >{config.subtitleHeader}</InfoText>
          <ContactLinks />
        </Info>
        <More>
          <a href="#checkpoint"><FaAngleDoubleDown color="white" size="1.6em"/></a>
        </More>
      </Container>
  );
}

const More = styled.div`
  position: absolute;
  bottom: 0px;
  margin-bottom: 15px;
`;

const InfoText = styled.p`
  color: white;
  font-weight: ${props => props.fontWeight || "600"};;
  margin-bottom: 25px;
  font-size: ${props => props.fontSize || "2.5em"};
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
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;    
   display: flex;
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export default Header
