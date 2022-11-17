import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query Products {
    products {
      id
      name
      description
      price
      mainImg
      Category {
        name
      }
      UserId
    }
  }
`;
export const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($productDetailId: ID) {
    productDetail(id: $productDetailId) {
      name
      price
      description
      mainImg
      Category {
        name
      }
      user {
        username
        phoneNumber
      }
    }
  }
`;
