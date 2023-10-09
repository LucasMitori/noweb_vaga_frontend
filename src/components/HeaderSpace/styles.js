import styled from "styled-components";
import dropdownImg from "../../assets/img/dropdown.png";

export const Header = styled.header`
  font-family: var(--font-primary-montserrat);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-navigation);
  z-index: 1001;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.7s ease-in-out;

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    transform: none;
    position: relative;
    background-color: var(--blur-effect-02);
    z-index: 1002;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--font-primary-montserrat);
    height: 80px;
    width: 100%;
    background-color: var(--color-bg);
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const LogoSpace = styled.div`
  width: 100%;
  height: 20%;
  background-color: var(--color-bg);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 100%;
    background-color: var(--color-bg);
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    width: 40%;
    height: 100%;
    background-color: var(--color-bg);
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LogoImgLeft = styled.div`
  width: 30%;
  height: 100%;
  display: none;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: flex;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  width: 20%;
  height: 100%;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    margin-left: 150px;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    margin-left: 150px;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;

  & > div {
    border: 1px solid var(--color-primary);
    border-radius: 50%;
    background-color: var(--color-primary);
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  & > nav {
    background-color: var(--color-primary);
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  & > nav > ul {
    width: 70%;
    height: 90%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 50px;
  }

  & > nav > ul > li {
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-subtitle-18);
    cursor: pointer;
    position: relative;
  }

  & > nav > ul > li > a {
    text-decoration: none;
    color: var(--color-black-mode);
  }

  /*effect-underline*/
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: var(--color-secondary);
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-white-mode);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  & > nav > ul > li:hover {
    font-weight: var(--font-weight-600);
    transform: scale(1);
  }

  & > nav > ul > button {
    width: 150px;
    height: 40px;
    background-color: var(--color-secondary);
    font-family: var(--font-primary-montserrat);
    color: var(--color-white-mode);
    font-weight: var(--font-weight-600);
    border: 1px solid var(--color-secondary);
    border-radius: var(--radius-8);
    cursor: pointer;
    font-size: var(--font-subtitle-18);
  }

  & > nav > ul > button:hover {
    background-color: var(--color-tertiary);
  }

  .category-dropdown {
    width: 360px;
    height: 810px;
    position: absolute;
    top: 20px;
    left: -50px;
    z-index: 1001;
    background-image: url(${dropdownImg});
    background-position: center;
    background-size: cover;
    opacity: 0;
    transition: opacity 2s ease;
  }

  .category-dropdown.show {
    opacity: 1;
  }

  .category-dropdown > ul {
    width: 90%;
    height: 730px;
    margin: 0 auto;
    background-color: var(--color-bg);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
  }

  .category-dropdown > ul > li {
    width: 100%;
    height: 70px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .category-dropdown > ul > li > a {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .category-dropdown > ul > li > h3 {
    font-family: var(--font-primary-montserrat);
    color: var(--color-black-mode);
    padding-left: 30px;
  }

  .category-dropdown > ul > li > a > img {
    width: 68px;
    height: 68px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-10);
  }

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;

    & > div {
      display: flex;
    }

    & > nav {
      background-color: var(--color-primary);
      width: 97%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
    }

    & > nav > ul {
      width: 70%;
      height: 60px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: center;
      margin-left: 50px;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    width: 60%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;

    & > div {
      display: flex;
    }

    & > nav {
      background-color: var(--color-primary);
      width: 97%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
    }

    & > nav > ul {
      width: 70%;
      height: 60px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: center;
      margin-left: 50px;
    }
  }
`;
