import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 350px;
  background-color: var(--color-secondary);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const FooterSpaceInformation = styled.section`
  width: 80%;
  height: 100%;
`;

export const FooterImgSpace = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: end;
`;

export const FooterDivInfo = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 25%;
`;

export const UpperFooterInfo = styled.div`
  width: 100%;
  height: 68%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoLogo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  & > img {
    margin-bottom: 20px;
  }

  & > h2 {
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-text-16);
    line-height: var(--font-line-height-32);
    color: var(--color-white-mode);
  }
`;

export const SocialMediaSpace = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  & > h2 {
    color: var(--color-white-mode);
    margin-top: 50px;
    text-transform: uppercase;
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-text-16);
  }

  & > ul {
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    height: 80px;
  }
`;

export const BottomFooterInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-text-14);
    color: var(--color-white-mode);
  }
`;

export const FooterDivisor = styled.div`
  width: 100%;
  border: 1px solid var(--color-primary);
`;
