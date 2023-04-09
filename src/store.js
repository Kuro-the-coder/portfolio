import { createStore } from "redux";
import linkReducer from "./reducers/linkReducer";

const link = createStore(linkReducer);

export { link };
