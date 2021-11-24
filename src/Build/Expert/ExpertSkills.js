import React from "react";
import styled from "styled-components";
import ExpertQuote from "./ExpertQuote";

const ExpertSkills = () => {
  return (
    <Container>
      <Content>Our Engineers has skills in the following: </Content>
      <Wrapper>
        <ExpertQuote name="React JS" />
        <ExpertQuote name="Node JS" />
        <ExpertQuote name="Express JS" />
        <ExpertQuote name="HTML" />
        <ExpertQuote name="CSS" />
        <ExpertQuote name="Firebase" />
        <ExpertQuote name="MongoDB" />
        <ExpertQuote name="Git" />
      </Wrapper>
    </Container>
  );
};

export default ExpertSkills;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 10px;
  font-weight: 900;
  font-size: 30px;
  color: #09386d;
  padding-top: 35px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
