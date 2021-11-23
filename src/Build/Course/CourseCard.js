import React from "react";
import styled from "styled-components";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const CourseCard = ({ courseData, bg, course }) => {
  return (
    <Card>
      <Top bg={bg}>
        <Text>Course</Text>
        <TextT>{course}</TextT>
      </Top>
      <TextL bg={bg}>Outline</TextL>
      <Desc>
        This program is designed to provide you with in-depth knowledge on
        these:
      </Desc>

      {courseData?.map((props, i) => (
        <View key={i}>
          <Icon>
            <ArrowCircleDownIcon />
          </Icon>
          <Cous>{props.topic}</Cous>
        </View>
      ))}
    </Card>
  );
};

export default CourseCard;

const View = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
const Icon = styled.div`
  margin-right: 15px;
  transform: rotate(270deg);
  color: #004080;
`;
const Cous = styled.div`
  font-weight: bold;
  width: 85%;
`;

const Desc = styled.div`
  margin: 0 20px;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 30px;
`;

const Top = styled.div`
  width: 100%;
  height: 180px;
  background: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding-left: 20px;
  font-weight: bold;
`;
const TextT = styled.div`
  font-size: 40px;
`;

const TextL = styled.div`
  background: ${({ bg }) => bg};
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  margin: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Text = styled.div`
  text-transform: uppercase;
  background: white;
  color: black;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
`;
const Card = styled.div`
  width: 500px;
  min-height: 300px;
  padding-bottom: 30px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  overflow: hidden;
  margin: 10px;
  /* display: flex;
  align-items: center;
  flex-direction: column; */

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
