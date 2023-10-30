import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

export const Text = styled.div`
  width: 20px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: "Share Tech Mono";
  font-size: 22px;
`;

export const Slash = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.pen};
`;
