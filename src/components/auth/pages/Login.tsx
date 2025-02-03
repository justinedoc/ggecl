import { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaSun, FaMoon } from 'react-icons/fa';

const Login = () => {
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
    <div className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden dark:bg-gray-900">
      <div className="absolute top-10 left-20 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green-400/20 rounded-full blur-2xl"></div>

       {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="absolute md:top-10 top-3 md:right-20 right-5 p-2 rounded-full text-gray-800 dark:text-gray-300 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            {/* GGECL LOGO for small screen only */}
            <Link to="/" className=' absolute top-5 left-5'>
      <img src="src/assets/images/LOGO.png" className='w-14 h-14 rounded-full p-1 bg-gray-800 md:hidden block' alt="" />
      </Link>
      <div className="flex flex-col justify-center items-center p-6 sm:p- z-10 mt-8">
        <div className="w-full max-w-md space-y-5">
          <div className="text-center mb-5">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Login</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <form className="space-y-5">

            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10 py-2 rounded-md dark:bg-gray-100`}
                  placeholder="joshdickon@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  id="email"
                />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`input input-bordered w-full  py-2 rounded-md pl-10`}
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
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4 py-2 rounded-md text-white">
              Login
            </button>
          </form>

          <div className="mt-6 flex justify-center space-x-4 w-full">
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
              <Link to="/signup" className="link link-primary">
                Sign up
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

export default Login;
