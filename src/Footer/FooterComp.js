import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterComp = ({ header, nav, nav1, nav2, nav3, nav4, nav5 }) => {
  return (
    <Container>
      <Wrapper>
        <Header>{header}</Header>
        <Content>
          <SubNav to="/">{nav}</SubNav>
          <SubNav to="/">{nav1}</SubNav>
          <SubNav to="/">{nav2}</SubNav>
          <SubNav to="/">{nav3}</SubNav>
          <SubNav to="/">{nav4}</SubNav>
          <SubNav to="/">{nav5}</SubNav>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default FooterComp;

const Content = styled.div`
  /* margin-left: 20px; */
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  min-height: 20px;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;
const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const SubNav = styled(Link)`
  margin: 10px 10px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`;
const Wrapper = styled.div``;
const Container = styled.div`
  color: white;
  /* width: 150px; */
  padding-top: 60px;
  margin: 0 60px;

  @media screen and (max-width: 500px) {
    padding-top: 30px;
  }
`;
