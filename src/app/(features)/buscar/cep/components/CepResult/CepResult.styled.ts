"use client";
import styled from "@emotion/styled";
import { ArrowForward } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import Link from "next/link";

export const TableHead = styled(TableRow)`
  background-color: #ffe600;
`;

export const TableHeadCep = styled(TableCell)`
  color: #0a00b4;
  font-weight: 600;
`;

export const TableLink = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ArrowIcon = styled(ArrowForward)`
  font-weight: 900;
  color: #ffc300;
  font-size: large;
`;
