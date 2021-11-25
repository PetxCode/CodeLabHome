import React from "react";
import styled from "styled-components";
import data from "./studentData.json";
import { Link } from "react-router-dom";
import { app } from "./../../base";

const Students = () => {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const fetchData = async () => {
    await app
      .firestore()
      .collection("hire")
      .onSnapshot((snapShot) => {
        const i = [];
        snapShot.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setData(i);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <SearchInput>
        <Input
          placeholder="Search for Developer by Name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </SearchInput>
      <Wrapper>
        {data
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.firstName.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          ?.map((props, i) => (
            <Card key={props.i}>
              <Content>
                <Title>
                  <Name>
                    {props.firstName} {props.lastName}
                  </Name>
                  <Place>{props.location}</Place>
                </Title>
                <Image src={props.img} />
              </Content>
              <Line />
              <About>About</About>
              <Sub>{props.desc}</Sub>
              <Line />

              <About>Core Skill</About>

              <SkillHold>
                <Skill bg>
                  {props.pry?.map((skill) => (
                    <Skill1 bg>{skill.skill}</Skill1>
                  ))}
                </Skill>
              </SkillHold>
              <Line />

              <About>Secondary Skill</About>

              <SkillHold>
                <Skill>
                  {props.sec?.map((skill, i) => (
                    <Skill1 key={skill.i}>{skill.skill}</Skill1>
                  ))}
                </Skill>
              </SkillHold>

              {/* <Line2 /> */}
              <Name1
                to={`/student/${props.id}`}
                onClick={() => {
                  console.log("Hello");
                }}
              >
                <span>Hire {props.firstName}</span>
              </Name1>
            </Card>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Students;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 50px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Raleway;
  }

  @media screen and (max-width: 500px) {
    width: 260px;
    margin-bottom: 30px;
  }
`;

const SearchInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  margin-right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Line2 = styled.div`
  width: 100px;
  margin-left: 30px;
  margin-top: 35px;
  border-top: 1px solid lightgray;
`;
const Name1 = styled(Link)`
  margin: 10px 30px;
  font-size: 30px;
  text-transform: uppercase;
  color: #09386d;
  margin-top: 35px;
  cursor: pointer;
  text-decoration: none;

  span {
    position: relative;

    :after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: lightgray;
      left: 0;
      top: -10px;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 0;
  }
`;

const SkillHold = styled.div`
  display: flex;
  margin: 20px 30px;
  width: 400px;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    width: 300px;
    display: flex;
    margin: 20px 30px;
    /* width: 400px; */
    flex-wrap: wrap;

    @media screen and (max-width: 500px) {
      min-width: 280px;
      margin: 10px 0;
    }
  }
`;
const Skill1 = styled.div`
  background-color: ${({ bg }) => (bg ? "#f9af2f" : "#55a350")};
  color: ${({ bg }) => (bg ? "black" : "white")};
  padding: 5px 10px;
  margin: 10px;
  border-radius: 30px;
  display: flex;
`;
const Skill = styled.div`
  padding: 5px 10px;
  margin: 10px;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    margin: 0px;
    font-size: 13px;
  }
`;

const Line = styled.div`
  margin: 35px 30px;
  border-top: 1px solid lightgray;

  @media screen and (max-width: 500px) {
    margin: 20px 30px;
  }
`;
const About = styled.div`
  margin: 0 30px;
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
const Sub = styled.div`
  margin: 10px 30px;
  font-size: 17px;
  line-height: 1.5;

  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 1.3;
  }
`;

const Card = styled.div`
  width: 500px;
  min-width: 300px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 33%) 0px 16px 10px -10px;
  border-radius: 5px;
  padding-top: 30px;
  padding-bottom: 40px;
  margin: 10px;

  @media screen and (max-width: 500px) {
    width: 260px;
    margin: 10px 0;
  }
`;
const Title = styled.div`
  margin-left: 30px;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 30px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;
const Place = styled.div``;

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
  min-height: 100vh;
  height: 100%;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
