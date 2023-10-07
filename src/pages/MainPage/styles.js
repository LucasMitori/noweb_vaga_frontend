import styled from "styled-components";
import mainBanner from "../../assets/img/mainBanner.jpg";
import categoryBanner from "../../assets/img/CategoryBanner.jpg";

/*------------------------- Skip line -------------------------*/

export const NavBarMenuBtn = styled.button`
  width: 70px;
  height: 50px;
  position: fixed;
  top: 10%;
  left: 100%;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1010;
  cursor: pointer;

  & > svg {
    transform: scale(1.5);
  }

  @media screen and (min-width: 370px) {
    width: 60px;
    left: 82%;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    & {
      display: none;
    }
  }
`;

/*------------------------- Skip line -------------------------*/

export const MainBanner = styled.main`
  width: 100%;
  height: 800px;
  background-color: var(--color-secondary);
  background-image: url(${mainBanner});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
`;

export const BannerTextSpace = styled.section`
  width: 90%;
  height: 80%;
  margin: 0 auto;

  & > h1 {
    font-family: var(--font-primary-montserrat);
    text-transform: uppercase;
    font-style: normal;
    font-weight: var(--font-weight-800);
    color: var(--color-white-mode);
    font-size: var(--font-subtitle-36);
    line-height: 80px;
  }

  & > p {
    margin-top: 20px;
    font-family: var(--font-primary-montserrat);
    color: var(--color-white-mode);
    font-weight: var(--font-weight-400);
    font-size: var(--font-subtitle-18);
    line-height: 40px;
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
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    margin-left: 20%;
    width: 31%;

    & > h1 {
      font-size: var(--font-grand-60);
    }
  }
`;

export const ButtonSpace = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 140px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BannerButton1 = styled.button`
  width: 100%;
  height: 60px;
  background-color: var(--color-primary);
  box-shadow: 0px 0px 20px 4px #fbaf17;
  color: var(--color-secondary);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-10);
  font-family: var(--font-primary-montserrat);
  font-style: normal;
  font-size: var(--font-subtitle-18);
  font-weight: var(--font-weight-700);
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    width: 360px;
  }
`;

export const BannerButton2 = styled.button`
  width: 100%;
  height: 60px;
  background-color: transparent;
  color: var(--color-white-mode);
  border: 1px solid var(--color-white-mode);
  border-radius: var(--radius-10);
  font-family: var(--font-primary-montserrat);
  font-style: normal;
  font-size: var(--font-subtitle-18);
  font-weight: var(--font-weight-700);
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    width: 360px;
  }
`;

export const AnchorSpace = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > a {
    text-decoration: none;
    color: var(--color-white-mode);
    padding-left: 20px;
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-text-16);
    font-style: normal;
    font-weight: var(--font-weight-400);
  }
`;

/*-------------------- Skip line --------------------*/

export const FeaturedProducts = styled.section`
  width: 100%;
  height: 660vh;
  margin-top: 50px;
  position: relative;
  z-index: -1;
  margin-bottom: 50px;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    height: 150vh;
  }
`;

export const FeatProductsImg = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  z-index: -1;

  & > img {
    transform: scale(0.35);
    background-position: center;
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
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 460px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    z-index: -1;

    & > img {
      transform: scale(1);
    }
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const ProductsShowcase = styled.div`
  width: 90%;
  height: 500vh;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
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
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    height: 105vh;
    width: 70%;
    position: absolute;
    top: 350px;
    left: 20%;
  }
`;

/*-------------------- Skip line --------------------*/

export const CategorySpace = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--color-bg);
  position: relative;
`;

export const CategoryBanner = styled.div`
  background-image: url(${categoryBanner});
  height: 456px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const CategoryListSpace = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  & > h1 {
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-subtitle-36);
    text-transform: uppercase;
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
  }

  & > ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    height: 80%;
    margin-top: 100px;
    overflow: auto;
  }

  & > ul > li {
    width: 263px;
    height: 300px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
  }

  & > ul > li > h2 {
    font-family: var(--font-primary-montserrat);
    color: var(--color-primary);
    text-transform: uppercase;
    font-weight: var(--font-weight-700);
    font-size: var(--font-subtitle-18);
  }

  & > ul > li > div {
    width: 100%;
    height: 258px;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
  }
`;

/*-------------------- Skip line --------------------*/

export const PubliSpace = styled.section`
  width: 100%;
  height: 780px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  & > h1 {
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-subtitle-36);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;
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
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    & > h1 {
      text-align: start;
    }
  }
`;

export const PInfoSpace = styled.div`
  width: 100%;
  height: 515px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 515px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const PImgSpace = styled.div`
  height: 100%;
  width: 50%;

  & > img {
    display: none;
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
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    height: 100%;
    width: 50%;

    & > img {
      display: flex;
    }
  }
`;

export const PInfo = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column nowrap;

  & > p {
    padding-left: 20px;
    width: 90%;
    height: 100%;
    line-height: var(--font-line-height-28);
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-text-16);
  }

  & > button {
    height: 60px;
    width: 90%;
    background-color: var(--color-tertiary);
    color: var(--color-white-mode);
    border: 1px solid var(--color-tertiary);
    border-radius: var(--radius-10);
    margin-left: 20px;
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-subtitle-18);
    text-transform: uppercase;
    font-weight: var(--font-weight-700);
    cursor: pointer;
  }

  & > button:hover {
    opacity: 0.9;
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
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    width: 50%;
    & > button {
      width: 360px;
    }

    & > p {
      padding-left: 20px;
      width: 60%;
      height: 60%;
      line-height: var(--font-line-height-28);
      font-family: var(--font-primary-montserrat);
      font-size: var(--font-subtitle-18);
    }
  }
`;

export const LikedButton = styled.button`
  width: 98px;
  height: 98px;
  border: 10px solid var(--color-primary);
  border-radius: 50%;
  position: absolute;
  top: 80%;
  left: 21%;
  cursor: pointer;
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
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    display: block;
  }
`;

export const ContactSpace = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;

  & > img {
    width: 100%;
  }

  & > button {
    position: absolute;
    top: 35%;
    left: 5%;
    width: 90%;
    height: 50px;
    background-color: var(--color-primary);
    color: var(--color-black-mode);
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-10);
    box-shadow: 0px 0px 20px 4px #fbaf17;
    cursor: pointer;
  }

  & > button:hover {
    opacity: 0.9;
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
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    margin-top: 50px;
    width: 100%;
    height: 460px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;

    & > button {
      position: absolute;
      top: 75%;
      left: 48%;
      width: 360px;
      height: 60px;
      background-color: var(--color-primary);
      color: var(--color-black-mode);
      font-family: var(--font-primary-montserrat);
      font-size: var(--font-subtitle-18);
      font-weight: var(--font-weight-700);
      text-transform: uppercase;
      border: 1px solid var(--color-primary);
      border-radius: var(--radius-10);
      box-shadow: 0px 0px 20px 4px #fbaf17;
      cursor: pointer;
    }
  }
`;
