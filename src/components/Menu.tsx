import { FC } from "react";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.scss";

interface IMenuProps {
  menuItems: string[];
  active: string;
  onChange: (newFiter: string) => void;
}

const Menu: FC<IMenuProps> = ({ menuItems, active, onChange }) => {
  return (
    <nav className={classes.Menu}>
      {menuItems.map((title) => (
        <MenuItem
          key={title}
          title={title}
          onClick={() => onChange(title)}
          active={active === title}
        />
      ))}
    </nav>
  );
};

export default Menu;
