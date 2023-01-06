import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 30px;
background-color: teal;
display: flex;
justify-content: center;
align-items: center;
color: white;

`;

const Announcements = () => {
  return (
    <>
    <Container>
        Amazing deals!! 10% off on SmartPhones
    </Container>
    
    </>
  )

}

export default Announcements