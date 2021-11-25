import React from "react";
import styled from "styled-components";

const Benefits = ({ name, name1, desc, title, title1, img }) => {
  return (
    <Card>
      <Icon>
        <Image src={img} />
      </Icon>
      <Con>
        <Name>{title}</Name>
        <Desc>{desc}</Desc>
      </Con>
    </Card>
  );
};

export default Benefits;

const Card = styled.div`
  width: 400px;
  min-width: 300px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  margin: 0px 0;
  padding-bottom: 0px;

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
const Name = styled.div`
  font-weight: 900;
  margin-bottom: 15px;
  font-size: 20px;
`;

const Desc = styled.div`
  line-height: 1.6;

  @media screen and (max-width: 400px) {
    display: flex;
    padding-bottom: 0px;
  }
`;

const Icon = styled.div`
  width: 120px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 9px;
  border-radius: 10px;
  background-color: #004080;
  margin-left: 30px;

  @media screen and (max-width: 400px) {
    width: 120px;
    height: 60px;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 40px;
  object-fit: contain;
`;

const Con = styled.div`
  width: 280px;
  margin-right: 30px;
  min-height: 100px;
  padding-bottom: 30px;

  @media screen and (max-width: 400px) {
    width: 100%;
    min-height: 50px;
    padding-bottom: 0px;
  }
`;
