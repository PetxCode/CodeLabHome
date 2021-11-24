import React from "react";
import { useParams } from "react-router-dom";
import dataFile from "./studentData.json";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(dataFile[id - 1]);
    console.log(data);
  }, []);
  return (
    <div style={{ paddingTop: "300px" }}>
      <div>Image of {id}</div>
      <div>
        {dataFile?.map((props, i) => (
          <div>
            {" "}
            {props.firstName}
            <Image src={props.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

const Image = styled.img`
  margin-right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #f9af2f; */
  object-fit: cover;
  /* border: 2px solid #f9af2f; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${({ bg }) => (bg ? "#f9af2f" : "#55a350")}; */
`;
