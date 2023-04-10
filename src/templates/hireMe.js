import React from "react";
import { RiContactsFill } from "react-icons/ri";

export default function HireMe() {
  // React.useEffect(() => {
  //   let bubble = document.getElementById("hire-me");
  //   console.log(bubble.children);
  //   bubble.addEventListener("mouseenter", () => {
  //     bubble.children[0].style.opacity = 1;
  //   });
  // }, []);
  return (
    <div className="hire-me-container">
      <div className="hire-me" id="hire-me">
        <p>Hire Me</p>
        <RiContactsFill />
      </div>
    </div>
  );
}
