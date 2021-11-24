import React from "react";
import styled from "styled-components";
import HireTop from "./HireTop";
import img from "./assets/arr.png";

const HirePage = () => {
  return (
    <COntainer>
      <Wrapper>
        <Title>
          Hire Top <span>React.js Developers</span> Today
        </Title>
        <SubTitle>
          Search no further than Andela for the world’s top-notch React.js
          developers, engineers, and consultants. Respected industry leaders and
          evolutionary startups both agree: Andela is the marketplace of choice
          for intuitive and robust front-end design and development solutions
          toward highly fused collaboration, better products, and optimal
          scalability.
        </SubTitle>
      </Wrapper>
    </COntainer>
  );
};

export default HirePage;

const Title = styled.div`
  font-weight: 900;
  font-size: 40px;
  text-align: center;

  span {
    text-decoration: underline;
  }
`;
const SubTitle = styled.div`
  font-size: 23px;
  margin: 0 20px;
  text-align: center;
  line-height: 1.5;
  min-width: 360px;
  width: 80%;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    /* font-size: 25px; */
    line-height: 1.35;
  }
`;

const COntainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  justify-content: center;
  display: flex;
  background-color: ${({ bg }) => (bg ? "transparent" : "#f3f3f1")};
  color: ${({ bg }) => (bg ? "white" : "black")};
  /* color:#f3f3f1; */
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
