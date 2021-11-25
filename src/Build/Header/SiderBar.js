import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "./AuthProvider";
import { app } from "./../../base";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

import { Link } from "react-router-dom";

const SiderBar = ({ toogle, setToggle }) => {
  const { current } = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Nav
            to="/"
            onClick={() => {
              setToggle(false);
            }}
          >
            <Icon>
              <HomeIcon />
            </Icon>
            <span>Home</span>
          </Nav>
          <Nav
            to="/about"
            onClick={() => {
              setToggle(false);
            }}
          >
            <Icon>
              <LocalLibraryIcon />
            </Icon>
            <span>About Us</span>
          </Nav>
          <Nav
            to="/course"
            onClick={() => {
              setToggle(false);
            }}
          >
            <Icon>
              <LibraryBooksIcon />
            </Icon>
            <span>Course</span>
          </Nav>
          <Nav
            to="/talents"
            onClick={() => {
              setToggle(false);
            }}
          >
            <Icon>
              <DeveloperModeIcon />
            </Icon>
            <span>Talents</span>
          </Nav>
          <Nav
            to="/hire"
            onClick={() => {
              setToggle(false);
            }}
          >
            <Icon>
              <LocationCityIcon />
            </Icon>
            <span>Hire our Talents</span>
          </Nav>
        </Navigation>

        {current ? (
          <Nav1
            onClick={() => {
              app.auth().signOut();
              setToggle(false);
            }}
          >
            <Icon>
              <LockOpenIcon />
            </Icon>
            <span>Sign Out</span>
          </Nav1>
        ) : (
          <Nav11
            to="/register"
            onClick={() => {
              setToggle(false);
            }}
          >
            <Icon>
              <LockIcon />
            </Icon>
            <span>Create an Account</span>
          </Nav11>
        )}
      </Wrapper>
    </Container>
  );
};

export default SiderBar;

const Icon = styled.div`
  margin-right: 10px;
`;

const Nav11 = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  padding-left: 10px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  transition: all 350ms;
  text-align: center;
  width: 100%;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);

    font-size: 20px;
  }
`;

const Nav1 = styled.div`
  display: flex;
  margin: 0px 0;
  padding-left: 10px;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);

    font-size: 20px;
  }
`;

const Nav = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  margin: 0px 0;
  padding-left: 40px;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);

    font-size: 20px;
  }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Container = styled.div`
  /* width: 300px; */
  width: 90%;
  height: 80vh;
  /* background-color: white; */
  background-color: #004080;
  color: white;
  margin-top: 100.5px;
  position: fixed;
  z-index: 10;
  border-radius: 0px 0px 5px 0;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;
