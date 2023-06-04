import React from "react";
import "../style/Style.css";

const Menu: React.FC = () => (
  <ul className={"Menu"}>
      <li>
          <a href={"/"}>Game</a>
      </li>
      <li>
          <a href={"/highscore"}>High score</a>
      </li>
      <li>
          <a href={"/info"}>Info </a>
      </li>
  </ul>
);
export default Menu;
