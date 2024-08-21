"use client";
import { useFederalUnity } from "./requests/getByState";
import { useEffect } from "react";

const StatePage = ({ params }: { params: { stateId: string } }) => {
  const { stateId } = params;
  const { data, error, isLoading } = useFederalUnity({ state: stateId });

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
        {data?.map((municipality) => (
          <li key={municipality.codigo_ibge}>
            {municipality.nome} (IBGE Code: {municipality.codigo_ibge})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatePage;
