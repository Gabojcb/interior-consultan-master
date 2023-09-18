import * as React from "react";
import { Menu } from "project/menu";

export /* bundle */ function Navigation() {
  const menuItems = ["Menu", "Collection", "About", "Contact"];
  return (
    <nav className="container__nav">
      <button className="nav__button">THIS INTERIOR</button>
      <Menu items={menuItems} />
    </nav>
  );
}
