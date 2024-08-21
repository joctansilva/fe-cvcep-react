import { stateServiceFetch } from "@/app/clients/stateServiceFetch";
import { useQuery } from "react-query";

export type FindMunicipalitiesByUfProps = { state: string };

export interface IMunicipality {
  nome: string;
  codigo_ibge: string;
}

export type StateResponse = IMunicipality[];

export const findMunicipalitiesByUf = async (estado: string) => {
  const response = await stateServiceFetch<StateResponse>(estado, {
    method: "GET",
  });
  return response;
};

export const findMunicipalitiesByUFQueryKey = "findMunicipalitiesByUf";

export const useMunicipalitiesByUf = ({
  state,
}: FindMunicipalitiesByUfProps) => {
  return useQuery({
    queryKey: ["findMunicipalitiesByUf", state],
    queryFn: () => findMunicipalitiesByUf(state),
    enabled: !!state,
  });
};
