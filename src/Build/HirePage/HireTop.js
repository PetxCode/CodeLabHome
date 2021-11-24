import React from "react";
import styled from "styled-components";

const HireTop = ({ img, text, text2, title, bg, bg1 }) => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <Image src={img} style={{ backgroundColor: bg1 }} />
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
        <SubTitle>{text2}</SubTitle>
      </Wrapper>
    </Container>
  );
};

export default HireTop;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: contain;
  margin: 30px 0;
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  margin: 0 auto;
  width: 92%;
  margin-bottom: 20px;
  line-height: 1.2;
`;
const SubTitle = styled.div`
  font-size: 20px;
  margin: 0 30px;
  text-align: center;
  line-height: 1.5;
  padding-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => (bg ? "#09386D" : "transparent")};
  color: ${({ bg }) => (bg ? "white" : "black")};
`;
const Wrapper = styled.div`
  min-width: 400px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;
