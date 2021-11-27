import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Collaborate = ({ vid, bg, pix, title, desc }) => {
  return (
    <Container>
      <Wrapper bg={bg}>
        <Holder>
          <Text>{title}</Text>
          <Desc>{desc}</Desc>
          <But>
            <Button to="/register">Get Started</Button>
          </But>
        </Holder>
        {pix ? <Image src={pix} /> : vid ? <Video controls src={vid} /> : null}
      </Wrapper>
    </Container>
  );
};

export default Collaborate;

const Video = styled.video`
  object-fit: cover;
  width: 550px;
  height: 400px;
  @media screen and (max-width: 1120px) {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 550px;
  height: 400px;
  @media screen and (max-width: 1120px) {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ bg }) => (bg ? "row-reverse" : "row")};

  @media screen and (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    /* flex-direction: ${({ bg }) => (bg ? "column" : "column-reverse")}; */
    width: 100%;
    min-height: 400px;
    background: lightgray;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background: black;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const But = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
`;
const Button = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 30px;
  padding: 20px 30px;
  background: black;
  color: white;
  margin-left: 20px;
  font-weight: bold;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin: 0 20px;
  margin-top: 20px;
  line-height: 1.5;
  flex: 1;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-bottom: 25px;
    margin-top: 10px;
  }
`;

const Text = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  /* text-align: center; */
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    margin: 10px 15px;
    font-size: 25px;
  }
`;

const Holder = styled.div`
  overflow: hidden;
  width: 550px;
  min-height: 400px;
  background: #f9d5d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  @media screen and (max-width: 1120px) {
    width: 100%;
    min-height: 300px;
  }
`;
