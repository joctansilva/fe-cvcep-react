import { useState } from "react";
import { useFindCepInformation } from "@/app/(features)/buscar/cep/requests/findCepInformation";

export const useCepInformation = () => {
  const [cep, setCep] = useState("");
  const [submittedCep, setSubmittedCep] = useState("");

  const { data, error, isLoading } = useFindCepInformation({
    cep: submittedCep,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedCep(cep);
  };

  const isCepValid = cep.length === 8;

  return {
    cep,
    setCep,
    handleSubmit,
    data,
    error,
    isLoading,
    isCepValid,
  };
};
