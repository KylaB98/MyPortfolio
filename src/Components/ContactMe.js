import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 50px;
    text-align: center;
    padding: 40px;
    margin-top: 70px;
    margin-bottom: 70px;
    font-family: 'Didact Gothic', sans-serif;
`;

const Logo = styled.img`
    width: 150px;
    height: 150px;
    padding: 30px;
    align-items: center;
` ;

const ContactMe = () => {
  return (
    <Container>

        <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        <Logo src="https://img.icons8.com/sf-regular-filled/96/000000/new-post.png"/>
        
    </Container>
  )
}

export default ContactMe