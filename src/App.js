import React from "react";
import styled from "styled-components";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import PLogo from "./PLogo.png";
import { HashLink as Link } from "react-router-hash-link";

const Container = styled.div`
  background-color: rgba(164, 195, 178, 0.5);
  border-radius: 20px;
`

const Header = styled.div`
  font-size: 120px;
  text-align: center;
  padding: 10px;
  font-family: 'Poiret One', cursive;
  text-shadow: 3px 5px 5px;
`

const Title = styled.h1`
  font-size: 90px;
  text-align: center;
  padding-top: 60px;
  font-family: 'Poiret One', cursive;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 45px;
  }
`;

const Hr = styled.hr`
  border-top: 5px solid black;
  border-radius: 5px;
`

function App() {
  return (
    <Container className="App">
        <Hr className="rounded" />
        <Nav />
        <Hr className="rounded" />
          <Title>About Me</Title>
          <About className='about' />
          <Hr className="rounded" />
        <Title>My Projects</Title>
          <Projects className="projects">Linked</Projects>
          <Hr className="rounded" />
        <Title>Get in Touch</Title>
        <Contact />
        <Hr className="rounded" />
        <Footer />
    </Container>
  );
}

export default App;
