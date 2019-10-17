import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components";
import { 
  FaReact, 
  FaBootstrap, 
  FaHtml5,
  FaPhp,
  FaJs,
  FaJava,
  FaGitSquare,
  FaNpm,
  FaNodeJs,
  FaEvernote,
  FaLaravel,
  FaWordpress,
  FaYarn,
  FaDribbbleSquare
} from 'react-icons/fa';

function IndexPage(){
  return (
  <Layout>
    <SEO title="Vinícius Gusmão | Desenvolvedor Web Full Stack" />
    <AboutMe>
      <h1 name="checkpoint">Sobre mim</h1>
      <p>Sou um grande entusiasta no mundo do desenvolvimento de software. Sempre inquieto e curioso, busco a todo momento novos desafios, já que esta área possui uma dinamicidade imensa de tecnologias. Sou formado em Sistemas de Informação e trabalho com programação web desde 2010, tendo acumulado neste período muita experiência nos mais variados tipos de sistemas. Estou disponível para projetos sob demanda, colaborativos ou consultorias. <a href="https://resume.io/r/5CONEd3gc" target="blank">Clique aqui</a> para visualizar meu currículo detalhado.</p>
    </AboutMe>
    <Expertise>
      <ExpertiseItem>
        <h1>Design</h1>
        <ExpertiseItemIcons>
          <FaReact />
          <FaBootstrap/>
          <FaHtml5 />
        </ExpertiseItemIcons>
        <p>Me sinto confortável em trabalhar com front-end, especialmente com css puro, Html, Bootstrap, React, Jquery, Sass e sempre disposto a aprender outros frameworks como Angular e VueJS.</p>
      </ExpertiseItem>
      <ExpertiseItem>
        <h1>Linguagem</h1>
        <ExpertiseItemIcons>
          <FaPhp />
          <FaJs/>
          <FaJava />
        </ExpertiseItemIcons>
        <p>Minhas linguagens principais de desenvolvimento são o PHP e o Javascript, porém tenho muita vontade de aperfeiçoar o Java, principalmente o Java pra web. </p>
      </ExpertiseItem>
      <ExpertiseItem>
        <h1>Ferramentas</h1>
          <ExpertiseItemIcons>
            <FaGitSquare />
            <FaNpm/>
            <FaEvernote />
          </ExpertiseItemIcons>
          <p>Algumas das ferramentas, editores e plataformas que utilizo diariamente: Git, Github, VSCode, AzureDevOps, Evernote, Pipefy, NPM, Webpack entre outras.</p>          
      </ExpertiseItem>
      <h1>Outras tecnologias e frameworks:</h1>
      <ExpertiseItemIcons>
        <FaNodeJs />
        <FaLaravel/>
        <FaWordpress />
        <FaDribbbleSquare />
        <FaYarn />
      </ExpertiseItemIcons>
      <p>React Native, Bancos SQL e NoSQL, SCRUM, NodeJs, Laravel, CodeIgniter, Wordpress, Dribbble, Yarn, Css-in-Js, etc.</p>
      
    </Expertise>
     

  </Layout>
  )
}

const ExpertiseItemIcons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  svg {
    font-size: 3.2em;
    margin-right: 15px;
  }
`;

const ExpertiseItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  width: '28%';
  p {
    margin-top: 15px;
    font-size: 17px;
  };
  h1 {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: 400;    
  }
`;

const Expertise = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  h1 {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: 400;    
    margin-top: 30px;
  };
  p {
    display: block;
    width: 100%;    
    margin-top: 15px;
    text-align: center;
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    margin-top: 15px;
  }
  p {
    font-size: 18px;
    line-height: 27px;
  }
`;

export default IndexPage
