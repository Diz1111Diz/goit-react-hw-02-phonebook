import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  border: 2px solid black;
  padding: 10px;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 5px;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
`;

export const Button = styled.button`
  font-weight: 600;
  width: 100px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  :hover {
    background-color: ${(props) =>
      props.disabled === false ? "#6495ed" : "#ff6666"};
  }
`;
