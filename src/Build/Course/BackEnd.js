import React from "react";
import styled from "styled-components";
import LearnComp from "./Learn";
import CourseCard from "./CourseCard";
const courseData = [
  { topic: "Node.js Fundamentals" },
  { topic: "Template engines and Server-side rendering" },
  { topic: "Asynchronous Programming" },
  { topic: "Package managers: npm and yarn" },
  { topic: "Package managers: npm and yarn" },
  { topic: "Frameworks (Express, etc)" },
  { topic: "Websockets" },
  { topic: "Databases (Relational and Non-Relational Databases)" },
  { topic: "Caching" },
  { topic: "ORMs" },
  { topic: "Unit and Integrated Testing" },
  { topic: "Handling Authentication and" },
  { topic: "Socket IO" },
];

const courseData2 = [
  { topic: "Data Types" },
  { topic: "Operators" },
  { topic: "Package managers: Bundler and RubyGems" },
  { topic: "Developing Web Applications with Ruby" },
  { topic: "Package managers: npm and yarn" },
  { topic: "Handling Authentication and Authorization" },
  { topic: "Websockets" },
  { topic: "Loggin" },
  { topic: "Unit and Integrated Tesing" },
  { topic: "Frameworks (Rails)" },
  { topic: "Object, Classes and Methods" },
  { topic: "Databases (Relational and Non-Relational Databases)" },
  { topic: "Template engines and Server-side rendering" },
  { topic: "API Design patterns" },
  { topic: "Caching" },
  { topic: "Deployment" },
];

const BackEnd = () => {
  return (
    <Container>
      <Wrapper>
        <LearnComp
          learning="BackEnd Engineering"
          path="Backend engineering is an exciting career track. Like the name suggests, backend engineering deals with the part of a website or a software application that the users do not see or interact with. As a backend engineer, you are responsible for building the structure of a software application. In this program, you will learn how to program servers, client-side interfaces and design databases using the various programming languages."
        />

        <Desc>
          <Title>Backend Engineering Courses</Title>
          <Sub>
            This is why you are not required to pay tuition upfront. Instead, we
            invest you by getting that sorted and you can begin paying us back
            as soon as you get a job.
          </Sub>
        </Desc>

        <Card>
          <CourseCard courseData={courseData} bg="#ff1956" course="NodeJS" />
          <CourseCard courseData={courseData2} bg="#ff1956" course="Ruby" />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default BackEnd;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 43px;
  font-weight: bold;
`;
const Sub = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  font-size: 22px;
  text-align: center;
  width: 80%;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
const Container = styled.div`
  width: 100%;
`;
