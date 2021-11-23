import React from "react";
import styled from "styled-components";
import LearnComp from "./Learn";
import CourseCard from "./CourseCard";
const courseData = [
  {
    topic: "AWS Basics",
  },
  { topic: "Amazon Elastic Compute Cloud (EC2)" },
  { topic: "Amazon Elastic Compute Cloud (EC2)" },
  { topic: "Infrastructure Management: Terraform, Cloud Formation" },
  { topic: "DNS Services and Content Delivery" },
  { topic: "Application Integration and Loose Coupling" },
  { topic: "Amazon EC2 Overview" },
  { topic: "AWS Storage Services" },
  { topic: "Automation on AWS" },
  { topic: "DevOps on AWS" },
  { topic: "Docker Containers and Serverless Computing" },
  { topic: "AWS IAM ( Identity & Access Management )" },
];
const courseData2 = [
  { topic: "Docker Containers and Serverless Computing" },

  { topic: "Docker Containers and Serverless Computing" },
  { topic: "Containers in the Cloud" },
  {
    topic:
      "Server Management: Apache, Nginx, Tomcat, Load Balancing, Proxy, Caching, Firewall, etc",
  },
  { topic: "Big Data and Machine Learning in the Cloud" },
  { topic: "Getting Started with Google Cloud Platform" },
  { topic: "Storage in the Cloud" },
  { topic: "Applications in the Cloud" },
  { topic: "Developing, Deploying, and Monitoring in the Cloud" },
];
const courseData1 = [{ topic: "" }, { topic: "" }];

const Cloud = () => {
  return (
    <Container>
      <Wrapper>
        <LearnComp
          learning="Cloud Engineering"
          path="Cloud Engineering combines software development and IT operations to build and maintain cloud infrastructure. Cloud Engineers are in high demand, as more companies continue to move critical business processes and applications to cloud infrastructures. In this program, you will gain hands-on experience with cloud platforms, understand how cloud resources are allocated and paid for and learn how to shorten the systems development life-cycle."
        />

        <Desc>
          <Title>Cloud Engineering Courses</Title>
          <Sub>
            These courses have been carefully curated to ensure that you not
            only have the best learning experience but also acquire the relevant
            skills required to become a sought after Cloud Engineer.
          </Sub>
        </Desc>

        <Card>
          <CourseCard courseData={courseData} bg="#2c5b37" course="Azure" />
          <CourseCard courseData={courseData2} bg="#2c5b37" course="AWS" />
          <CourseCard
            courseData={courseData}
            bg="#2c5b37"
            course="Google Cloud"
          />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Cloud;

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
