import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 20px;
}
`

const Label = styled.h1`
    margin: 5px 10px 5px 0;
    font-family: 'Didact Gothic', sans-serif;
`
const Input = styled.input`
    height: 50px;
    width: 400px;
    padding: 5px;
    margin: 20px;
    border-radius: 20px;
    border: none;
    font-size: 25px;
    font-family: 'Didact Gothic', sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Button = styled.button`
    height: 60px;
    width: 150px;
    margin-top: 50px;
    padding: 10px 20px;
    background-color: #74c69d;
    border: none;
    color: black;
    cursor: pointer;
    border-radius: 20px;
    font-size: 25px;
    font-family: 'Didact Gothic', sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Contact = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
    const {name, email, message} = e.target.elements;
    let details = {
        name: name.value,
        email: email.value,
        message: message.value,
    };
    
    let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    };

  return (
    <Container id="contact">
            <Form onSubmit= {handleSubmit}>
                <div>
                    <Label htmlFor= "name"> Name:</Label>
                    <Input type="text" id="name" required />
                </div>
                <div>
                    <Label htmlFor="email"> Email:</Label>
                    <Input type="email" id="email" required />
                </div>
                <Button type="submit">{status}</Button>
            </Form>
    </Container>
  )
}

export default Contact