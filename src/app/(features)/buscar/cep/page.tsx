"use client";

import React, { useState } from "react";
import { useCep } from "./requests/getByCep";
import Link from "next/link";

export default function SearchByCep() {
  const [cep, setCep] = useState("");
  const [submittedCep, setSubmittedCep] = useState("");

  const { data, error, isLoading } = useCep({ cep: submittedCep });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedCep(cep);
  };

  return (
    <div style={{ height: "100%", width: "100vw" }}>
      <h1>Search by CEP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          CEP:
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="Enter CEP"
            maxLength={8}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>CEP Data:</h2>
          <p>
            <strong>CEP:</strong> {data.cep}
          </p>
          <p>
            <Link href={`/buscar/estado/${data.state}`}>
              <strong>State:</strong> {data.state}
            </Link>
          </p>
          <p>
            <strong>City:</strong> {data.city}
          </p>
          <p>
            <strong>Neighborhood:</strong> {data.neighborhood}
          </p>
          <p>
            <strong>Street:</strong> {data.street}
          </p>
          <p>
            <strong>Service:</strong> {data.service}
          </p>
        </div>
      )}
    </div>
  );
}
