import { cepServiceFetch } from "@/app/clients/cepServiceFetch";
import { useQuery } from "react-query";

export type GetByCepProps = { cep: string };

export type CepResponse = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
};

export const getByCep = async ({ cep }: GetByCepProps) => {
  const data = await cepServiceFetch<CepResponse>(cep, {
    method: "GET",
  });

  return data;
};

export const getByCepQueryKey = "getByCep";

export const useCep = ({ cep }: GetByCepProps) => {
  return useQuery({
    queryKey: ["getByCep", cep], // Use cep for a dynamic query key
    queryFn: () => getByCep({ cep }),
    enabled: !!cep, // Only enable query when cep has a value
  });
};
