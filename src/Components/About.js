import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 50px;
    text-align: center;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
    font-family: 'Didact Gothic', sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Title = styled.h1`
  font-size: 90px;
  text-align: center;
  padding: 10px;
  font-family: 'Poiret One', cursive;
`

const Image = styled.img`
    width: 450px;
    height: 500px;
    border-radius: 20px;
    margin-top: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Logo = styled.img`
    width: 70px;
    height: 70px;
    padding: 10px;
`

const About = () => {
  return (
    <Container id="about">
        <Image src='https://i.ibb.co/V3GBR3P/C5211082-3-A20-4631-95-DF-03-EE5-D4-D21-DE-1-105-c.jpg' />
        <p>My Name is Kyla Wootson, and I'm a full-stack developer based out of Atlanta, Georgia. I'm just starting out, but passionate about software development and the journey it will take me on. Always eager to learn and constantly seeking new ways to grow my skills, I'm ready jump-start my career!</p>
        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          
        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />

        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          
    </Container>
  )
}

export default About;