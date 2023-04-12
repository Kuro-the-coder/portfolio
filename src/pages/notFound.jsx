import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLink, search } from "../actions/action";

export default function NotFound() {
  const links = useSelector((state) => state);
  const dispatch = useDispatch();

  function searchUpdate(e) {
    dispatch(search(e.target.value.toLowerCase() || null));
  }

  return (
    <div className="not-found" id="not-found">
      <div className="inner">
        <div className="info" id="info">
          <h2>404</h2>
          <p>Page not found.</p>
          <Link to="/portfolio">
            Go to <code>home</code> page.
          </Link>
        </div>
        <div className="vertical-line" id="vertical-line" />
        <div className="search_404" id="404-search">
          <div className="inputbox">
            <input
              required="required"
              type="text"
              onChange={(e) => searchUpdate(e)}
            />
            <span>What are you looking for?</span>
            <i></i>
          </div>
          <div className="avaliable-links">
            {links.map((link, index) => (
              <Link
                to={link.target}
                key={index}
                onClick={() => {
                  dispatch(changeLink(links, index));
                  dispatch(search(null));
                }}
              >
                <code>{link.name}</code>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
