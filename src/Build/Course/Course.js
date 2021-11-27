import React from "react";
import styled from "styled-components";
import blue from "./blue.svg";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Cloud from "./Cloud";
import SoftSkill from "./SoftSkill";

const Course = () => {
  const [back, setBack] = React.useState(true);
  const [front, setFront] = React.useState(false);
  const [cloud, setCloud] = React.useState(false);
  const [soft, setSoft] = React.useState(false);

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
                bg={back ? "bg" : ""}
                onClick={() => {
                  setBack(true);
                  setFront(false);
                  setCloud(false);
                  setSoft(false);
                }}
              >
                BackEnd Engineering
              </Button>
              <Button
                bg={front ? "bg" : ""}
                onClick={() => {
                  setBack(false);
                  setFront(true);
                  setCloud(false);
                  setSoft(false);
                }}
              >
                FrontEnd Engineering
              </Button>
              <Button
                bg={cloud ? "bg" : ""}
                onClick={() => {
                  setBack(false);
                  setFront(false);
                  setCloud(true);
                  setSoft(false);
                }}
              >
                Cloud Engineering
              </Button>
              <Button
                bg={soft ? "bg" : ""}
                onClick={() => {
                  setBack(false);
                  setFront(false);
                  setCloud(false);
                  setSoft(true);
                }}
              >
                Soft/Sellable Skills
              </Button>
            </Part>
          </Holder>

          <Design src={blue} bg />
        </CourseHeader>

        {back ? (
          <BackEnd />
        ) : front ? (
          <FrontEnd />
        ) : cloud ? (
          <Cloud />
        ) : soft ? (
          <SoftSkill />
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Course;

const Button = styled.div`
  padding: 20px 28px;
  border: 1px solid lightgray;
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 22px;
  color: #004080;
  background-color: ${({ bg }) => (bg ? "rgba(249, 213, 211, 0.95)" : "")};
  transition: all 350ms;

  &.active {
    background: rgba(249, 213, 211, 0.3);
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
  color: #004080;

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

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-top: 50px;
  }
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

  @media screen and (max-width: 500px) {
    padding-bottom: 50px;
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

  @media screen and (max-width: 1100px) {
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

  @media screen and (max-width: 500px) {
    margin-bottom: 15px;
    width: 100%;
    font-size: 35px;
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

  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
    width: 100%;
    font-size: 18px;
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
  @media screen and (max-width: 500px) {
    margin-bottom: 0px;
    font-size: 20px;
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
    font-size: 35px;
    padding-top: 20px;
  }
`;
const Wrapper = styled.div`
  padding-top: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding-top: 120px;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background: #fef6ee;
  color: #004080;
`;
