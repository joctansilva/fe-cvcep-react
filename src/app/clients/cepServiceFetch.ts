"use server";

import { env } from "@/app/env/env";

export const cepServiceFetch = async <TData = any>(
  path: string,
  init: RequestInit
) => {
  const baseUrl = env.NEXT_PUBLIC_FIND_BY_CEP_URL;

  const defaultInit: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    ...init,
  };

  const res = await fetch(`${baseUrl}/${path}`, defaultInit);

  const data: unknown = await res.json();

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return data as TData;
};
