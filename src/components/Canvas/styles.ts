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
  color: ${({ active }) => (active ? "#fefefe" : "#2db563")};
  background-color: ${({ active }) => (active ? "#2db563" : "#fefefe")};
`;
