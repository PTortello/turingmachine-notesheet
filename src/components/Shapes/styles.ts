import styled from "@emotion/styled";

export const Container = styled.div<{
  horizontal?: boolean;
}>`
  display: flex;
  justify-content: space-around;
  flex-direction: ${({ horizontal }) => !horizontal && "column"};
  ${({ horizontal }) =>
    horizontal &&
    `
      width: 125px;
      margin-bottom: 10px;
    `};
`;
