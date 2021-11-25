import React from "react";
import styled from "styled-components";
import { app } from "./../../base";

export const StudentsRecord = () => {
  const [student, setStudent] = React.useState([]);

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
      <Wrapper>
        {student?.map(({ id, name, set, image }) => (
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
