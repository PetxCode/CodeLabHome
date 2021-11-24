import React from "react";
import styled from "styled-components";
import { AiFillBug } from "react-icons/ai";
import { BsFillPersonCheckFill, BsWindowDock } from "react-icons/bs";

const HomeProps = ({
  title,
  img,
  icon1,
  desc1,
  icon2,
  desc2,
  icon3,
  desc3,
  but,
  rw,
  bg,
}) => {
  return (
    <Container>
      <Wrapper>
        <Card rw={rw}>
          <Content>
            <Top>{title}</Top>
            <Row>
              <Icon bg={bg}>{icon1}</Icon>
              <Desc>{desc1}</Desc>
            </Row>
            <Row>
              <Icon bg={bg}>{icon2}</Icon>
              <Desc>{desc2}</Desc>
            </Row>
            <Row>
              <Icon bg={bg}>{icon3}</Icon>
              <Desc>{desc3}</Desc>
            </Row>
            <ButHolder>
              <LogIn bg={bg}>{but}</LogIn>
            </ButHolder>
          </Content>
          <Image src={img} />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default HomeProps;

const ButHolder = styled.div`
  margin-top: 80px;
`;

const LogIn = styled.div`
  margin: 0 auto;
  outline: none;
  border: 0;
  border-radius: 5px;
  width: 60%;
  padding: 0 10px;
  height: 80px;
  background-color: ${({ bg }) => (bg ? "red" : "#09386d")};
  color: white;
  font-family: Raleway;
  letter-spacing: 1.5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
    background-color: #0c488b;
    background-color: ${({ bg }) => (bg ? "red" : "#09386d")};
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 700px;
  height: 550px;
  object-fit: contain;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 250px;
  }
`;
const Top = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
`;
const Icon = styled.div`
  margin: 0 20px;
  color: ${({ bg }) => (bg ? "red" : "#09386d")};
  font-size: 25px;
`;

const Desc = styled.div``;

const Row = styled.div`
  display: flex;
  margin: 20px 0;
  font-size: 18px;
`;
const Content = styled.div`
  width: 500px;
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: ${({ rw }) => (rw ? "row-reverse" : "row")};
  align-items: center;
  width: 80%;
  padding: 20px 0;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
  background-color: #fef6ee;
`;
