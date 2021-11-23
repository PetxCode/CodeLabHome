import React from "react";
import styled from "styled-components";
import CoursCard from "./CouseCard";
import bck from "./bck.svg";
import fe from "./fe.svg";
import cloud from "./cloud.svg";
const ArrangeCourse = () => {
  return (
    <Container>
      <Card>FIND THE RIGHT TRACK FOR YOU</Card>
      <Wrapper>
        <CoursCard
          bcl="#FEF3E9"
          img={fe}
          title="Frontend Engineering"
          para="Frontend Engineers are some of the most sought-after Software Engineers. This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages. You will be exposed to best practices while executing projects with guidance from some of our faculty members comprised of top senior engineers."
        />
        <CoursCard
          bcl="#d0d1fd"
          img={bck}
          title="Backend Engineering"
          para="Backend engineering is an exciting career track. Like the name suggests,
        backend engineering deals with the part of a website or a software
        application that the users do not see or interact with. As a backend
        engineer, you are responsible for building the structure of a software
        application. In this program, you will learn how to program servers,
        client-side interfaces and design databases using the various
        programming languages."
        />
        <CoursCard
          bcl="#F9D5D3"
          img={cloud}
          title="Cloud Engineering"
          para="Cloud Engineering combines software development and IT operations to build and maintain cloud infrastructure. Cloud Engineers are in high demand, as more companies continue to move critical business processes and applications to cloud infrastructures. In this program, you will gain hands-on experience with cloud platforms, understand how cloud resources are allocated and paid for and learn how to shorten the systems development life-cycle."
        />
      </Wrapper>
    </Container>
  );
};

export default ArrangeCourse;

const Card = styled.div`
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 30px;
`;
const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  z-index: -10000000;
`;