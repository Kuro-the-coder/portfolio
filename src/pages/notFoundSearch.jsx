import React from "react";
import { Link } from "react-router-dom";
import { changeLink } from "../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../actions/action";

export default function NotFoundSearch({ links, dispatchLink }) {
  const [searchValue, setSearchValue] = React.useState("");
  const searchResult = useSelector((state) => {
    console.log(state);
    return state;
  });
  console.log(searchResult);
  const dispatch = useDispatch();

  function searchLink(e) {
    setSearchValue(e.target.value.toLowerCase());
    console.log(dispatch(search(links, e.target.value.toLowerCase())));
  }

  return (
    <div className="search_404" id="404-search">
      <div className="inputbox">
        <input
          required="required"
          type="text"
          onChange={(e) => searchLink(e)}
        />
        <span>What are you looking for?</span>
        <i></i>
      </div>
      <div className="avaliable-links">
        {searchValue.length !== ""
          ? searchResult.map((link, index) => (
              <Link
                to={link.target}
                key={index}
                onClick={() => {
                  dispatchLink(changeLink(links, index));
                }}
              >
                <code>{link.name}</code>
              </Link>
            ))
          : links.map((link, index) => (
              <Link
                to={link.target}
                key={index}
                onClick={() => {
                  dispatchLink(changeLink(links, index));
                }}
              >
                <code>{link.name}</code>
              </Link>
            ))}
      </div>
    </div>
  );
}
