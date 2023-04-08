import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLink } from "../actions/linkAction";
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
      window.pageYOffset >= navbar.offsetTop
        ? navbar.classList.add("sticky")
        : navbar.classList.remove("sticky");
    });
  }, []);

  return (
    <div className="navigation-bar" id="nav-bar">
      <div className="brand" id="brand">
        Name
      </div>
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
              onClick={() => dispatch(changeLink(navList, index))}
            >
              <li className={nav.active ? "active-link" : ""}>{nav.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
