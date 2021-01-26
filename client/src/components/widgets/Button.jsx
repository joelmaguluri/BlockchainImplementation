import styled from "styled-components";

const Button = styled.button`
  margin-right: auto;
  margin-left: auto;
  display: block;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 6.25em;
  padding: 20px 25px;
  height: auto;
  background: linear-gradient(45deg, #d4145a, #fbb03b);
  border: none;
  cursor: pointer;
  color: #fff;
  align-items: flex-end;
`;

export const SettingsButton = styled.button`
  background: linear-gradient(45deg, rgb(0, 198, 255), rgb(0, 114, 255));
  box-shadow: rgba(50, 50, 93, 0.1) 0px 7px 14px,
    rgba(0, 0, 0, 0.08) 0px 3px 6px;
  color: white;
  border: transparent;
  width: 40px;
  padding: 0;
  font-size: 16px;
  border-radius: 50%;
  height: 40px;
  cursor: pointer;
`;

export default Button;
