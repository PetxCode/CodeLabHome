import React from "react";
import styled from "styled-components";
import im from "./pix1.jpeg";
import { Link } from "react-router-dom";
const Prepare = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={im} />
        <Holder>
          <Text>Prepare yourself for the future!</Text>
          <Desc>
            Our extensive Training program is set to produce top notch Software
            Engineers who are able to compete globally. Hiring our graduates
            guarantee that you have access to highly skilled, passionate and
            professional tech talent to ensure continuous business success.
          </Desc>
          <But>
            <Button to="/hire">Hire a Talents</Button>
          </But>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default Prepare;

const But = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
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

  @media screen and (max-width: 500px) {
    font-size: 13px;
    padding: 15px 20px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  margin: 0 20px;
  margin-top: 20px;
  line-height: 1.5;
  flex: 1;
  font-weight: bold;
  padding-bottom: 20px;
  color: white;

  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-bottom: 25px;
    margin-top: 10px;
  }
`;

const Text = styled.div`
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  color: white;

  @media screen and (max-width: 500px) {
    margin: 10px 15px;
    font-size: 25px;
  }
`;

const Holder = styled.div`
  overflow: hidden;
  width: 550px;
  min-height: 400px;
  /* background: #f9d5d3; */
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0px;

  background: rgba(249, 213, 211, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

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
    min-height: 300px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media screen and (max-width: 1200px) {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
