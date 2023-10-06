import {
  BottomFooterInfo,
  Footer,
  FooterDivInfo,
  FooterDivisor,
  FooterImgSpace,
  FooterInfoLogo,
  FooterSpaceInformation,
  SocialMediaSpace,
  UpperFooterInfo,
} from "./styles";
import footerImg from "../../assets/img/footerImg.png";
import logoImg from "../../assets/logo/logo_white.png";
import { IconContext } from "react-icons";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import iconLogo from "../../assets/icons/icon_white.png";

const FooterSpace = () => {
  return (
    <>
      <Footer>
        <FooterSpaceInformation>
          <FooterDivInfo>
            <UpperFooterInfo>
              <FooterInfoLogo>
                <img src={logoImg} alt="Logo" />
                <h2>Venha na Elétrica J. Santos e garanta a melhor</h2>
                <h2>opção para sua casa!</h2>
              </FooterInfoLogo>
              <SocialMediaSpace>
                <h2>Nos siga nas redes</h2>
                <ul>
                  <li className="whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=5511977492121">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsWhatsapp />
                      </IconContext.Provider>
                    </a>
                  </li>

                  <li className="instagram">
                    <a href="https://www.instagram.com/lucasokumura/">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsInstagram />
                      </IconContext.Provider>
                    </a>
                  </li>

                  <li className="facebook">
                    <a href="https://www.facebook.com/LucasMitori">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsFacebook />
                      </IconContext.Provider>
                    </a>
                  </li>
                </ul>
              </SocialMediaSpace>
            </UpperFooterInfo>

            <FooterDivisor />

            <BottomFooterInfo>
              <h3>
                &copy; Copyright 2021 - Elétrica J. Santos - Todos os Direitos
                Reservados
              </h3>
              <h3>
                Desenvolvido por <img src={iconLogo} alt="icon" />
              </h3>
            </BottomFooterInfo>
          </FooterDivInfo>
        </FooterSpaceInformation>
        <FooterImgSpace>
          <img src={footerImg} alt="Footer Img" />
        </FooterImgSpace>
      </Footer>
    </>
  );
};

export default FooterSpace;
