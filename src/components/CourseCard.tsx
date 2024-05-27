import { FC, memo } from "react";
import { ICourse } from "../types";

import classes from "./CourseCard.module.scss";

const CourseCard: FC<ICourse> = memo(({ name, image, bgColor }) => (
  <div className={classes.CourseCard}>
    <div
      className={classes.ImageContainer}
      style={{ backgroundColor: bgColor }}
    >
      <img className={classes.Image} src={image} alt={name} />
    </div>
    <p className={classes.Title}>{name}</p>
  </div>
));

export default CourseCard;
