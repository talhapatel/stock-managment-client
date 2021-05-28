import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import productReducers from "./product.reducers";
import productListReducers from "./productList.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  product: productReducers,
  productList: productListReducers,
});

export default rootReducer;
