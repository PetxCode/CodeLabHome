import React from "react";
import styled from "styled-components";
import LearnComp from "./Learn";
import CourseCard from "./CourseCard";
const courseData = [
  {
    topic:
      "Rendering conditional content (v-if, v-else, v-else-if, v-show andv-for)",
  },
  { topic: "Understanding methods in Vue Apps" },
  { topic: "Data Binding in Vue" },
  { topic: "Event Binding" },
  { topic: "EStyling (CSS Preprocessors and Vue Component Libraries)" },
  { topic: "State Management (Vuex)" },
  { topic: "Fetching data from an API (REST and GraphQL)" },
  { topic: "Vue Reactivity" },
  { topic: "Testing" },
  { topic: "Context API" },
  { topic: "Routing with Vue Router" },
];
const courseData2 = [
  { topic: "JSX" },
  { topic: "Asynchronous Programming" },
  { topic: "State and React events" },
  { topic: "Styled components and Storybook" },
  { topic: "Progressive Web Apps and Service Workers" },
  { topic: "Testing with React Testing Library and Enzyme" },
  { topic: "Deploying an application" },
  { topic: "Understanding MUI" },
  { topic: "React Redux" },
  { topic: "Context API" },
  { topic: "Understanding React Hooks and creating custom hooks" },
  { topic: "Class components and Lifecycle Methods" },
  { topic: "Navigation and Routing with React Router" },
  { topic: "Fetching data from an API (REST and GraphQL)" },
];

const profile = [
  {
    name: "Bukola Gbami",
    img: "/img/bukky.jpg",
  },

  {
    name: "Kelechi Samuel",
    img: "/img/kele.jpg",
  },
];

const profile2 = [
  {
    name: "Lucky Ofili",
    img: "/img/ofili.jpg",
  },
  {
    name: "Cynthia Oyemebah",
    img: "/img/cyn.jpg",
  },
];

const SoftSkill = () => {
  return (
    <Container>
      <Wrapper>
        <LearnComp
          learning="SoftSkill Engineering"
          path="SoftSkill Engineers are some of the most sought-after Software Engineers. This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages. You will be exposed to best practices while executing projects with guidance from some of our faculty members comprised of top senior engineers."
        />

        <Desc>
          <Title>SoftSkill Engineering Courses</Title>
          <Sub>
            These courses cover the most popular front end design framework that
            will get you started on your path to becoming a great SoftSkill
            Engineer.
          </Sub>
        </Desc>

        <Card>
          <CourseCard
            courseData={courseData2}
            profile={profile}
            bg="#ed8517"
            course="Transformation Leadership"
          />
          <CourseCard
            courseData={courseData}
            profile={profile2}
            bg="#ed8517"
            course="Project Management"
          />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SoftSkill;

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
