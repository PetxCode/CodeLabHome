import React, { useState, useEffect } from "react";
import styled from "styled-components";
import io from "socket.io-client";

const LetChat = () => {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");

  const socket = io.connect("http://localhost:2233");

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { text });
    setText("");
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
            <p key={i}>{props.text}</p>
          ))}
          <Card onSubmit={sendChat}>
            <Input
              placeholder="Enter your message"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button type="submit">send</Button>
          </Card>
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default LetChat;

const Button = styled.button`
  height: 45px;
  font-family: Raleway;
  font-size: 18px;
`;

const Input = styled.input`
  height: 48px;
  outline: none;
  border: 1px solid lightgray;
  margin-bottom: 5px;
  padding-left: 15px;
  font-size: 16px;

  ::placeholder {
    font-family: Raleway;
  }
`;

const Card = styled.form`
  flex-direction: column;
  display: flex;
  width: 500px;
  border-radius: 5px;
  /* background-color: white; */
  /* min-height: 200px; */
`;

const Messages = styled.div`
  flex: 1;
  background-color: lightblue;
  border-radius: 5px;
  padding: 10px;
`;

const CardHolder = styled.div`
  flex-direction: column;
  display: flex;
  height: 500px;
`;

const Wrapper = styled.div`
  padding-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 0px);
  background: lightgray;
`;
