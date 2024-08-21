import { cepServiceFetch } from "@/app/clients/cepServiceFetch";
import { useQuery } from "react-query";

export type FindCepInformationProps = { cep: string };

export type FindCepResponse = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
};

export const findCepInformation = async ({ cep }: FindCepInformationProps) => {
  const data = await cepServiceFetch<FindCepResponse>(cep, {
    method: "GET",
  });

  return data;
};

export const findCepInformationQueryKey = "findCepInformation";

export const useFindCepInformation = ({ cep }: FindCepInformationProps) => {
  return useQuery({
    queryKey: ["findCepInformation", cep],
    queryFn: () => findCepInformation({ cep }),
    enabled: !!cep,
  });
};
