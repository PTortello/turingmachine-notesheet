import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 212px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 28px;
  font-weight: bold;
`;
