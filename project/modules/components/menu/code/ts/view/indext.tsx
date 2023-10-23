import * as React from "react";
import { Item } from "./item";
import { IconButton } from "./icon-button";
import { IconRemove } from "./icon-remove";
import { CreateContext } from "./context";
import { menuItems } from "../items-menu";

export /* bundle */ function Menu(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSetOpen = () => setIsOpen(true);
  const toggleNotOpen = () => setIsOpen(false);

  const output = menuItems.map((item, index) => <Item key={index} item={item} />);
  const cls = isOpen ? "drop-dowm-open" : "drop-dowm";
  return (
    <CreateContext.Provider value={{ isOpen, toggleSetOpen, toggleNotOpen }}>
      <div className="menu-drop-down">
        <div className={cls}>
          <IconRemove />
          <ul className="ul-content">{output}</ul>
        </div>
        <IconButton />
      </div>
    </CreateContext.Provider>
  );
}
