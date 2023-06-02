import React from "react";

const Menu: React.FC = () => (
  <ul>
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
