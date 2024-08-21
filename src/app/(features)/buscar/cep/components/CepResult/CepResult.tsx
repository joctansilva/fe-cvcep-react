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
import * as S from "@/app/(features)/buscar/cep/components/CepResult/CepResult.styled";
import { maskCep } from "@/app/utils/maskCep";
import Link from "next/link";
import { getStateName } from "@/app/utils/abbreviationToStates";

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
    <>
      <TableContainer component={Paper}>
        <Table aria-label="dense table">
          <TableHead>
            <S.TableRowTitle>
              <TableCell colSpan={1}>
                <strong>Resultados para o CEP</strong>
              </TableCell>
              <S.TableCellCep colSpan={1}>{maskCep(data.cep)}</S.TableCellCep>
            </S.TableRowTitle>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Estado:</strong>
              </TableCell>
              <TableCell>
                <S.TableLink href={`/buscar/estado/${data.state}`}>
                  {data.state} | {getStateName(data.state).toUpperCase()}
                  <S.ArrowIcon />
                </S.TableLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Cidade:</strong>
              </TableCell>
              <TableCell>{data.city.toUpperCase()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Bairro:</strong>
              </TableCell>
              <TableCell>{data.neighborhood.toUpperCase()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Rua:</strong>
              </TableCell>
              <TableCell>{data.street.toUpperCase()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Provedor:</strong>
              </TableCell>
              <TableCell>{data.service.toLocaleUpperCase()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link href={`/buscar/estado/${data.state}`}>
        Clique aqui se deseja consultar todas os municípios do estado do{" "}
        {getStateName(data.state)}
      </Link>
    </>
  );
};
