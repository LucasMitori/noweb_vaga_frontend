import styled from "styled-components";
import mainBanner from "../../assets/img/mainBanner.jpg";
import categoryBanner from "../../assets/img/CategoryBanner.jpg";

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
  width: 31%;
  height: 80%;
  margin-left: 20%;

  & > h1 {
    font-family: var(--font-primary-montserrat);
    text-transform: uppercase;
    font-style: normal;
    font-weight: var(--font-weight-800);
    color: var(--color-white-mode);
    font-size: var(--font-grand-60);
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
  width: 360px;
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
`;

export const BannerButton2 = styled.button`
  width: 360px;
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
  height: 150vh;
  margin-top: 50px;
  position: relative;
  z-index: -1;
`;

export const FeatProductsImg = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const ProductsShowcase = styled.div`
  width: 70%;
  height: 105vh;
  position: absolute;
  top: 350px;
  left: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
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
  }
`;

export const PInfoSpace = styled.div`
  width: 100%;
  height: 515px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PImgSpace = styled.div`
  height: 100%;
  width: 50%;
`;

export const PInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column nowrap;

  & > p {
    padding-left: 20px;
    width: 60%;
    height: 60%;
    line-height: var(--font-line-height-28);
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-subtitle-18);
  }

  & > button {
    height: 60px;
    width: 360px;
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
`;

export const ContactSpace = styled.section`
  margin-top: 50px;
  width: 100%;
  height: 460px;
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

  & > button:hover {
    opacity: 0.9;
  }
`;
