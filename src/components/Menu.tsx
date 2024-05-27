import { FC, useCallback } from "react";

import MenuItem from "./MenuItem";
import classes from "./Menu.module.scss";

interface IMenuProps {
  menuItems: string[];
  active: string;
  onChange: (newFiter: string) => void;
}

const Menu: FC<IMenuProps> = ({ menuItems, active, onChange }) => {
  const onMenuItemClick = useCallback(
    (title: string) => {
      onChange(title);
    },
    [onChange]
  );

  return (
    <nav className={classes.Menu}>
      {menuItems.map((title) => (
        <MenuItem
          key={title}
          title={title}
          onClick={onMenuItemClick}
          active={active === title}
        />
      ))}
    </nav>
  );
};

export default Menu;
