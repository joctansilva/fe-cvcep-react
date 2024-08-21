import React from "react";
import * as S from "./components/CepPage/CepPage.styled";
import { CepPage } from "./components/CepPage/CepPage";

export default function SearchByCep() {
  return (
    <S.HomePageRoot>
      <CepPage />
    </S.HomePageRoot>
  );
}
