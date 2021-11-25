import React from "react";
import styled from "styled-components";
import GppGoodIcon from "@mui/icons-material/GppGood";

const TopHero = () => {
  return (
    <Contianer>
      <Wrapper>
        <Card>
          <Text>Let's invest in your Future.</Text>
          <Text>
            Start Your Career in Tech with
            <span>no Upfront Payment</span>
          </Text>
          <Sub>
            Learn how to code and Build Amazing Projects in 1 year (9 months of
            Rigoius training + 3 months internship)
          </Sub>
          <ButtonHolder>
            <Button bg1>Apply Now (Closed)</Button>
            {/* <Button bg>Apply Now</Button> */}
          </ButtonHolder>

          <Below>
            <Arrange>
              <Icon cl="#004080">
                <GppGoodIcon />
              </Icon>
              <TextDown>No tuition fee</TextDown>
            </Arrange>
            <Arrange>
              <Icon cl="red">
                <GppGoodIcon />
              </Icon>
              <TextDown>No prior programming knowledge required</TextDown>
            </Arrange>
          </Below>
        </Card>
      </Wrapper>
    </Contianer>
  );
};

export default TopHero;

const Below = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap:
  margin-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 500px) {
    font-size: 11px;
    padding-bottom: 20px;
  }
`;
const Icon = styled.div`
  margin: 0 5px;
  color: ${({ cl }) => cl};
  .MuiSvgIcon-root {
    font-size: 30px;
  }
`;
const Arrange = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding-top: 50px;
`;
const TextDown = styled.div`
  font-weight: bold;
  width: 100px;
`;

const Button = styled.div`
  padding: 20px 40px;
  background-color: ${({ bg }) => (bg ? "transparent" : "#004080")};
  color: ${({ bg }) => (bg ? "black" : "white")};
  font-weight: ${({ bg1 }) => (bg1 ? "bold" : "normal")};
  margin: 10px;
  border: 3px solid;
  border-color: ${({ bg }) => (bg ? "black" : "transparent")};
  transform: scale(1);
  transition: all 350ms;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    padding: 20px 20px;
    border-radius: 5px;
    margin: 0px;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
`;

const Sub = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin: 15px 0;
  /* font-family: AlmarenaDisplayBold; */

  span {
    color: red;
    margin-left: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
const Contianer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  background-color: #fef6ee;
  color: #004080;

  @media screen and (max-width: 500px) {
    min-height: 500px;
  }
`;
