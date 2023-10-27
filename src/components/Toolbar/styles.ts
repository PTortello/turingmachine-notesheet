import styled from "@emotion/styled";
import { CustomButton } from "components/CustomButton/styles";

export const Container = styled.div`
  position: absolute;
  top: 62px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Button = styled(CustomButton)<{
  active?: boolean;
  reset?: boolean;
}>`
  height: 40px;
  width: 40px;
  background-color: ${({ active }) => (active ? "#2db563" : "#fefefe")};
  border-color: ${({ reset }) => reset && "#ff0000"};
`;
