import { CHANGE_LINK, SEARCH } from "../actionTypes/actionTypes";

let location = window.location.href.split("/");
location = location[location.length - 1];
const navList = [
  { name: "home", target: "/portfolio", active: location === "" },
  { name: "about", target: "/portfolio/about", active: location === "about" },
  {
    name: "interest",
    target: "/portfolio/interest",
    active: location === "interest",
  },
  {
    name: "contact",
    target: "/portfolio/contact",
    active: location === "contact",
  },
  {
    name: "experience",
    target: "/portfolio/experience",
    active: location === "experience",
  },
];
let result = [];

export default function linkReducer(state = navList, action) {
  switch (action.type) {
    case CHANGE_LINK:
      result = [];
      for (let i = 0; i < action.list.length; i++) {
        action.target === i
          ? result.push({ ...action.list[i], active: true })
          : action.list[i].active
          ? result.push({ ...action.list[i], active: false })
          : result.push({ ...action.list[i] });
      }
      return result;
    case SEARCH:
      result = [];
      if (action.target === null) {
        return navList;
      }
      for (let i = 0; i < navList.length; i++) {
        if (
          navList[i].name.includes(action.target) ||
          navList[i].target.includes(action.target)
        ) {
          result.push(navList[i]);
        }
      }
      return result;
    default:
      return state;
  }
}
