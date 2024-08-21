import styled from "@emotion/styled";

export const StatePageRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const StateTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
