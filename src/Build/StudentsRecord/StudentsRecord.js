import React from "react";
import styled from "styled-components";
import { app } from "./../../base";

export const StudentsRecord = () => {
  const [student, setStudent] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const getStudents = async () => {
    await app
      .firestore()
      .collection("students")
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setStudent(r);
      });
  };

  React.useEffect(() => {
    getStudents();
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
        {student

          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          ?.map(({ id, name, set, image }) => (
            <Student key={id}>
              <Image src={image} />
              <Name>{name}</Name>
              <Name>set: {set}</Name>
            </Student>
          ))}
      </Wrapper>
    </Container>
  );
};

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

const Name = styled.div``;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
  background: black;
  border: 2px solid black;
  margin-bottom: 5px;
`;
const Student = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 300px;
  padding-bottom: 30px;
`;
