import { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { FaGoogle, FaSun, FaMoon, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="absolute top-10 left-20 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green-400/20 rounded-full blur-2xl"></div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute md:top-10 top-3 md:right-20 right-5 p-2 rounded-full text-gray-800 dark:text-gray-300 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
      <Link to="/" className=' absolute top-5 left-5'>
      <img src="src/assets/images/LOGO.png" className='w-14 h-14 rounded-full p-1 bg-gray-800 md:hidden block' alt="" />
      </Link>

      <div className="flex flex-col justify-center items-center p-6 sm:p- z-10 mt-8">
        <div className="w-full max-w-md space-y-5">
          <div className="text-center mb-5">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
            </div>
          </div>

          <form className="space-y-5 ">
            <div className="form-control">
              <label htmlFor="username" className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
                <User className="absolute inset-y-0 left-0 pl-3 size-8 text-gray-500 text-base-content/40" />
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 py-2 rounded-md dark:bg-gray-800 outline-none"
                  placeholder="Josh"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  id="Firstname"
                />
                <input
                  type="text"
                  className="input input-bordered w-full pl-3 dark:bg-gray-800 outline-none py-2 rounded-md"
                  placeholder="Dickson"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  id="Lastname"
                />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="userName" className="label">
                <span className="label-text font-medium">Username</span>
              </label>
              <div className="relative">
                <User className="absolute inset-y-0 left-0 pl-3 size-8 text-gray-500 text-base-content/40" />
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 py-2 rounded-md dark:bg-gray-800 outline-none"
                  placeholder="josh22"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  id="userName"
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute inset-y-0 left-0 pl-3 size-8 text-gray-500 text-base-content/40" />
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 py-2 rounded-md dark:bg-gray-800 outline-none"
                  placeholder="joshdickon@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  id="email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <Lock className="absolute inset-y-0 left-0 pl-3 size-8 text-gray-500 text-base-content/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="input input-bordered w-full pl-10 py-2 rounded-md dark:bg-gray-800 outline-none"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    id="password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="size-5 text-base-content/40" /> : <Eye className="size-5 text-base-content/40" />}
                  </button>
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="confirmPassword" className="label">
                  <span className="label-text font-medium">Confirm Password</span>
                </label>
                <div className="relative">
                  <Lock className="absolute inset-y-0 left-0 pl-3 size-8 text-gray-500 text-base-content/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="input input-bordered w-full pl-10 py-2 rounded-md dark:bg-gray-800 outline-none"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    id="password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="size-5 text-base-content/40" /> : <Eye className="size-5 text-base-content/40" />}
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-max items-center gap-2 flex mt-52 py-2 px-5 rounded-md text-white">
              <span>Create Account</span> <FaArrowRight />
            </button>
          </form>
<hr />

          <div className="mt-6 flex justify-center space-x-4">
          <button 
  className="btn btn-outline btn-google flex items-center justify-center space-x-2 w-full mt-2 py-2 rounded-md text-white"
>
  <FaGoogle className="text-xl" />
  <span>Google</span>
</button>
          </div>

          <div className="text-center mt-4">
            <p className="text-base-content/60">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Link to="/" className='h-screen max-w-7xl md:block hidden igo'>
        <img src="src/assets/images/logoforsignup.png" alt="" />
      </Link>
    </div>
  );
};

export default Signup;
