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
  { topic: "Create Express Server in NodeJs" },
  { topic: "Create GraphQL Server using express-graphql" },
  { topic: "Understand GraphQL Resolver Arguments" },
  { topic: "Connect GraphQL App with MongoDB using Mongoose" },
  { topic: "Create Record in MongoDB Using GraphQL Mutation" },
  { topic: "Get Records From MongoDB Using GraphQL Query" },
  {
    topic: "Updating and Deleting Records From MongoDB Using GraphQL Mutation",
  },
  { topic: "Create GraphQL Server with GraphQL Yoga" },
  {
    topic:
      "Split up your schema definition, resolvers, and Query type into multip",
  },
  {
    topic:
      "OpeCreate a Mongoose User model for Authentication in GraphQLrators",
  },
  { topic: "Register and Encrypt User Data and Return JWT Payload with Graph" },
  { topic: "Authenticate a User using a JSON Web Token in GraphQL" },
  { topic: "Create a Middleware for Authentication in GraphQL" },
  { topic: "Paginate List of Data in GraphQL" },
  { topic: "	Sort GraphQL Query Results by Field" },
  { topic: "	Adding real-time functionality with GraphQL Subscriptions" },
  { topic: "	Batching in GraphQL" },
  { topic: "Integrate Jest Testing Framework with GraphQL, and NodeJs" },
  { topic: "Write Unit test for Resolvers in GraphQL" },
  { topic: "Write Integration Test for Queries And Mutations in GraphQL" },
];

const courseData3 = [
  { topic: "Introduction to Data Structure and it's Importance" },
  { topic: "Link Lists" },
  { topic: "Banary Search Tree" },
  { topic: "Hash Table" },
  { topic: "JS Algorithm Introduction" },
  { topic: "Fizz Buzz" },
  { topic: "Harmless Random Note" },
  { topic: " Is Palindrome" },
  { topic: "Caesar Cipher" },
  { topic: "Reverse Words" },
  { topic: "Two Sum" },
  { topic: " Binary Search" },
  { topic: " Fibonacci" },
  { topic: "Memoized Fibonacci" },
  { topic: "Sieve of Eratosthenes" },
  { topic: "Max Stock Profit" },
  { topic: "Triple Add Function" },
  { topic: "Scope and self, Equals vs Strict Equals" },
  { topic: "Curry Function, Counter Function" },
  { topic: " Singly or Doubly Invoked Function" },
];

const profile = [
  {
    name: "Friday Ubani",
    img: "/img/ubani.jpg",
  },
  {
    name: "Anyahma Niddi",
    img: "/img/ndidi.jpeg",
  },
  {
    name: "Peter Oti",
    img: "/img/peter.jpg",
  },
];

const profile2 = [
  {
    name: "Peter Oti",
    img: "/img/peter.jpg",
  },
  {
    name: "Friday Ubani",
    img: "/img/ubani.jpg",
  },
  {
    name: "Anyahma Niddi",
    img: "/img/ndidi.jpeg",
  },
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
          <CourseCard
            courseData={courseData}
            profile={profile}
            bg="#ff1956"
            course="NodeJS"
          />
          <CourseCard
            courseData={courseData3}
            profile={profile2}
            bg="#ff1956"
            course="Algorithm & Data Structure"
          />
          <CourseCard
            courseData={courseData2}
            profile={profile2}
            bg="#ff1956"
            course="GraphQL"
          />
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
