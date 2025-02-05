import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import tempCourseImg from "../../../assets/images/temp-course-img.png";
import { StarIcon } from "lucide-react";

interface CourseType {
  course: {
    id: number;
    title: string;
    instructor: string;
    ratings: number;
    duration: string;
    lectures: number;
    level: string;
    price: number;
  };
}

function CourseBox({ course }: CourseType) {
  return (
    <Card className="md:max-w-[15rem] xl:max-w-[17rem] py-2">
      <CardHeader className="py-1 px-3 space-y-0">
        <div className="mb-2">
          <img src={tempCourseImg} alt="course" />
        </div>
        <CardTitle className="text-xl md:text-lg md:font-semibold font-medium tracking-normal">
          {course.title}
        </CardTitle>
        <CardDescription>By {course.instructor}</CardDescription>
      </CardHeader>
      <CardContent className="py-0 px-3">
        <DisplayRating rating={course.ratings} />
        <p className="text-[13px] dark:text-gray-400 text-gray-600 space-x-1">
          <span>{course.duration}.</span>
          <span>{course.lectures} Lectures.</span>
          <span>{course.level}.</span>
        </p>
      </CardContent>
      <CardFooter className="py-2 px-3">
        <h1 className="text-lg font-semibold">${course.price}</h1>
      </CardFooter>
    </Card>
  );
}

function DisplayRating({
  maxRating = 5,
  rating,
}: {
  rating: number;
  maxRating?: number;
}) {
  return (
    <aside className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} full={rating >= i + 1} />
        ))}
      </div>
      <span className="text-[12px] dark:text-gray-400 text-gray-600 font-semibold">
        ({rating} Ratings)
      </span>
    </aside>
  );
}

function Star({ full }: { full: boolean }) {
  return full ? (
    <StarIcon className="size-4 fill-[#FFC806] color-[#FFC806] stroke-none" />
  ) : (
    <StarIcon
      className="text-gray-300 size-4"
      color="#fff0"
      style={{ stroke: "#ffc90671", strokeWidth: 1 }}
    />
  );
}

export default CourseBox;
