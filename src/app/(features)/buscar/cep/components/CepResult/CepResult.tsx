import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./CepResult.styled";
import { maskCep } from "@/app/utils/maskCep";

interface CepResultsTableProps {
  data: {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    service: string;
  };
}

export const CepResultsTable = ({ data }: CepResultsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <S.TableHead>
            <TableCell colSpan={1}>Resultados para o CEP</TableCell>
            <S.TableHeadCep colSpan={1}>{maskCep(data.cep)}</S.TableHeadCep>
          </S.TableHead>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <strong>Estado:</strong>
            </TableCell>
            <TableCell>
              <S.TableLink href={`/buscar/estado/${data.state}`}>
                {data.state}
                <S.ArrowIcon />
              </S.TableLink>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Cidade:</strong>
            </TableCell>
            <TableCell>{data.city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Bairro:</strong>
            </TableCell>
            <TableCell>{data.neighborhood}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Rua:</strong>
            </TableCell>
            <TableCell>{data.street}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Provedor:</strong>
            </TableCell>
            <TableCell>{data.service}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
