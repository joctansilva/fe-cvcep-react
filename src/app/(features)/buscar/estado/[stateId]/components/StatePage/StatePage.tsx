"use client";

import { useMunicipalitiesByUf } from "@/app/(features)/buscar/estado/[stateId]/requests/findMunicipalitiesByUf";
import { useEffect, useState } from "react";
import * as S from "@/app/(features)/buscar/estado/[stateId]/components/StatePage/StatePage.styled";
import { getStateName } from "@/app/utils/abbreviationToStates";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

export const StatePage = ({ stateId }: { stateId: string }) => {
  const { data, error, isLoading } = useMunicipalitiesByUf({ state: stateId });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(13);

  useEffect(() => {
    if (error) {
      console.error("Error fetching municipalities:", error);
    }
  }, [error]);

  if (isLoading) return <p>Loading...</p>;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <S.StatePageRoot>
      <S.StateTitle>
        Munícipios existente no estado de {getStateName(stateId)}
      </S.StateTitle>
      <TableContainer component={Paper} sx={{ width: 650 }}>
        <Table aria-label="dense table" size="small" sx={{ width: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>Nome</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Código IBGE</TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((municipality, index) => (
                <TableRow key={`${municipality.codigo_ibge}-${index}`}>
                  <TableCell sx={{ width: 350 }}>{municipality.nome}</TableCell>
                  <TableCell sx={{ width: 300 }}>
                    {municipality.codigo_ibge}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[13]}
        component="div"
        count={data?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </S.StatePageRoot>
  );
};
