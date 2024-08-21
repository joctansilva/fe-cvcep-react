"use server";

import { env } from "@/app/env/env";

export const stateServiceFetch = async <TData = any>(
  path: string,
  init: RequestInit = {}
) => {
  const baseUrl = env.NEXT_PUBLIC_FIND_BY_STATE_URL;

  const url = new URL(`${path}`, baseUrl);

  const defaultInit: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    ...init,
  };

  try {
    const res = await fetch(url.toString(), defaultInit);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    return res.json() as Promise<TData>;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
