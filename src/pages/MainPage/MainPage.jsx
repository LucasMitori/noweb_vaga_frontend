import AnchorLink from "react-anchor-link-smooth-scroll";
import HeaderSpace from "../../components/HeaderSpace/HeaderSpace";
import {
  AnchorSpace,
  BannerButton1,
  BannerButton2,
  BannerTextSpace,
  ButtonSpace,
  CategoryBanner,
  CategoryListSpace,
  CategorySpace,
  ContactSpace,
  FeatProductsImg,
  FeaturedProducts,
  LikedButton,
  MainBanner,
  PImgSpace,
  PInfo,
  PInfoSpace,
  ProductsShowcase,
  PubliSpace,
} from "./styles";
import { IconContext } from "react-icons";
import { AiOutlineArrowDown, AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import featProductImg from "../../assets/img/FeaturedProducts.png";
import ProductItem from "../../components/ProductItem/ProductItem";
import PubImage from "../../assets/img/publiBanner.png";
import ContactImage from "../../assets/img/contactBanner.png";
import FooterSpace from "../../components/Footer/FooterSpace";

const MainPage = () => {
  const {
    SpecialAlert,
    FeaturedProductsList,
    categoryList,
    handleClick,
    liked,
  } = useContext(AuthContext);

  return (
    <>
      <HeaderSpace />
      <MainBanner>
        <BannerTextSpace>
          <h1>Ilumine o seu dia a dia!</h1>
          <p>
            Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a
            dia! Temos produtos para toda sua casa com a melhor qualidade e
            atendimento da região!
          </p>
          <ButtonSpace>
            <BannerButton1 onClick={() => SpecialAlert()}>
              Veja nossos produtos
            </BannerButton1>
            <BannerButton2 onClick={() => SpecialAlert()}>
              Nos conheça Melhor
            </BannerButton2>
          </ButtonSpace>

          <AnchorSpace>
            <IconContext.Provider
              value={{
                color: "var(--color-white-mode)",
                size: "1.5em",
              }}
            >
              <AiOutlineArrowDown />
            </IconContext.Provider>
            <AnchorLink href="#section-products">Role para ver mais</AnchorLink>
          </AnchorSpace>
        </BannerTextSpace>
      </MainBanner>

      <FeaturedProducts id="section-products">
        <FeatProductsImg>
          <img src={featProductImg} alt="Featured Products" />
        </FeatProductsImg>

        <ProductsShowcase>
          {FeaturedProductsList.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </ProductsShowcase>
      </FeaturedProducts>

      <CategorySpace>
        <CategoryBanner />
        <CategoryListSpace>
          <h1>Categorias</h1>
          <ul>
            {categoryList.map((item, index) => (
              <li key={index}>
                <h2>{item.name}</h2>
                <div>
                  <img src={item.img} alt={item.name} />
                </div>
              </li>
            ))}
          </ul>
        </CategoryListSpace>
      </CategorySpace>

      <PubliSpace>
        <h1>Sua melhor opção</h1>
        <PInfoSpace>
          <PImgSpace>
            <img src={PubImage} alt="Publicity Post Img" />
            <LikedButton onClick={handleClick}>
              <IconContext.Provider
                value={{
                  color: liked ? "red" : "#828282",
                  size: "3em",
                }}
              >
                <AiFillLike />
              </IconContext.Provider>
            </LikedButton>
          </PImgSpace>
          <PInfo>
            <p>
              Desde 1970 somos especializados em materiais elétricos, sendo uma
              das principais distribuidoras do setor. Oferecemos os melhores
              produtos, com o preço que cabe no seu bolso e atende todas as
              necessidades do seu dia a dia. Aqui você irá encontrar lustres,
              luminárias, utilidades domésticas, ferramentas, acessórios,
              lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada
              padrão Eletropaulo, materiais elétricos em geral, equipamentos de
              segurança e comunicação.
            </p>
            <button>Saiba mais sobre nós</button>
          </PInfo>
        </PInfoSpace>
      </PubliSpace>

      <ContactSpace>
        <img src={ContactImage} alt="Contact Space" />
        <button>Acione Nosso televendas</button>
      </ContactSpace>

      <FooterSpace />
    </>
  );
};

export default MainPage;
