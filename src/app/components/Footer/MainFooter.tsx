import * as S from "@/app/components/Footer/MainFooter.styled";

export default function MainFooter() {
  return (
    <S.FooterRoot>
      <p>Desenvolvido Por:</p>

      <S.FooterLink href="https://github.com/joctansilva/fe-cvcep-react">
        Joctan Neves da Silva
      </S.FooterLink>
    </S.FooterRoot>
  );
}
