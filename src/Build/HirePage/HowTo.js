import React from "react";
import styled from "styled-components";
import data from "./HowToHire.json";

const HowTo = () => {
  return (
    <Container>
      <Wrapper>
        {data?.map((props, i) => (
          <Card key={props.i}>
            <Ring>{i}</Ring>
            <Title>{props.title}</Title>
            <COntent>{props.text} </COntent>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default HowTo;

const Title = styled.div`
  padding-top: 80px;
  font-weight: 900;
  font-size: 35px;
  text-align: center;
`;
const COntent = styled.div`
  padding-top: 50px;
  font-size: 20px;
  text-align: center;
  margin: 0 15px;
  line-height: 1.5;
`;

const Ring = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid rgba(9, 56, 109, 0.8);
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: white;
  color: black;
  /* color: #09386d; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  margin-top: 80px;
  padding-bottom: 30px;
  color: #09386d;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  margin: 20px;
  margin-top: 60px;
  position: relative;
  border-radius: 5px;
  height: 500px;
  width: 400px;
  background: #f4f6fc;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
