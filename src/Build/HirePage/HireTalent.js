import React from "react";
import styled from "styled-components";
import HireTop from "./HireTop";
import img from "./assets/arr.png";

const HirePage = () => {
  return (
    <COntainer>
      <Wrapper>
        <Title>
          Hire Our Top <span>Developers</span> Today
        </Title>
        <SubTitle>
          Search no further than CodeLab for the world’s top-notch developers,
          engineers, and consultants.
          <br />
          <br />
          CodeLab has a pool of Developoers of choice for intuitive and robust
          front-end design, backebd solution and development solutions toward
          highly fused collaboration, better products, and optimal scalability.
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

  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
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
    line-height: 1.35;
  }

  @media screen and (max-width: 500px) {
    min-width: 280px;
    margin-top: 15px;
    font-size: 20px;
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
