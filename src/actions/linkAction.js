import { CHANGE_LINK } from "../actionTypes/actionTypes";

const changeLink = (list, index) => {
  return {
    type: CHANGE_LINK,
    list: list,
    target: index,
  };
};

export { changeLink };
