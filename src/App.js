import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Footer from "./Footer/Footer";
import Home from "./Build/HomeBuild/Home";
import Header from "./Build/Header/Header";
import Register from "./Build/Header/Register";
import Course from "./Build/Course/Course";

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
          <Route path="/course" element={<Course />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
