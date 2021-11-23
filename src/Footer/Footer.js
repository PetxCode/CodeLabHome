import React from "react";
import styled from "styled-components";
import FooterComp from "./FooterComp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "./8.png";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterComp
          header="Engineering Tracks"
          nav="Front End Engineering"
          nav1="Back End Engineering"
          nav2="Cloud Engineering"
        />
        <FooterComp
          header="Courses"
          nav="ReactJS"
          nav1="NodeJS"
          nav2="Azure"
          nav3="Firebase"
          nav4="GraphQL"
          nav5="WebSocket"
        />
        <FooterComp
          header="Companies"
          nav="Companies"
          nav1="Collaborate with us"
        />
        {/* <FooterComp
          header="About Us"
          nav="Our Story"
          nav1="Our Story"
          nav2="Blog"
          nav2="Merch Store (Coming soon)"
        /> */}
        <FooterComp header="Resources" nav="Terms of Service" nav1="FAQs" />
      </Wrapper>
      <Bottom>
        <Logo src={logo} />
        <Content>
          <P>Powered by</P>
          <Span>CodeLab Crew</Span>
        </Content>
        <Text>
          <FacebookIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </Text>
      </Bottom>
    </Container>
  );
};

export default Footer;

const P = styled.div``;
const Span = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Text = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  margin: 20px;

  .MuiSvgIcon-root {
    font-size: 45px;
    margin: 0 5px;
  }
`;
const Logo = styled.img`
  width: 100px;
  height: 50px;
  border-radius: 3px;
  object-fit: contain;
  margin: 20px 0;
  display: none;
`;
const Bottom = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  background: black;
  min-height: 500px;
  height: 100%;
  padding-bottom: 20px;
`;
