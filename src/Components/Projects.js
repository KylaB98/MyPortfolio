import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { projects } from './data';


const Container = styled.div`
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 480px) {
    padding-bottom: 400px;
    height: 300px;
    width: 290px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const Title = styled.h1`
  font-size: 90px;
  text-align: center;
  padding: 10px;
  font-family: 'Poiret One', cursive;
`

const Projects = () => {
  return (
    <Container id="projects">
        {projects.map(item=>(
            <Project item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Projects