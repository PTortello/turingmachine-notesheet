import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 210px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  border: ${({ theme }) => theme.border};
  border-radius: 4px;
`;
