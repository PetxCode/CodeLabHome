import React from "react";
import styled from "styled-components";

const ExpertQuote = ({ name }) => {
  return (
    <Container>
      <Wrapper>{name}</Wrapper>
    </Container>
  );
};

export default ExpertQuote;
const Container = styled.div`
  width: 300px;
  height: 50px;
  color: #09386d;
  padding: 10px;
  transition: all 350ms;
  transform: scale(1);
  align-items: center;
  display: flex;
  border-radius: 5px;
  margin-bottom: 30px;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
    background-color: #d7e2cf;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
