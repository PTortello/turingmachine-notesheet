import styled from "@emotion/styled";
import { CustomButton } from "components/CustomButton/styles";

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Content = styled.div`
  height: 70vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  padding: 16px 1vh;
  position: relative;
`;

export const Button = styled(CustomButton)`
  margin-top: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  color: #fefefe;
  background-color: #2db563;
`;
