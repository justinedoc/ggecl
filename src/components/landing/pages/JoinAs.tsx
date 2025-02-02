import teacherImg from "@/assets/images/Asset3.png";
import studentImg from "@/assets/images/Asset2.png";

function JoinAs() {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="flex flex-col md:flex-row items-center md:p-8 p-6">
          <div className="w-full md:w-2/5">
            <img src={teacherImg} alt="Join as a Teacher" className="w-full h-auto object-cover rounded-lg" />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left space-y-8 md:mt-0 mt-5 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-100">Join as a Teacher</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Share your knowledge and inspire thousands of students worldwide. Get access to tools and resources to enhance your teaching experience.
            </p>
            <button className="text-white px-10 mt-6 py-4 rounded-md btn transition text-2xl">Become a Teacher</button>
          </div>
        </div>




        

        <div className="flex flex-col md:flex-row-reverse items-center  md:p-8 p-4">
          <div className="w-full md:w-1/2">
            <img src={studentImg} alt="Join as a Student" className="w-full h-auto object-cover rounded-lg" />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left space-y-8 md:mt-0 mt-5 md:pr-10">
            <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-100">Join as a Student</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learn from industry experts, access world-class content, and develop skills that matter. Take control of your learning journey today!
            </p>
            <button className="text-white px-10 mt-6 py-4 rounded-md btn transition text-2xl">Start Learning</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default JoinAs;
