import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 125px;
  justify-content: space-around;
  border-bottom: ${({ theme }) => theme.border};
`;

export const Digit = styled.div`
  height: 30px;
  width: 40px;
  font-family: "Kalam";
  font-size: 24px;
  text-align: center;
`;

export const MidDigit = styled(Digit)`
  border-inline: ${({ theme }) => theme.border};
`;
