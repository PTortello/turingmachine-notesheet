import styled from "@emotion/styled";
import { CustomButton } from "components/CustomButton/styles";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(CustomButton)`
  width: 70px;
`;
