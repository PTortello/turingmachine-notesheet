import styled from "@emotion/styled";
import { CustomButton } from "components/CustomButton/styles";

export const Container = styled.div`
  position: absolute;
  top: 58px;
  right: 14px;
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
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.primary};
  border-color: ${({ reset, theme }) => reset && theme.colors.reset};
`;
