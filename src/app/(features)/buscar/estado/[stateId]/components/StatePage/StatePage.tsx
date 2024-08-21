"use client";

import { useCitiesByState } from "@/app/(features)/buscar/estado/[stateId]/hooks/useCitiesByState";
import * as S from "@/app/(features)/buscar/estado/[stateId]/components/StatePage/StatePage.styled";
import { getStateName } from "@/app/utils/abbreviationToStates";
import {
  Button,
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
import { ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export const StatePage = ({ stateId }: { stateId: string }) => {
  const router = useRouter();
  const {
    data,
    isLoading,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useCitiesByState(stateId);

  if (isLoading)
    return (
      <S.StatePageRoot>
        <S.StateTitle>Carregando...</S.StateTitle>
      </S.StatePageRoot>
    );

  return (
    <S.StatePageRoot>
      <div>
        <S.Stateheader>
          <S.StateTitle>
            Munícipios existentes no estado de {getStateName(stateId)}
          </S.StateTitle>
          <Button
            variant="text"
            startIcon={<ChevronLeft />}
            onClick={() => router.push("/buscar/cep")}
          >
            Voltar
          </Button>
        </S.Stateheader>
        <TableContainer component={Paper} sx={{ width: 700 }}>
          <Table aria-label="dense table" size="small" sx={{ width: 700 }}>
            <TableHead>
              <S.TableRowTitle>
                <TableCell>
                  <TableSortLabel>Nome</TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel>Código IBGE</TableSortLabel>
                </TableCell>
              </S.TableRowTitle>
            </TableHead>
            <TableBody>
              {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((municipality, index) => (
                  <TableRow key={`${municipality.codigo_ibge}-${index}`}>
                    <TableCell sx={{ width: 350 }}>
                      {municipality.nome}
                    </TableCell>
                    <TableCell sx={{ width: 350 }}>
                      {municipality.codigo_ibge}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={data?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </S.StatePageRoot>
  );
};
