import styled from "@emotion/styled";
import { TableRow } from "@mui/material";

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

export const Stateheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const StateTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const TableRowTitle = styled(TableRow)`
  background-color: #ffe600;
`;
