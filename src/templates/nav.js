import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLink } from "../actions/action";
import { Link } from "react-router-dom";

export default function Nav() {
  const navList = useSelector((state) => state);
  const dispatch = useDispatch();

  function menuToggle() {
    let menu = document.getElementById("menu");
    let toggler = document.getElementById("menu-toggler");
    menu.classList.toggle("active");
    toggler.classList.toggle("active");
  }

  React.useEffect(() => {
    let navbar = document.getElementById("nav-bar");
    window.addEventListener("scroll", () => {
      window.pageYOffset !== 0
        ? navbar.classList.add("bg-nav")
        : navbar.classList.remove("bg-nav");
    });
  }, []);

  return (
    <nav className="navigation-bar" id="nav-bar">
      <div className="brand" id="brand"></div>
      <div className="menu-toggler" id="menu-toggler" onClick={menuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu" id="menu">
        <ul>
          {navList.map((nav, index) => (
            <Link
              to={nav.target}
              key={index}
              onClick={() => {
                dispatch(changeLink(navList, index));
                window.innerWidth < 900 && !nav.active && menuToggle();
              }}
            >
              <li className={nav.active ? "active-link" : ""}>{nav.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
