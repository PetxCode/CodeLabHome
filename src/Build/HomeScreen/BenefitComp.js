import React from "react";
import styled from "styled-components";
import Benefits from "./Benefits";
import img1 from "./assets/cert.png";
import img2 from "./assets/network.png";
import img3 from "./assets/learn.png";
import img4 from "./assets/start.png";
import img5 from "./assets/job.png";
import img6 from "./assets/pay.png";

const BenefitComp = () => {
  return (
    <Container>
      <Content>
        <Title>
          What you stand to <span>benefit</span>
        </Title>
        <Para>
          Some of the benefits of being a participant of the Side Hustle
          internship include:
        </Para>
      </Content>
      <WrapperCard>
        <Wrapper>
          <Benefits
            img={img1}
            title="Earn 3 certificates"
            desc="One from Side Hustle, One from Jobberman, One from Udemy."
          />
          <Benefits
            img={img2}
            title="Network with like minds"
            desc="During this internship, you will be tasked with joining teams, which gives you unlimited access to forming strong networks with like minds."
          />
          <Benefits
            img={img3}
            title="Learn from the very best for free"
            desc="All mentors of the Side Hustle internship have received one form of training or the other and are all professionals in their fields."
          />
          <Benefits
            img={img4}
            title="Be a part of a fast-growing startup"
            desc="As an intern, you stand a chance to become a part of the Side Hustle team or any other fast paced start up after your training."
          />
          <Benefits
            img={img5}
            title="Get a Jobberman soft skills scholarship"
            desc="You’ll also have free access to the Jobberman soft skills scholarship, which gives you high priority when you apply for jobs on the platform."
          />
          <Benefits
            img={img6}
            title="Earn perfomance-based stipends"
            desc="During this internship, high performing interns from all tracks will earn stipends and perks based on their performance in tasks given."
          />
        </Wrapper>
      </WrapperCard>
    </Container>
  );
};

export default BenefitComp;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  margin: 10px 0;

  span {
    color: red;
    margin-left: 5px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
const Para = styled.div`
  margin-bottom: 60px;
`;

const Container = styled.div`
  padding-top: 0px;
  width: 100%;
  background-image: linear-gradient(#fef6ee, #fce6e3, #fef6ee);
`;

const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
