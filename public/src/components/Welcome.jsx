import React from 'react';
import styled from 'styled-components';


const Welcome = ({currentUser}) => {
    return (
        <Container>
            <img  src='/assets/logojhoni.svg' alt='logo'/>
            <h1>
                Bienvenido <span>{currentUser?.name}</span>
            </h1>
            <h3>Please select a chat to Start messaging.</h3>
        </Container>
    );
}

export default Welcome;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;