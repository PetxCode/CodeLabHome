import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const MidComp = ({ rw, title, icons, desc, learn, img, bg }) => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <Card rw={rw}>
          <Content>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <Direct>
              <span> {learn} </span>
              <Icon>
                {icons}
                <AiOutlineArrowRight />
              </Icon>{" "}
            </Direct>
          </Content>
          <Image src={img} />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default MidComp;

const Content = styled.div`
  width: 500px;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
`;

const Desc = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  margin-top: 13px;
  font-size: 30px;
`;

const Direct = styled.div`
  font-weight: 900;
  font-size: 25px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 10px;
  width: 180px;
  transform: scale(1);
  transition: all 350ms;
  color: #004080;

  span {
    margin-right: 10px;
  }

  :hover {
    background-color: rgba(128, 186, 124, 0.4);
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 700px;
  height: 550px;
  object-fit: contain;

  @media screen and (max-width: 1000px) {
    width: 90%;
    height: 250px;
  }
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
  margin: 0 auto;

  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  height: 100%;
  /* background-color: ${({ bg }) => (bg ? "#f9f9f8" : "#d6eff6")}; */

  background-color: green;
`;
