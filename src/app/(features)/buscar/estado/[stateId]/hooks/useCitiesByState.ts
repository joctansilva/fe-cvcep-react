import { useMunicipalitiesByUf } from "@/app/(features)/buscar/estado/[stateId]/requests/findMunicipalitiesByUf";
import { SetStateAction, useEffect, useState } from "react";

export const useCitiesByState = (stateId: any) => {
  const { data, error, isLoading } = useMunicipalitiesByUf({ state: stateId });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (error) {
      console.error("Error fetching municipalities:", error);
    }
  }, [error]);

  const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    data,
    error,
    isLoading,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
