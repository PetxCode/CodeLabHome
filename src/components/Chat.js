import React, { useEffect, useState } from "react";
import styled from "styled-components";
import io from "socket.io-client";

const Chat = () => {
  const socket = io.connect("http://localhost:2251");

  const [mgs, setMgs] = useState("");
  const [chat, setChat] = useState([]);

  const sendMgs = (e) => {
    e.preventDefault();
    socket.emit("chat", { mgs });
    setMgs("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });

  return (
    <Container>
      <Wrapper>
        <CardHolder>
          {chat.map((props, i) => (
            <Messages key={i}>{props.mgs}</Messages>
          ))}

          <Card onSubmit={sendMgs}>
            <Input
              placeholder="Send a message"
              value={mgs}
              onChange={(e) => {
                setMgs(e.target.value);
              }}
            />
            <Button type="submit">Send</Button>
          </Card>
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default Chat;

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
`;
const Messages = styled.div`
  flex: 1;
  /* min-height: 100px; */
  padding-bottom: 10px;
  background: lightblue;
`;

const Card = styled.form`
  margin: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 300px;
  /* min-height: 150px; */
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  outline: none;
  border: 0;
  padding: 15px 20px;
  border-radius: 3px;
  background: ${({ bg }) => (bg ? "#004080" : "red")};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid lightgray;
  height: 40px;
  margin-bottom: 5px;
  padding-left: 10px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  color: #004080;
  font-weight: bold;
  text-transform: capitalize;
`;

const Wrapper = styled.div`
  padding-top: 150px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 0px);
  background: lightgray;
`;
