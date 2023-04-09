import { CHANGE_LINK, SEARCH } from "../actionTypes/actionTypes";

const changeLink = (list, index) => {
  return {
    type: CHANGE_LINK,
    list: list,
    target: index,
  };
};

const search = (value) => {
  return {
    type: SEARCH,
    target: value,
  };
};

export { changeLink, search };
