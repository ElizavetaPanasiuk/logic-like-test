import { FC } from "react";
import classses from "./MenuItem.module.scss";
import clsx from "clsx";

interface IMenuItemProps {
  title: string;
  active: boolean;
  onClick: () => void;
}
const MenuItem: FC<IMenuItemProps> = ({ title, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(classses.menuItem, { [classses.active]: active })}
    >
      {title}
    </button>
  );
};

export default MenuItem;
