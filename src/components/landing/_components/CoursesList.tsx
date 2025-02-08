import CourseBox from "./CourseBox";
import ListContainer from "../../ui/ListContainer";

export const tempCourseData = [
  {
    id: 1675818,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    ratings: 1200,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.67,
  },
  {
    id: 1727618,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    ratings: 1200,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.67,
  },
  {
    id: 2772781,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    ratings: 100,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.67,
  },
  {
    id: 2930783,
    title: "Beginner’s Guide to Design",
    instructor: "Ronald Richards",
    ratings: 1200,
    duration: "22 Total Hours",
    lectures: 155,
    level: "Beginner",
    price: 149.67,
  },
];

function Courses() {
  return (
    <ListContainer
      header="Top courses"
      path="/courses"
      render={tempCourseData.map((course) => (
        <CourseBox key={course.id} course={course} />
      ))}
    />
  );
}

export default Courses;
