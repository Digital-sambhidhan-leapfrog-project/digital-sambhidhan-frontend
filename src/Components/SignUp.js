// SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';

const Container = styled.div`
  background-color: #0D0F37;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #0D0F37;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #0D0F37;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #0D0F37;
  text-decoration: none;
`;


const SignupPage = () => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Implement your signup logic here
    console.log('Signup button clicked');
    try {
        const response = await fetch('http://localhost:8000/users', {
          method: 'POST', // or 'GET' or 'PUT' or 'DELETE' depending on your API
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Additional headers for CORS if needed:
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
            // You may need to include additional headers, such as authentication tokens
          },
          body: JSON.stringify({ first_name, last_name, email, password }),
        });
  
        // Handle the response, e.g., check if the request was successful
        if (response.ok) {
          console.log('check your mail for verification');
        } else {
          console.error('Failed to sign up:', response.statusText);
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Sign Up</Title>
        <Input
          type="text"
          placeholder="first_name"
          value={first_name}
          onChange={(e) => setfirst_name(e.target.value)}
        />

    <Input
          type="text"
          placeholder="last_name"
          value={last_name}
          onChange={(e) => setlast_name(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignup}>Sign Up</Button>
        <br/>
        <LoginLink to="/login">Already have an account? Login</LoginLink>
      </FormContainer>
    </Container>
  );
};

export default SignupPage;
