import Image from "next/image";
import CvcepLogo from "/public/cvcep-brand.svg";
import * as S from "@/app/components/Header/MainHeader.styled";

export default function MainHeader() {
  return (
    <S.HeaderRoot>
      <Image src={CvcepLogo} alt="Logo" width={250} height={100} />
    </S.HeaderRoot>
  );
}
