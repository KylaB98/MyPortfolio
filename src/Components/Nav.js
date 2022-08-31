import React from 'react';
import styled from 'styled-components';
import KWLogo from './KWLogo.png';
import './nav.css'

import { Anchor } from 'antd';

const { Link } = Anchor;

const Container = styled.div`
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Section = styled.div`
    position: relative;
`

const Logo = styled.img`
    height: 150px;
    width: 150px;
`

const Anc = styled.ul`
    list-style-type: none;
    margin: 30px;
    padding: 0;
    overflow: hidden;
    font-size: 40px;
    text-align: center;
  `

const L = styled.li`
    display: inline-block;
    padding: 25px;
    margin-left: 20px;
    margin-right: 20px;
    &:hover {
      color: black;
      text-decoration: underline;
      transition-duration: 600ms;
  }
    cursor: pointer;
`

const Nav = () => {
  return (
    <Container>
        <Logo src={KWLogo}></Logo>
        <Section>
          <Anchor>
            <Link href="#about" title="About" />
            <Link href="#projects" title="Projects" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </Section>
    </Container>
  )
}

export default Nav