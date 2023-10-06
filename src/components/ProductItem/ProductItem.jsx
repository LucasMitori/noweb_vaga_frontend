import React from "react";
import {
  CategoryName,
  Divisor,
  ImageProduct,
  ParcelPrice,
  PriceSpace,
  ProductCard,
  ProductInfo,
} from "./styles";

const ProductItem = (item) => {
  const hasParcel = item.item.parcel !== undefined && item.item.parcel !== null;

  return (
    <>
      <ProductCard>
        <ImageProduct>
          <img src={item.item.img} alt={item.item.name} />
        </ImageProduct>
        <Divisor />
        <ProductInfo hasParcel={hasParcel}>
          <h1>{item.item.name}</h1>
          <PriceSpace>
            <h2>R$ {item.item.price}</h2>
            <span>R$ {item.item.discountPrice}</span>
          </PriceSpace>
          {item.item.parcel ? (
            <ParcelPrice>
              <p>
                ou em {item.item.parcel}x de R${" "}
                {(parseInt(item.item.discountPrice) / item.item.parcel).toFixed(
                  2
                )}
              </p>
            </ParcelPrice>
          ) : null}
        </ProductInfo>
        <CategoryName>{item.item.category}</CategoryName>
      </ProductCard>
    </>
  );
};

export default ProductItem;
