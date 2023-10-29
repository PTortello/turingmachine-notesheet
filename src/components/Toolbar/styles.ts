import styled from "@emotion/styled";
import { CustomButton } from "components/CustomButton/styles";

export const Container = styled.div`
  position: absolute;
  top: 62px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Button = styled(CustomButton)<{
  active?: boolean;
  reset?: boolean;
}>`
  height: 42px;
  width: 42px;
  background-color: ${({ active }) => (active ? "#2db563" : "#fefefe")};
  border-color: ${({ reset }) => reset && "#ff0000"};
`;
