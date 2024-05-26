import { axiosBasic } from "./interceptors";
import { ICourse } from "../types";

class CourseService {
  private BASE_URL = "/courses.json";

  async getAll() {
    const response = await axiosBasic.get<ICourse[]>(this.BASE_URL);
    return response;
  }
}
export const courseService = new CourseService();
