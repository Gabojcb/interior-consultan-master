import * as React from "react";
import { Menu } from "project/menu";
import { MenuDesktop } from "./menu-desktop";

export /* bundle */ function Navigation() {
  const widthVW = window.innerWidth;
  const [width, setWidth] = React.useState<number>(widthVW)
  
  React.useEffect(()=> {
    const handleResize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, [])

  let maxWidth = 575;

  const Control = width > maxWidth ? MenuDesktop  : Menu;
  return (
    <nav className="container__nav">
      <button className="nav__button">THIS INTERIOR</button>
      <Control />
    </nav>
  );
}
