import React from "react";
import HomeProps from "./HomeProps";
import styled from "styled-components";
import find0 from "./../assets/first.jpg";
import find1 from "./../assets/second.png";
import { AiFillBug } from "react-icons/ai";
import { BsFillPersonCheckFill, BsWindowDock } from "react-icons/bs";

const PropsScreen = () => {
  return (
    <Container>
      <HomeProps
        img={find0}
        title="One-on-one live mentorship"
        but="Get started"
        icon1={<AiFillBug />}
        icon2={<BsFillPersonCheckFill />}
        icon3={<BsWindowDock />}
        desc1="Debug with the help of an expert"
        desc2="Personalize your learning experience"
        desc3="Get answers to complex problems"
      />

      {/* <HomeProps
        bg
        img={find1}
        rw
        title="Project-based freelance work"
        but="Get started"
        icon1={<AiFillBug />}
        icon2={<BsFillPersonCheckFill />}
        icon3={<BsWindowDock />}
        desc1="Debug with the help of an expert"
        desc2="Personalize your learning experience"
        desc3="Get answers to complex problems"
      /> */}
    </Container>
  );
};

export default PropsScreen;

const Container = styled.div`
  width: 100%;
`;
