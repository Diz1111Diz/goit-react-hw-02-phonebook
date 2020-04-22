import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  padding-right: 20px;
`;
export const Button = styled.button`
  height: 20px;
  width: 60px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  :hover {
    background-color: #6495ed;
  }
`;
