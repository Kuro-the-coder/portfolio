import { createStore } from "redux";
import linkReducer from "./reducers/linkReducer";
// import cartReducer from "./reducers/cartReducer";
// const store = createStore(cartReducer);

const link = createStore(linkReducer);

export default link;
