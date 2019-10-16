import React from 'react';
import { 
  FaInstagram, 
  FaMailBulk, 
  FaLinkedin, 
  FaFacebook, 
  FaGithub 
} from 'react-icons/fa';
import styled from "styled-components";
import config from "../res/config";

function ContactLinks() {
  return (
    <Contact>
      <a href={`mailto:${config.email}`} title="E-mail">
        <FaMailBulk color="white" size="2.3em"  />
      </a>
      <a href={config.socialMedias.instagram} target="blank" title="Instagram">
        <FaInstagram color="white" size="2.3em" />
      </a>
      <a href={config.socialMedias.FaFacebook} target="blank" title="Facebook">
        <FaFacebook color="white" size="2.3em" />
      </a>            
      <a href={config.socialMedias.linkedin} target="blank" title="Linkedin">
        <FaLinkedin color="white" size="2.3em"  />
      </a>
      <a href={config.socialMedias.github} target="blank" title="Github"> 
        <FaGithub color="white" size="2.3em"  />
      </a>
    </Contact>
  );
}

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    margin-right: 12px;
  }
`;

export default ContactLinks;
