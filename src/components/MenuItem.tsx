import { FC, memo } from "react";
import classses from "./MenuItem.module.scss";
import clsx from "clsx";

interface IMenuItemProps {
  title: string;
  active: boolean;
  onClick: (title: string) => void;
}
const MenuItem: FC<IMenuItemProps> = memo(({ title, active, onClick }) => (
  <button
    onClick={() => onClick(title)}
    className={clsx(classses.menuItem, { [classses.active]: active })}
  >
    {title}
  </button>
));

export default MenuItem;
