import React from "react";
import styled from "styled-components";

const LearnComp = ({ learning, path }) => {
  return (
    <Learn>
      <Learning>
        <TextH>{learning}</TextH>
        <TextS>{path} </TextS>
      </Learning>
    </Learn>
  );
};

export default LearnComp;

const TextH = styled.div`
  margin: 0 20px;
  width: 50%;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
    width: 100%;
    font-size: 45px;
  }
`;
const TextS = styled.div`
  width: 60%;
  font-size: 22px;
  line-height: 1.5;
  padding-bottom: 40px;

  @media screen and (max-width: 800px) {
    margin-bottom: 50px;
    width: 100%;
    padding-bottom: 10px;
  }
`;
const Learn = styled.div`
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const Learning = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  min-height: 300px;
  margin-top: 50px;
  color: white;
  width: 80%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
`;
