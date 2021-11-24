import React from "react";
import styled from "styled-components";
import HireTop from "./HireTop";
import img1 from "./assets/cup.svg";
import img2 from "./assets/start.png";
import arr from "./assets/arr.png";

const HireProps = () => {
  return (
    <Container>
      <Wrapper>
        <HireTop
          img={arr}
          bg1="red"
          bg
          title="Join The World’s Leading Brands and Companies Working With Andela"
          text="Partner with us for your React.js talent needs and be in the company
        of hundreds of best-in-class corporations, institutions, and
        organizations from a diverse set of industries. Years of long-standing
        collaboration with them attest to our firm commitment to deliver
        results."
        />
        <HireTop
          img={img1}
          bg1="#F9AF2F"
          title="Work With the Best"
          text="The most brilliant minds in React engineering choose Andela. And with good reason. Our meticulous vetting process proves that we are serious about drawing in only the best talent and ascertaining the best-fit company matches."
          text2="

          Today, many of our successful candidates are in key leadership roles and driving the success of their front-end development strategies. Their globally diverse experiences provide the multi-angular perspective necessary for understanding complex customer workflows and designing insightful solutions adapted to specific customer requirements."
        />
      </Wrapper>
    </Container>
  );
};

export default HireProps;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
