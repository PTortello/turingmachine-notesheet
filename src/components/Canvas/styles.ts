import styled from "@emotion/styled";
import { CustomButton } from "components/CustomButton/styles";

export const Container = styled.div`
  position: absolute;
  top: 62px;
  right: 8px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled(CustomButton)`
  height: 40px;
  width: 40px;
  background-color: #fefefe;
`;
