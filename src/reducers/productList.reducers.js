import { productConstants } from "../actions/constants";

const initState = {
  productList: [],
  loading: false,
  error: null,
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.PRODUCT_GET_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.PRODUCT_GET_SUCCESS:
      state = {
        ...state,
        productList: action.payload.productList,
        loading: false,
      };
      break;
    case productConstants.PRODUCT_GET_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
