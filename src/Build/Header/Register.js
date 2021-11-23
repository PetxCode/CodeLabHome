import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { app } from "./../../base";
import ava from "./avatar.png";
import firebase from "firebase";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const navigate = useNavigate();
  const [img, setImg] = React.useState(ava);
  const [avatar, setAvatar] = React.useState("");
  const [count, setCount] = React.useState(0);

  const authSchema = yup.object().shape({
    name: yup.string().required("This field must be filled"),
    email: yup.string().email().required("This field must be filled"),
    password: yup.string().required("This field must be filled"),
    confirm: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const whenSubmitted = async (val) => {
    console.log(val);
    const { email, password, name } = val;

    const userID = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (userID) {
      await app.firestore().collection("users").doc(userID.user.uid).set({
        avatar,
        email,
        password,
        name,
        createdBy: userID.user.uid,
      });
    }

    reset();
    navigate("/");
  };

  const UploadImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImg(save);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("userImage/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counter = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setCount(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
        });
      }
    );
  };

  return (
    <Container>
      <Wrapper>
        <Card onSubmit={handleSubmit(whenSubmitted)}>
          <Profile>
            <ProgImage>
              {count > 0 && count <= 99.9999 ? (
                <ProgColor>
                  <CircularProgress color="secondary" />
                </ProgColor>
              ) : null}

              <Image src={img} />
            </ProgImage>

            <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
            <ImageInput type="file" id="pix" onChange={UploadImage} />
            {count > 0 && count <= 99.9999 ? (
              <Prog>
                <Linear>
                  {" "}
                  <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={count}
                  />
                </Linear>
                <ValCount>{Math.ceil(count)}%</ValCount>
              </Prog>
            ) : null}
          </Profile>

          <Content>
            <Label>Name</Label>
            <Input placeholder="Enter Name" {...register("name")} />
            <LabelError>{errors.name?.message}</LabelError>
          </Content>
          <Content>
            <Label>Email</Label>
            <Input placeholder="Enter Email" {...register("email")} />
            <LabelError>{errors.email?.message}</LabelError>
          </Content>
          <Content>
            <Label>Password</Label>
            <Input placeholder="Enter Password" {...register("password")} />
            <LabelError>{errors.password?.message}</LabelError>
          </Content>
          <Content>
            <Label>Confirm Password</Label>
            <Input
              placeholder="Enter Confirm Password"
              {...register("confirm")}
            />
            <LabelError>{errors.confirm?.message}</LabelError>
          </Content>

          <Buttons>
            <Button bg type="submit">
              Register
            </Button>
          </Buttons>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Linear = styled.div`
  width: 200px;
`;
const ValCount = styled.div`
  margin-left: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const ProgImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  position: relative;
`;

const ProgColor = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Prog = styled.div`
  width: 250px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  position: absolute;
`;
const ImageLabel = styled.label`
  background: #004080;
  padding: 15px 20px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;
const ImageInput = styled.input`
  display: none;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding-left: 15px;
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  margin-top: 20px;
`;
const LabelError = styled.label`
  font-weight: bold;
  font-size: 10px;
  color: red;
`;

const Button = styled.button`
  padding: 15px 20px;
  border-radius: 3px;
  background: ${({ bg }) => (bg ? "#004080" : "red")};
  color: white;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Text = styled.div``;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #004080;
  font-weight: bold;
  text-transform: capitalize;
  flex-direction: column;
`;

const Card = styled.form`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 500px;
  min-height: 250px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Wrapper = styled.div`
  padding-top: 150px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  background: lightgray;
`;
