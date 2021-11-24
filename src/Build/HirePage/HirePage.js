import React from "react";
import styled from "styled-components";
import HireTop from "./HireTop";
import img from "./assets/arr.png";
import HireTalent from "./HireTalent";
import HowTo from "./HowTo";
import Students from "./Students";
import arr from "./assets/arr.png";

const HirePage = () => {
  return (
    <COntainer>
      <Wrapper>
        <HireTalent />
        <HowTo />
        <Students />
      </Wrapper>
    </COntainer>
  );
};

export default HirePage;

const COntainer = styled.div`
  padding-top: 100px; */
  width: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcf9f7;
`;
