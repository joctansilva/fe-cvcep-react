"use client";

import { useCepInformation } from "@/app/(features)/buscar/cep/hooks/useCep";

import * as S from "@/app/(features)/buscar/cep/components/CepPage/CepPage.styled";
import { CepResultsTable } from "@/app/(features)/buscar/cep/components/CepResult/CepResult";
import { maskCep } from "@/app/utils/maskCep";

export const CepPage = () => {
  const { cep, setCep, handleSubmit, data, isLoading, isCepValid } =
    useCepInformation();

  return (
    <S.FormRoot>
      <S.FormTitle>Digite o CEP que deseja consultar</S.FormTitle>
      <S.Form onSubmit={handleSubmit}>
        <label>
          <S.FormInput
            required
            id="outlined-required"
            label="CEP"
            placeholder="Digite o CEP"
            value={maskCep(cep)}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
            size="small"
            inputProps={{ maxLength: 9 }}
          />
        </label>
        <S.FormButton disabled={!isCepValid} type="submit" variant="contained">
          {isLoading ? "Consultando..." : "Consultar"}
        </S.FormButton>
      </S.Form>
      {data && <CepResultsTable data={data} />}
    </S.FormRoot>
  );
};
