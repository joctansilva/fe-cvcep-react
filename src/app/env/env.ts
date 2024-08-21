import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SERVER_VARIABLE: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_CLIENT_VARIABLE: z.string().url(),
    NEXT_PUBLIC_FIND_BY_CEP_URL: z.string().url(),
    NEXT_PUBLIC_FIND_BY_STATE_URL: z.string().url(),
  },
  runtimeEnv: {
    SERVER_VARIABLE: process.env.SERVER_VARIABLE,
    NEXT_PUBLIC_CLIENT_VARIABLE: process.env.NEXT_PUBLIC_CLIENT_VARIABLE,
    NEXT_PUBLIC_FIND_BY_CEP_URL: process.env.NEXT_PUBLIC_FIND_BY_CEP_URL,
    NEXT_PUBLIC_FIND_BY_STATE_URL: process.env.NEXT_PUBLIC_FIND_BY_STATE_URL,
  },
});
