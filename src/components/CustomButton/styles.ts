import styled from "@emotion/styled";

export const CustomButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;

  ${({ theme }) => `
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
    border-color: ${theme.colors.secondary};
  `}
`;
