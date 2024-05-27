import { FC, memo } from "react";
import clsx from "clsx";
import classses from "./MenuItem.module.scss";

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
