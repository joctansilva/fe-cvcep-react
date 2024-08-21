"use client";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const HomePageRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 700px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const FormInput = styled(TextField)`
  width: 350px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormButton = styled(Button)`
  width: 350px;
  background-color: #0a00b4;
  color: #fff;
  font-weight: 900;

  :hover {
    background-color: #120d7a;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
