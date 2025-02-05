import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InstructorType {
  instructor: {
    name: string;
    category: string;
    reviews: number;
    image: string;
    students: number;
  };
}

function InstructorBox({ instructor }: InstructorType) {
  return (
    <Card>
      <CardHeader>
        <img src={instructor.image} alt="" />
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default InstructorBox;
