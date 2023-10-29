import styled from "@emotion/styled";
import { CustomButton } from "components/CustomButton/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled(CustomButton)`
  margin-top: 16px;
`;
