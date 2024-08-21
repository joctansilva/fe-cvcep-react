import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TanstackQueryProvider } from "./providers/TanstackQueryProvider";
import globalStyles from "@/styles/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Técnico da CVC",
  description: "CVCep, sua busca de cep pela CVC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackQueryProvider>
          {globalStyles}
          {children}
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
