import { useEffect, useState } from "react";

import "./styles/index.scss";
import CourseList from "./components/CourseList";
import Menu from "./components/Menu";
import Error from "./components/Error";
import Loader from "./components/Loader";
import { courseService } from "./services/courses";
import { ICourse } from "./types";

const getUniqueTags = (courses: ICourse[]) => {
  return Array.from(new Set(courses.map(({ tags }) => tags).flat()));
};

const DEFAULT_TAGS = ["Все"];

const App = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [filter, setFilter] = useState(DEFAULT_TAGS[0]);

  useEffect(() => {
    courseService
      .getAll()
      .then((res) => {
        setLoading(false);
        const courses = res.data;
        setCourses(courses);
        setTags([...DEFAULT_TAGS, ...getUniqueTags(courses)]);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="app">
      <Menu menuItems={tags} active={filter} onChange={setFilter} />
      <CourseList
        courses={
          filter === tags[0]
            ? courses
            : courses.filter(({ tags }) => tags.includes(filter))
        }
      />
    </div>
  );
};

export default App;
