import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding-left: 8px;
  padding-top: 4px;
  gap: 8px;
  border: ${({ theme }) => theme.border};
  border-radius: 8px;
  width: 250px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
`;
