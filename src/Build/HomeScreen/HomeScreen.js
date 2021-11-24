import React from "react";
import styled from "styled-components";
import PropsScreen from "./PropsScreen";
import ToFind from "./ToFind";
import ExpertSkills from "./../Expert/ExpertSkills";

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <ToFind />

        <Card>
          <Text>Get help from vetted software developers</Text>
        </Card>

        <PropsScreen />
        {/* <MidProps /> */}

        <ExpertSkills />
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Text = styled.div`
  width: 70%;
  font-weight: 700;
  font-size: 50px;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.2;

  @media screen and (max-width: 700px) {
    font-size: 40px;
    font-weight: bold;
  }
`;

const Card = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 120px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  background-color: #fef6ee;
`;
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  color: #004080;
  background-color: #fef6ee;
`;
