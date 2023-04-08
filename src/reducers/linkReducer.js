import { CHANGE_LINK } from "../actionTypes/actionTypes";

const navList = [
  { name: "home", target: "/", active: true },
  { name: "about", target: "/about", active: false },
  { name: "interest", target: "/interest", active: false },
  { name: "contact", target: "/contact", active: false },
  { name: "experience", target: "/experience", active: false },
];

export default function linkReducer(state = navList, action) {
  console.log(action, state);
  switch (action.type) {
    case CHANGE_LINK:
      let result = [];
      for (let i = 0; i < action.list.length; i++) {
        action.target === i
          ? result.push({ ...action.list[i], active: true })
          : action.list[i].active
          ? result.push({ ...action.list[i], active: false })
          : result.push({ ...action.list[i] });
      }
      return result;
    default:
      return state;
  }
}
