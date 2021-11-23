import React from "react";
import styled from "styled-components";
import im from "./im.jpg";
const Prepare = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={im} />
        <Holder></Holder>
      </Wrapper>
    </Container>
  );
};

export default Prepare;

const Img = styled.img`
  object-fit: cover;
  width: 1000px;
  height: 600px;
  position: absolute;

  @media screen and (max-width: 1000px) {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
const Holder = styled.div`
  width: 550px;
  height: 400px;
  background: #f9d5d3;
  position: absolute;
  display: flex;
  right: 0px;

  @media screen and (max-width: 1000px) {
    position: absolute;
    left: 0;
    bottom: 90px;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    position: absolute;
    left: 0;
    bottom: 90px;
    align-items: center;
    width: 300px;
  }
`;
const Wrapper = styled.div`
  padding-top: 80px;
  width: 1200px;
  height: 80%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: relative;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  background: #fef6ee;
`;
