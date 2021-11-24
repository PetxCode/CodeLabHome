import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Footer from "./Footer/Footer";
import Home from "./Build/HomeBuild/Home";
import Header from "./Build/Header/Header";
import Register from "./Build/Header/Register";
import Course from "./Build/Course/Course";
import Collaborate from "./Build/Course/Collaborate";
import Prepare from "./Build/Course/Prepare";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "styled-components";
import pix from "./Build/Course/pixx.jpeg";
import vid from "./Build/Course/vision.mp4";
import About from "./Build/About/About";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import HirePage from "./Build/HirePage/HirePage";
import StudentDetail from "./Build/HirePage/StudentDetail";

const App = () => {
  const queryClient = new QueryClient();
  const [scroll, setScroll] = React.useState(false);

  const getScroll = () => {
    const check = window.scrollY;
    if (check >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", getScroll);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header bg={scroll ? "bg" : ""} style={{ transition: "all 350ms" }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/talents" element={<HomeScreen />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/student/:id" element={<StudentDetail />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Step>
          <Steps>
            <StepTExt>Three Simple Steps to get into CodeLab</StepTExt>
            <StopRow>
              <StepIcon bg="#FEF3E9">
                <EventNoteIcon />{" "}
              </StepIcon>
              <StepContent>
                <StepNumb>Step One</StepNumb>
                <StepDesc bg="#FEF3E9">
                  Fill and submit the application form
                </StepDesc>
              </StepContent>
            </StopRow>
            <StopRow>
              <StepIcon bg="#D0D1FD">
                <SpeedIcon />{" "}
              </StepIcon>
              <StepContent>
                <StepNumb>Step Two</StepNumb>
                <StepDesc bg="#D0D1FD">
                  Come for the scheduled SCREENING date
                </StepDesc>
              </StepContent>
            </StopRow>
            <StopRow>
              <StepIcon bg="#F9D5D3">
                {" "}
                <CheckCircleIcon />{" "}
              </StepIcon>
              <StepContent>
                <StepNumb>Step Three</StepNumb>
                <StepDesc bg="#F9D5D3">
                  After that, Begin your journey into Software Engineering
                </StepDesc>
              </StepContent>
            </StopRow>
          </Steps>
        </Step>

        <Prepare />

        <Collaborate
          pix={pix}
          title="You can Collaborate with us"
          desc=" Our extensive Diploma program is set to produce top Software
        Engineers who are able to compete globally. Hiring our graduates
        guarantee that you have access to highly skilled, passionate and
        professional tech talent to ensure continuous business success."
        />
        <Collaborate
          vid={vid}
          bg
          title="Help us Reach more Youth"
          desc=" Our extensive Diploma program is set to produce top Software
        Engineers who are able to compete globally. Hiring our graduates
        guarantee that you have access to highly skilled, passionate and
        professional tech talent to ensure continuous business success."
        />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

const Steps = styled.div`
  margin-top: 0;
`;
const StepDesc = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${({ bg }) => bg};

  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

const StepNumb = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  opacity: 0.5;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StepContent = styled.div``;

const StepIcon = styled.div`
  margin-right: 20px;
  margin-left: 40px;

  .MuiSvgIcon-root {
    font-size: 100px;
    color: ${({ bg }) => bg};
  }

  @media screen and (max-width: 400px) {
    .MuiSvgIcon-root {
      font-size: 80px;
      margin: 0px 0px 0px 0px;
    }
  }
`;

const StopRow = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: flex-start;
  width: 100%;
`;

const StepTExt = styled.div`
  margin-top: 50px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
`;

const Step = styled.div`
  /* margin: 40px auto; */
  margin-bottom: 0px;
  width: 100%;
  background: black;
  min-height: 400px;
  padding-bottom: 30px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
