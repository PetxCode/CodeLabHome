import React from "react";
import MidComp from "./MidComp";
import styled from "styled-components";
import img1 from "../assets/visit.svg";
import img2 from "../assets/save.svg";

const MidProps = () => {
  return (
    <Container>
      <MidComp
        rw
        title="Help your team move faster"
        desc="Codementor for Teams brings expert programming help right to your screen."
        learn="Learn More"
        img={img2}
      />
      <MidComp
        bg
        title="Hiring for a bigger project?"
        desc="Arc helps you find senior developers for both permanent full-time roles and 40+ hour contract projects."
        learn="Learn More"
        img={img1}
      />
    </Container>
  );
};

export default MidProps;

const Container = styled.div`
  width: 100%;
`;
