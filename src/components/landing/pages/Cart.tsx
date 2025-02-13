import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const tempCourseData = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    ratings: 4.5,
    stars: 4,
    duration: "10h",
    lectures: 25,
    level: "Beginner",
    img: "https://via.placeholder.com/150",
    price: 49.99,
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    instructor: "Jane Smith",
    ratings: 4.7,
    stars: 5,
    duration: "12h",
    lectures: 30,
    level: "Advanced",
    img: "https://via.placeholder.com/150",
    price: 59.99,
  },
];

const totalPrice = tempCourseData.reduce((acc, item) => acc + item.price, 0);
const discount = totalPrice * 0.1;
const tax = totalPrice * 0.05;
const finalTotal = totalPrice - discount + tax;

function Cart() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-12">
      <header className="flex gap-2 md:gap-10 flex-col md:flex-row mb-5">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-500">Shopping Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="text-gray-500 dark:text-gray-400 border-b dark:border-gray-700 py-1">
        {tempCourseData.length} {tempCourseData.length === 1 ? "Course" : "Courses"} in Cart
      </div>

      {/* Course List */}
      <article className="space-y-6 mt-4">
        {tempCourseData.map((course) => (
          <div
            key={course.id}
            className="flex flex-col md:flex-row gap-2 md:gap-4 border p-4 rounded-md dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Course Image */}
            <div className="w-full md:w-44 md:h-24 overflow-hidden rounded-md">
              <img src={course.img} alt={course.title} className="object-cover w-full h-full" />
            </div>

            {/* Course Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h2>
              <p className="my-1 text-sm text-gray-500 dark:text-gray-400">By {course.instructor}</p>

              <div className="flex flex-col md:flex-row md:items-center md:h-[3vh] md:space-x-3">
                <Separator orientation="vertical" className="hidden md:block dark:bg-gray-600" />
                <p className="text-xs text-gray-600 dark:text-gray-400 space-x-2 mt-1 md:mt-0">
                  <span>{course.duration}</span>
                  <span>{course.lectures} Lectures</span>
                  <span>{course.level}</span>
                </p>
              </div>

              <div className="flex mt-2 text-sm space-x-3 h-[3vh]">
                <span className="text-blue-500 dark:text-blue-400">Save for later</span>
                <Separator orientation="vertical" />
                <span className="text-red-500 dark:text-red-400">Remove</span>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-700 dark:text-white">${course.price}</h1>
            </div>
          </div>
        ))}
      </article>

      {/* Order Summary */}
      <aside className="col-span-1 w-full lg:w-[20rem] mt-14 border rounded-lg p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 h-fit md:ml-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Order Details</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Price</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Discount</span>
            <span className="text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator className="my-2 dark:bg-gray-600" />
          <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>
        <Button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition duration-200">
          Proceed to Checkout
        </Button>
      </aside>
    </section>
  );
}

export default Cart;
