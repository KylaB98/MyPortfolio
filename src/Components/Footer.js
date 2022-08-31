import React from 'react';
import styled from 'styled-components';
import KWLogo from './KWLogo.png'

const Container = styled.div`
    text-align: center;
    font-size: 25px;
    font-family: 'Didact Gothic', sans-serif;
`;

const Section = styled.div`
    text-align: center;

    @media only screen and (max-width: 480px) {
        padding: 10px;
      }
`
const Logo = styled.img`
    height: 300px;
    width: 300px;

    @media only screen and (max-width: 480px) {
        height: 80px;
        width: 80px;
        font-size: 14px;
      }
`

const IconList = styled.div`
    display: flex;
    justify-content: center;
`
const Icon = styled.div`
    width: 80px;
    height: 80px;
    padding: 15px;

    @media only screen and (max-width: 480px) {
        height: 40px;
        width: 40px;
        font-size: 14px;
      }
`

const Footer = () => {
  return (
    <Container>
       <Section>
            <Logo src={KWLogo}></Logo>
       </Section>
       <IconList>
            <Icon>
                <a href='https://github.com/KylaB98'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
            </Icon>
            <Icon>
                <a href='https://www.linkedin.com/in/kyla-wootson/'>       
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                </a>
            </Icon>
       </IconList>
       <p>&copy; KylaBWootson 2022</p>
    </Container>
  )
}

export default Footer