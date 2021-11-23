import React from "react";
import styled from "styled-components";
import red from "./red.svg";
import blue from "./blue.svg";
import { NavLink, Route, Routes } from "react-router-dom";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Cloud from "./Cloud";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Prepare from "./Prepare";

const Course = () => {
  const [back, setBack] = React.useState(true);
  const [front, setFront] = React.useState(false);
  const [cloud, setCloud] = React.useState(false);

  return (
    <Container>
      <Wrapper>
        <TextHeader>Explore Certification Tracks</TextHeader>
        <TextSub>
          Take a look through to see the various courses that will be taught
          when you specialise in any of our certification tracks.
        </TextSub>
        <Learn>
          <Learning>
            <TextH>Learning Path</TextH>
            <TextS>
              Whether you are looking to continue your education, transition
              into a career in tech or simply boost your career path, we offer
              certifications across three tracks in Software Programming. <br />
              <br />
              At the initial stage, students who are enrolled in AltSchool
              Africa will spend some time exploring their interests in software
              engineering by learning through a unified curriculum before
              eventually landing on an area of focus. When this happens,
              learning becomes much more specialised to the selected
              certification track.
            </TextS>
          </Learning>
        </Learn>

        <CourseHeader>
          {/* <Design src={red} /> */}
          <Design src={blue} />
          <Holder>
            <TextPart>Specialise in any of the following tracks</TextPart>
            <Part>
              <Button
                onClick={() => {
                  setBack(true);
                  setFront(false);
                  setCloud(false);
                }}
              >
                BackEnd Engineering
              </Button>
              <Button
                onClick={() => {
                  setBack(false);
                  setFront(true);
                  setCloud(false);
                }}
              >
                FrontEnd Engineering
              </Button>
              <Button
                onClick={() => {
                  setBack(false);
                  setFront(false);
                  setCloud(true);
                }}
              >
                Cloud Engineering
              </Button>
              <Button>Soft/Sellable Skills</Button>
            </Part>
          </Holder>

          <Design src={blue} bg />
        </CourseHeader>

        {back ? <BackEnd /> : front ? <FrontEnd /> : cloud ? <Cloud /> : null}

        <Step>
          <StepTExt>Three Simple Steps to get into CodeLab</StepTExt>
          <StopRow>
            <StepIcon bg="#FEF3E9">
              <EventNoteIcon />{" "}
            </StepIcon>
            <StepContent>
              <StepNumb>Step One</StepNumb>
              <StepDesc bg="#FEF3E9">
                Fill and submit the application form
              </StepDesc>
            </StepContent>
          </StopRow>
          <StopRow>
            <StepIcon bg="#D0D1FD">
              <SpeedIcon />{" "}
            </StepIcon>
            <StepContent>
              <StepNumb>Step Two</StepNumb>
              <StepDesc bg="#D0D1FD">
                Come for the scheduled SCREENING date
              </StepDesc>
            </StepContent>
          </StopRow>
          <StopRow>
            <StepIcon bg="#F9D5D3">
              {" "}
              <CheckCircleIcon />{" "}
            </StepIcon>
            <StepContent>
              <StepNumb>Step Three</StepNumb>
              <StepDesc bg="#F9D5D3">
                After that, Begin your journey into Software Engineering
              </StepDesc>
            </StepContent>
          </StopRow>
        </Step>

        <Prepare />
      </Wrapper>
    </Container>
  );
};

export default Course;

const StepDesc = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${({ bg }) => bg};

  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

const StepNumb = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  opacity: 0.5;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StepContent = styled.div``;

const StepIcon = styled.div`
  margin-right: 20px;
  margin-left: 40px;

  .MuiSvgIcon-root {
    font-size: 100px;
    color: ${({ bg }) => bg};
  }

  @media screen and (max-width: 400px) {
    .MuiSvgIcon-root {
      font-size: 80px;
      margin: 0px 0px 0px 0px;
    }
  }
`;

const StopRow = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: flex-start;
  width: 100%;
`;

const StepTExt = styled.div`
  margin-top: 50px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const Step = styled.div`
  margin: 40px auto;
  margin-bottom: 0px;
  width: 100%;
  background: black;
  min-height: 400px;
  padding-bottom: 30px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.div`
  padding: 20px 28px;
  border: 1px solid lightgray;
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 22px;

  &.active {
    background: rgba(249, 213, 211, 0.8);
    color: white;
  }

  :hover {
    background: rgba(249, 213, 211, 0.6);
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    margin: 10px;
    padding: 20px 15px;
    display: flex;
    justify-content: center;
    font-size: 15px;
  }
`;

const Part = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
  }
`;
const TextPart = styled.div`
  margin-top: 100px;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;

const CourseHeader = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;
  background: #fef6ee;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const Design = styled.img`
  object-fit: contain;
  display: flex;
  transform: ${({ bg }) => (bg ? "rotateY(180deg)" : "rotateY(0deg)")};

  @media screen and (max-width: 1080px) {
    margin-bottom: 50px;
    width: 100%;
    display: none;
  }
`;

const TextH = styled.div`
  margin: 0 20px;
  width: 50%;
  font-size: 50px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;
const TextS = styled.div`
  width: 60%;
  font-size: 22px;
  line-height: 1.5;

  @media screen and (max-width: 800px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;
const Learn = styled.div`
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 50px;
`;

const Learning = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  min-height: 300px;
  margin-top: 50px;
  color: white;
  width: 80%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
`;

const TextSub = styled.div`
  width: 80%;
  justify-content: center;
  display: flex;
  font-size: 30px;
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
  padding-top: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  min-height: 500px;
`;
