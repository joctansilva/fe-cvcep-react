"use client";
import { useMunicipalitiesByUf } from "./requests/findMunicipalitiesByUf";
import { useEffect } from "react";

const StatePage = ({ params }: { params: { stateId: string } }) => {
  const { stateId } = params;
  const { data, error, isLoading } = useMunicipalitiesByUf({ state: stateId });

  useEffect(() => {
    if (error) {
      console.error("Error fetching municipalities:", error);
    }
  }, [error]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Municipalities in {stateId}</h1>
      <ul>
        {data?.map((municipality, index) => (
          <li key={`${municipality.codigo_ibge}-${index}`}>
            {municipality.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatePage;
