function Cta() {
  const steps = [
    {
      img: "/src/assets/images/img1.png",
      title: "Sign Up",
      desc: "Create your account to get started.",
    },
    {
      img: "/src/assets/images/img2.png",
      title: "Choose a Course",
      desc: "Select from a variety of courses.",
    },
    {
      img: "/src/assets/images/img3.png",
      title: "Start Learning",
      desc: "Engage with interactive content.",
    },
    {
      img: "/src/assets/images/img4.png",
      title: "Get Certified",
      desc: "Complete courses and earn certificates.",
    },
  ];

  return (
    <div className="reveal dark:bg-gray-900 bg-white text-gray-800 dark:text-white transition-all duration-500 ease-in-out h-full pt-10">
      {/* How to Start Section */}
      <section className="flex flex-col items-center bg-gray-900 dark:bg-white py-16 px-4 relative mt-16">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-blue-500/20 -top-10 right-0 w-72 h-72 rounded-full blur-2xl"></div>

        {/* Section Title */}
        <h1 className="text-xl md:text-2xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-3 px-6 rounded-full font-bold mb-6">
          How to Start
        </h1>

        {/* Section Description */}
        <p className="text-gray-300 dark:text-gray-800 text-center max-w-2xl mb-10 leading-relaxed">
          Begin your journey with our easy steps. Learn, explore, and grow with
          the best courses designed for your success.
        </p>

        {/* Steps Section */}
        <div className="flex md:flex-nowrap flex-wrap justify-center gap-6 w-full max-w-6xl">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl shadow-lg p-5 w-full sm:w-1/2 lg:w-1/4 text-center flex flex-col items-center justify-center hover:scale-102 transition gap-1"
            >
              {/* Step Icon */}
              <img
                src={item.img}
                alt={item.title}
                className="relative z-10 w-16 object-contain"
              />

              {/* Step Title & Description */}
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-400 dark:text-gray-700 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Cta;
