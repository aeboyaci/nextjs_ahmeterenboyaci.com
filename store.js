import { legacy_createStore as createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "setPage") {
    return { ...state, page: action.payload.page, isScroll: action.payload.isScroll };
  }

  return { ...state };
};

const store = createStore(reducer);

export default store;