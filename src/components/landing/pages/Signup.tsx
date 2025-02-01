import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

// import AuthImagePattern from './pages/AuthImagePattern';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  return (
    <div className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden">
      <Navbar />
      <div className="absolute top-10 left-20 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green-400/20 rounded-full blur-2xl"></div>

      {/* Left Side */}
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
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10 py-2 rounded-md `}
                  placeholder="Josh Dickson"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  id="username"
                />
              </div>
            </div>

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
                  className={`input input-bordered w-full pl-10 py-2 rounded-md `}
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
                  className={`input input-bordered w-full pl-10 py-2 rounded-md `}
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

            <button type="submit" className="btn btn-primary w-full mt-52 py-2 rounded-md text-white">
              Create Account
            </button>
          </form>
{/* Social Login Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="btn btn-outline btn-google flex items-center space-x-2 px-5 py-2 rounded-md text-white">
              <FaGoogle className="text-xl" />
              <span>Google</span>
            </button>

            <button className="btn btn-outline btn-google flex items-center space-x-2 px-5 py-2 rounded-md text-white">
              <FaFacebook className="text-xl" />
              <span>Facebook</span>
            </button>

            <button className="btn btn-outline btn-google flex items-center space-x-2 px-5 py-2 rounded-md text-white">
              <FaGithub className="text-xl" />
              <span>GitHub</span>
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

      {/* Right Side */}
      <div className='h-screen max-w-7xl md:block hidden'>
        <img src="src/assets/images/Frame 427319048.png" className='h-full w-full bg-cover' alt="" />bi-Tech2
      </div>
    </div>
  );
};

export default Signup;
