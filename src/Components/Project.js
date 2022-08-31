import React from 'react'
import styled from 'styled-components'


const Info = styled.div`
    font-family: 'Poiret One', cursive;
    font-weight: bold;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
    cursor: pointer;
    border-radius: 20px;
`

const Container = styled.div`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5px;
    padding: 10px;
    min-width: 600px;
    height: 450px;
    display: flex;
    align-content: flex-start;
    align-items: center;
    jusify-content: center;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
`

const Title = styled.h1`
    font-family: 'Poiret One', cursive;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 3px 5px 5px;
    color: white;
    display: flex;
    text-align: center;
`

const Project = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}><Title>{item.title}</Title></a>
        </Info>
    </Container>
  )
}

export default Project