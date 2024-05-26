import { FC } from "react";
import { ICourse } from "../types";
import CourseCard from "./CourseCard";
import classes from "./CourseList.module.scss";

interface ICoursesListProps {
  courses: ICourse[];
}

const CoursesList: FC<ICoursesListProps> = ({ courses }) => {
  return (
    <div className={classes.СourseList}>
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CoursesList;
