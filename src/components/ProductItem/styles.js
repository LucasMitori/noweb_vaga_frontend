import styled from "styled-components";

export const ProductCard = styled.div`
  width: 270px;
  height: 450px;
  background-color: var(--color-white-mode);
  border: 1px solid #dee2e6;
  border-radius: 18px;
  box-shadow: 0px 0px 5px 2px #dee2e6;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

export const ImageProduct = styled.div`
  width: 100%;
  height: 216px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const Divisor = styled.div`
  width: 80%;
  height: 20px;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  position: absolute;
  top: 46%;
  margin: 0 auto;
  border-radius: var(--radius-10);
`;

export const ProductInfo = styled.section`
  width: 100%;
  height: 234px;
  border-radius: 0px 0px 10px 10px;
  margin-top: ${({ hasParcel }) => (hasParcel ? "40px" : "0px")};
  margin-bottom: ${({ hasParcel }) => (hasParcel ? "0px" : "40px")};
  display: flex;
  flex-flow: column nowrap;
  justify-content: ${({ hasParcel }) =>
    hasParcel ? "space-between" : "space-evenly"};
  align-items: center;

  & > h1 {
    font-family: var(--font-primary-montserrat);
    font-size: var(--font-subtitle-22);
    font-weight: var(--font-weight-700);
    text-align: center;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PriceSpace = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-family: var(--font-primary-montserrat);
    font-style: normal;
    text-decoration: line-through;
  }

  & > span {
    width: 50%;
    height: 100%;
    background-color: var(--color-primary);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-family: var(--font-primary-montserrat);
    border: 1px solid var(--color-primary);
    border-radius: 10px 0px 0px 10px;
  }
`;

export const ParcelPrice = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #f7f7f7;
  border-radius: 10px 10px 0px 0px;
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-primary-montserrat);
  font-size: var(--font-text-14);
`;

export const CategoryName = styled.div`
  width: auto;
  height: 25px;
  position: absolute;
  top: 20px;
  left: 0;
  background-color: #e0e0e0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-primary-montserrat);
  font-size: var(--font-text-14);
  border-radius: 0px 8px 8px 0px;
`;
