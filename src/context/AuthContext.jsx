import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

/* Temporary Imports of Products Images */
import ProductImg01 from "../assets/img/products/Product_01.png";
import ProductImg02 from "../assets/img/products/Product_02.png";
import ProductImg03 from "../assets/img/products/Product_03.png";
import ProductImg04 from "../assets/img/products/Product_04.png";
import ProductImg05 from "../assets/img/products/Product_05.png";
import ProductImg06 from "../assets/img/products/Product_06.png";
import ProductImg07 from "../assets/img/products/Product_07.png";
import ProductImg08 from "../assets/img/products/Product_08.png";

/* Temporary Imports of Category Images */
import Category01 from "../assets/img/category/category_01.png";
import Category02 from "../assets/img/category/category_02.png";
import Category03 from "../assets/img/category/category_03.png";
import Category04 from "../assets/img/category/category_04.png";
import Category05 from "../assets/img/category/category_05.png";
import Category06 from "../assets/img/category/category_06.png";
import Category07 from "../assets/img/category/category_07.png";
import Category08 from "../assets/img/category/category_08.png";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate();

  /*-------------------- Skip line --------------------*/

  function SpecialAlert() {
    toast.success("Em desenvolvimento", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#3FE864",
        color: "black",
        fontFamily: "Montserrat",
      },
    });
    console.log("funcionou");
  }

  /*-------------------- Skip line --------------------*/

  const FeaturedProductsList = [
    {
      category: "Lustres",
      name: "Lustre suspenso rústico",
      price: "1500,00",
      parcel: 3,
      discountPrice: "1000,00",
      img: ProductImg01,
    },
    {
      category: "Lâmpadas",
      name: "Lâmpada",
      price: "60,00",
      parcel: 2,
      discountPrice: "45,00",
      img: ProductImg02,
    },
    {
      category: "Acessórios",
      name: "Lustre suspenso rústico",
      price: "25,00",
      discountPrice: "17,00",
      img: ProductImg03,
    },
    {
      category: "Ferramentas",
      name: "Kit de ferramentas",
      price: "100,00",
      parcel: 2,
      discountPrice: "80,00",
      img: ProductImg04,
    },
    {
      category: "Utensilios domésticos",
      name: "Garfos de mesa inox",
      price: "15,00",
      discountPrice: "8,00",
      img: ProductImg05,
    },
    {
      category: "Acessórios",
      name: "Lustre suspenso rústico",
      price: "120,00",
      parcel: 4,
      discountPrice: "100,00",
      img: ProductImg06,
    },
    {
      category: "Utensilios domêsticos",
      name: "Ventilador 2 em 1, mesa e parede",
      price: "50,00",
      discountPrice: "30,00",
      img: ProductImg07,
    },
    {
      category: "Acessórios",
      name: "Lustre suspenso rústico",
      price: "20,00",
      discountPrice: "10,00",
      img: ProductImg08,
    },
  ];

  const categoryList = [
    {
      name: "lâmpadas",
      img: Category01,
    },

    {
      name: "lustres",
      img: Category02,
    },

    {
      name: "luminárias",
      img: Category03,
    },

    {
      name: "decorações",
      img: Category04,
    },

    {
      name: "acessórios",
      img: Category05,
    },

    {
      name: "ferramentas",
      img: Category06,
    },

    {
      name: "utensílios domésticos",
      img: Category07,
    },

    {
      name: "cabos",
      img: Category08,
    },
  ];

  /*-------------------- Skip line --------------------*/

  const handleClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  /*-------------------- Skip line --------------------*/

  return (
    <>
      <AuthContext.Provider
        value={{
          show,
          setShow,
          navigate,
          SpecialAlert,
          FeaturedProductsList,
          categoryList,
          liked,
          setLiked,
          handleClick,
        }}
      >
        {children}
      </AuthContext.Provider>
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
};

export default AuthProvider;
