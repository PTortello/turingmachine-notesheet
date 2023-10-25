import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 125px;
  justify-content: space-around;
  border-bottom: 2px solid #2db563;
`;

export const Digit = styled.div`
  width: 40px;
  font-family: "Kalam";
  text-align: center;
  user-select: none;
`;

export const MidDigit = styled(Digit)`
  border-left: 2px solid #2db563;
  border-right: 2px solid #2db563;
`;
