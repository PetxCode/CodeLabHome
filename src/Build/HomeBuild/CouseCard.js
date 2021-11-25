import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
const CoursCard = ({ to, bcl, title, para, img }) => {
  return (
    <Container>
      <Header bcl={bcl}>
        <Icon src={img} />
      </Header>
      <Title>{title}</Title>
      <Para>{para}</Para>
      <Click bcl={bcl} to={to}>
        Learn More <ArrowRightAltIcon />{" "}
      </Click>
    </Container>
  );
};

export default CoursCard;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-top: 15px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Click = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 20px;
  background: ${({ bcl }) => bcl};
  /* color: black; */
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #004080;

  .MuiSvgIcon-root {
    margin-top: 5px;
    margin-left: 5px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;

    .MuiSvgIcon-root {
      margin-top: 2px;
      margin-left: 5px;
    }
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 20px;
  object-fit: contain;

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
const Para = styled.div`
  font-size: 18px;
  width: 90%;
  padding-left: 15px;
  padding-top: 10px;
  flex: 1;
  line-height: 1.35;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 120px;
  background: ${({ bcl }) => bcl};
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #004080;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 80px;
  }
`;
const Container = styled.div`
  overflow: hidden;
  margin-top: 50px;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  min-height: 600px;
  border-radius: 5px 5px 0 0px;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: all 350ms;
  margin: 15px;
  color: #004080;

  :hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 500px) {
    min-height: 400px;
  }
`;
