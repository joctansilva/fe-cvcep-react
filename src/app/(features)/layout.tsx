import MainFooter from "../components/Footer/MainFooter";
import MainHeader from "../components/Header/MainHeader";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
