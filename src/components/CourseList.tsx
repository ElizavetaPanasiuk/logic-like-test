import { FC } from "react";

import CourseCard from "./CourseCard";
import classes from "./CourseList.module.scss";
import { ICourse } from "../types";

interface ICourseListProps {
  courses: ICourse[];
}

const CourseList: FC<ICourseListProps> = ({ courses }) => (
  <div className={classes.СourseList}>
    {courses.map((course) => (
      <CourseCard key={course.id} {...course} />
    ))}
  </div>
);

export default CourseList;
