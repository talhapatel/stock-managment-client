import { productConstants } from "./constants";
import axios from "../helpers/axios";

export const addProduct = (product) => {
  console.log(product);
  return async (dispatch) => {
    dispatch({ type: productConstants.PRODUCT_ADD_REQUEST });
    const res = await axios.post(`/product`, {
      ...product,
    });

    if (res.status === "SUCCESS") {
      const { product } = res.data;

      dispatch({
        type: productConstants.PRODUCT_ADD_SUCCESS,
        payload: {
          product,
        },
      });
    } else {
      if (res.status === "FAILURE") {
        dispatch({
          type: productConstants.PRODUCT_ADD_FAILURE,
          payload: { error: res.messages[0].message },
        });
      }
    }
  };
};

export const getProductList = () => {
  return async (dispatch) => {
    dispatch({ type: productConstants.PRODUCT_GET_REQUEST });
    const res = await axios.get(`/product`);

    if (res.status === "SUCCESS") {
      const productList = [...res.data.productList];

      dispatch({
        type: productConstants.PRODUCT_GET_SUCCESS,
        payload: {
          productList: productList,
        },
      });
    } else {
      if (res.status === "FAILURE") {
        dispatch({
          type: productConstants.PRODUCT_GET_FAILURE,
          payload: { error: res.messages[0].message },
        });
      }
    }
  };
};
