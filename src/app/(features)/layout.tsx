import MainFooter from "../components/Footer/MainFooter";
import MainHeader from "../components/Header/MainHeader";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MainHeader />
      <main style={{ flex: "1" }}>{children}</main>
      <MainFooter />
    </div>
  );
}
