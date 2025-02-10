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
import { cn } from "@/lib/utils";

interface CourseType {
  course: {
    id: number;
    title: string;
    instructor: string;
    ratings: number;
    stars: number;
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
        <DisplayRating rating={course.ratings} stars={course.stars} />
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

export function DisplayRating({
  maxRating = 5,
  rating,
  stars,
}: {
  rating: number;
  maxRating?: number;
  stars: number;
}) {
  return (
    <aside className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} full={i + 1 <= stars} />
        ))}
      </div>
      <span className="text-[12px] dark:text-gray-400 text-gray-600 font-semibold">
        ({rating} Ratings)
      </span>
    </aside>
  );
}

export function Star({ full, className }: { full: boolean; className?: string }) {
  return full ? (
    <StarIcon
      className={cn(
        "size-4 fill-[#FFC806] color-[#FFC806] stroke-none",
        className
      )}
    />
  ) : (
    <StarIcon className={cn("size-4 fill-[#b1b1b1] stroke-none", className)} />
  );
}

export default CourseBox;
