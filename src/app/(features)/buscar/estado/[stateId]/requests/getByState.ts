import { stateServiceFetch } from "@/app/clients/stateServiceFetch";
import { useQuery } from "react-query";

export type GetByStateProps = { state: string };

export interface IMunicipality {
  nome: string;
  codigo_ibge: string;
}

export type StateResponse = IMunicipality[];

export const getByState = async (estado: string) => {
  const response = await stateServiceFetch<StateResponse>(estado, {
    method: "GET",
  });
  return response;
};

export const getByStateQueryKey = "getByState";

export const useFederalUnity = ({ state }: GetByStateProps) => {
  return useQuery({
    queryKey: ["getByState", state],
    queryFn: () => getByState(state),
    enabled: !!state,
  });
};
