import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { app } from "./../../base";
import { AuthContext } from "./AuthProvider";
import SiderBar from "./SiderBar";

const Header = ({ bg }) => {
  const { current } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Container bg={bg}>
        <Wrapper>
          <Logo> Use Query </Logo>
          <Navigation>
            <Nav to="/" bg={bg}>
              Home
            </Nav>
            <Nav to="/about" bg={bg}>
              About Us
            </Nav>
            <Nav to="/course" bg={bg}>
              Course
            </Nav>
            <Nav to="/talents" bg={bg}>
              Talents
            </Nav>
            <Nav to="/hire" bg={bg}>
              Hire
            </Nav>
          </Navigation>

          <SignButton>
            {current ? (
              <Nav1
                bg={bg}
                onClick={() => {
                  app.auth().signOut();
                }}
              >
                Sign Out
              </Nav1>
            ) : (
              <Nav to="/register" bg={bg}>
                Create an Account
              </Nav>
            )}
          </SignButton>

          <Menu onClick={onToggle}>
            <MenuIcon />
          </Menu>
        </Wrapper>
      </Container>
      <Sider>
        {" "}
        {toggle ? (
          <SiderBar toogle={toggle} setToggle={setToggle} />
        ) : null}{" "}
      </Sider>
    </>
  );
};

export default Header;

const Sider = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;

    :hover {
      cursor: pointer;
    }

    .MuiSvgIcon-root {
      font-size: 40px;
    }
  }
`;

const SignButton = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Nav1 = styled.div`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: ${({ bg }) => (bg ? "white" : "#004080")};
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const Nav = styled(NavLink)`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
  color: ${({ bg }) => (bg ? "white" : "#004080")};

  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Navigation = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 0 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 0 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ bg }) => (bg ? "#004080" : "transparent")};
  color: ${({ bg }) => (bg ? "white" : "#004080")};
  position: fixed;
  z-index: 1;
`;

// <Nav to="/create" bg={bg}>
//             Creat New
//           </Nav>
//           <Nav to="/chat" bg={bg}>
//             Chat
//           </Nav>
//           <Nav to="/letchat" bg={bg}>
//             Let's Chat
//           </Nav>
