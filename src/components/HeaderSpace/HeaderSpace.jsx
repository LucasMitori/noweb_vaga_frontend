import React, { useContext, useState, useEffect } from "react";
import { Header, Logo, LogoImgLeft, LogoSpace, NavBar } from "./styles";
import logoImg from "../../assets/img/logoImg.png";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../context/AuthContext";

const HeaderSpace = () => {
  const { categoryList, SpecialAlert } = useContext(AuthContext);
  const [showCategories, setShowCategories] = useState(false);
  const [isMouseOverCategory, setIsMouseOverCategory] = useState(false);

  const handleCategoriesHover = () => {
    setShowCategories(true);
  };

  useEffect(() => {
    if (showCategories && isMouseOverCategory) {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
  }, [isMouseOverCategory, showCategories]);

  return (
    <>
      <Header>
        <LogoSpace>
          <LogoImgLeft>
            <img src={logoImg} alt="Img Balls" />
          </LogoImgLeft>
          <Logo>
            <img src={logo} alt="Logo company" />
          </Logo>
        </LogoSpace>
        <NavBar>
          <div />
          <nav>
            <ul>
              <li>
                <a href="/" className="hover-underline-animation">
                  Home
                </a>
              </li>
              <li
                onMouseEnter={() => {
                  handleCategoriesHover();
                  setIsMouseOverCategory(true);
                }}
                onMouseLeave={() => setIsMouseOverCategory(false)}
              >
                <a href="/" className="hover-underline-animation">
                  Categorias ⌄
                </a>
                {showCategories && (
                  <div
                    className={`category-dropdown ${
                      isMouseOverCategory ? "show" : ""
                    }`}
                    onMouseEnter={() => setIsMouseOverCategory(true)}
                    onMouseLeave={() => setIsMouseOverCategory(false)}
                  >
                    <ul>
                      {categoryList.map((category, index) => (
                        <li key={index}>
                          <a href="/">
                            <img src={category.img} alt={category.name} />
                          </a>
                          <h3> {category.name}</h3>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="/" className="hover-underline-animation">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/" className="hover-underline-animation">
                  Localização
                </a>
              </li>
              <button onClick={() => SpecialAlert()}>Contato</button>
            </ul>
          </nav>
        </NavBar>
      </Header>
    </>
  );
};

export default HeaderSpace;
