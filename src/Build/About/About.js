import React from "react";
import styled from "styled-components";
import pix from "./p2.jpg";
import vid from "./fri.mp4";
import red from "./red.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <TextHeader>The Story of CodeLab</TextHeader>
          <TextHolder>
            <TextSub>
              An educational program designed to arm you with the skills and
              knowledge required to launch your tech career.
            </TextSub>
          </TextHolder>
          <LineHolder>
            <Line />
          </LineHolder>
        </Holder>

        <ImageHolder>
          <Video controls src={vid} />
        </ImageHolder>
        <hr />

        <Content>
          <ContentHeader>About Us</ContentHeader>
          <ContentPara>
            While running CodeLab, we realised that there was a huge knowledge
            gap with some of the software engineers who passed through our
            vetting process, when it came to understanding basic things about
            software engineering.
            <br />
            <br />
            A lot of them were self-taught and while they had gone on to gain
            good technical skills, some foundational knowledge was missing. So,
            we decided to make things easier by creating a school that is not
            fully a school.
            <br />
            <br />
            An alternative to school. Here you can, in under a year, learn and
            gain a certification in a myriad of disciplines to give you a great
            foundation as well as the start you need to go for your dream tech
            career.
            <br />
            <br />
            Our Mission is to help you get started on the career you want.
            Whether you are fresh out of high school, seeking extra education,
            or want to transition to a career in tech, We will give you the
            skills and insight to achieve the success you desire.
          </ContentPara>
        </Content>

        <Content>
          <ContentHeader1>
            <Design src={red} />
            <span>About Why Choose Us</span>
            <Design src={red} bg />
          </ContentHeader1>
          <ContentPara>
            <CPH>
              <CheckCircleIcon />
              <span>We are not all talk.</span>
            </CPH>
            <CPA>
              Our programs are a perfect blend of theory and practice, providing
              you with a well-rounded education.
            </CPA>
          </ContentPara>
          <ContentPara>
            <CPH>
              <CheckCircleIcon />
              <span>
                Whatever your style of learning, we’ve got you covered.
              </span>
            </CPH>
            <CPA>
              Our blended learning approach allows for self-paced learning as
              well as instructor-led, real-time sessions.
            </CPA>
          </ContentPara>
          <ContentPara>
            <CPH>
              <CheckCircleIcon />
              <span>Experienced and Expert Instructors</span>
            </CPH>
            <CPA>
              Our faculty comprises of instructors who are not just
              knowledgeable but are industry leaders in their fields and able to
              teach industry best practices
            </CPA>
          </ContentPara>
          <ContentPara>
            <CPH>
              <CheckCircleIcon />
              <span>A Diploma in 1 Year</span>
            </CPH>
            <CPA>
              We are not about wasting time. Our curriculum goes straight into
              the nitty-gritty and teaches up to date and usable skills and
              knowledge.
            </CPA>
          </ContentPara>
          <ContentPara>
            <CPH>
              <CheckCircleIcon />
              <span>Certification from Renowned Higher Institutions</span>
            </CPH>
            <CPA>
              Participants who complete the Altschool year-long program will
              earn a Diploma in software engineering from a renowned
              international institution.
            </CPA>
          </ContentPara>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default About;

const Design = styled.img`
  object-fit: contain;
  display: flex;
  transform: ${({ bg }) => (bg ? "rotateY(180deg)" : "rotateY(0deg)")};

  @media screen and (max-width: 800px) {
    margin-bottom: 50px;
    width: 100%;
    display: none;
  }
`;
const CPA = styled.div``;
const CPH = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  margin-top: 30px;

  .MuiSvgIcon-root {
    font-size: 30px;
    color: #004080;
    margin-right: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;
const ContentHeader1 = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
const ContentHeader = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ContentPara = styled.div`
  width: 60%;
  font-size: 25px;
  line-height: 1.5;
`;

const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* position: relative; */
`;
const Video = styled.video`
  width: 80%;
  object-fit: cover;
  /* position: absolute; */
  margin-top: -250px;
`;

const Holder = styled.div`
  padding-top: 200px;
  padding-bottom: 50px;
  color: white;
  background: black;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 100%;
  /* 
  @media screen and (max-width: 600px) {
    padding-top: 500px;
  } */
`;

const Line = styled.div`
  border: 0.5px solid lightgray;
  margin-top: 50px;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LineHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
const TextSub = styled.div`
  width: 80%;
  justify-content: center;
  display: flex;
  font-size: 30px;
  margin: 0 40px;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
const TextHeader = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    font-size: 45px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background: #fef6ee;
  display: flex;
  justify-content: center;
`;
