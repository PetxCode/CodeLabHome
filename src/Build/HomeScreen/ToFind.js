import React from "react";
import styled from "styled-components";
import img from "../assets/s1.png";
import img1 from "../assets/s2.png";
import img2 from "../assets/s3.png";

const ToFind = () => {
  return (
    <Container>
      <Title>What you'll get Working with CodeLab</Title>
      <Wrapper>
        <Card>
          <Image src={img2} />
          <SubTitle>Effortless setup</SubTitle>
          <Desc>
            Take advantage of our easy set up and billing process to connect
            with a developer right away.
          </Desc>
        </Card>
        <Card>
          <Image src={img} />
          <SubTitle>Code help from experts</SubTitle>
          <Desc>
            Our developers go through a strict application and vetting process,
            leaving only the best.
          </Desc>
        </Card>
        <Card>
          <Image src={img1} />
          <SubTitle>A variety of technologies</SubTitle>
          <Desc>
            From JavaScript and React to Swift and Go, our developers cover it
            all.
          </Desc>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ToFind;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  padding: 30px 0;
`;
const SubTitle = styled.div`
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  font-size: 30px;
  flex: 1;
  text-transform: uppercase;
  padding: 0 20px;
`;
const Desc = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 20px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 400px;
  height: 100%;
  min-height: 500px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;
const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #fef6ee;
`;
