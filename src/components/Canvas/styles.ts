import styled from "@emotion/styled";

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Text = styled.div<{ active?: boolean }>`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.primary};
`;
