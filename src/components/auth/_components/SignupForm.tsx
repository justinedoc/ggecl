import { CustomLink } from "../ui/CustomLink";
import { FormHead } from "../ui/FormHead";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { InputBox } from "../ui/InputBox";
import { FaXmark } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import GoogleSigninBtn from "../ui/GoogleSigninBtn";
import { AuthTabsContext, AuthTabsType } from "../pages/Signup";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFormData,
  updateFormData,
} from "@/app/features/auth/student/signup/SignupTabsPagination";

const SignupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignupFormData = z.infer<typeof SignupSchema>;

export default function SignupForm(): JSX.Element {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const { setCurrentTab }: AuthTabsType = useContext(AuthTabsContext);
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: formData.email || "",
      password: formData.password || "",
    },
  });

  function handleCheckPassword(password: string) {
    return [
      {
        message: "One letter",
        isChecked: /[a-z]/.test(password),
      },
      {
        message: "One number",
        isChecked: /[0-9]/.test(password),
      },
      {
        message: "One special character",
        isChecked: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      },
      {
        message: "6 or more characters",
        isChecked: password.length >= 6,
      },
    ];
  }

  async function createAcc(data: SignupFormData): Promise<void> {
    dispatch(updateFormData(data));
    setCurrentTab("next");
  }

  const password: string = watch("password");
  const email: string = watch("email");
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid = handleCheckPassword(password).every(
    (check) => check.isChecked
  );

  return (
    <form
      onSubmit={handleSubmit(createAcc)}
      className="flex flex-col gap-6 w-full md:mt-5 md:p-5"
    >
      <FormHead title="Create an account">
        Already have an account? <CustomLink to="/login">Login</CustomLink>
      </FormHead>

      <InputBox>
        <label className="text-md font-semibold">Email</label>
        <Input
          {...register("email")}
          type="email"
          name="email"
          className={`border ${
            errors.email ? "border-red-500" : "border-gray-400/30"
          } bg-transparent w-full p-2 rounded-sm focus:ring-2 focus:ring-blue-500/30 outline-none`}
        />

        <aside className="absolute w-fit top-[2.8rem] right-2">
          {errors.email && !isEmailValid ? (
            <FaXmark className="text-red-500" size={22} />
          ) : (
            <FaCheckCircle
              className={email && isEmailValid ? "text-green-500" : "hidden"}
              size={22}
            />
          )}
        </aside>

        {errors.email && (
          <p className="text-red-500 text-xs capitalize">
            {errors.email.message as string}
          </p>
        )}
      </InputBox>

      <InputBox>
        <label className="text-md font-semibold">Password</label>
        <Input
          {...register("password")}
          type={isPasswordHidden ? "password" : "text"}
          name="password"
          className={`border ${
            errors.password ? "border-red-500" : "border-gray-400/30"
          } bg-transparent w-full p-2 rounded-sm focus:ring-2 focus:ring-blue-500/30 outline-none`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs capitalize">
            {errors.password.message as string}
          </p>
        )}

        {password && (
          <PasswordChecks password={password} checks={handleCheckPassword} />
        )}
        <aside
          className="absolute top-0 right-0 flex gap-2 items-center font-medium cursor-pointer"
          onClick={() => setIsPasswordHidden((isHidden) => !isHidden)}
        >
          {isPasswordHidden ? <IoEye /> : <IoEyeOff />}
          <span>{isPasswordHidden ? "Show" : "Hide"}</span>
        </aside>
      </InputBox>

      <Button
        type="submit"
        disabled={!isPasswordValid || !isEmailValid || !isValid || isSubmitting}
        className="bg-gray-900 border border-blue-300/30 disabled:border-0 disabled:bg-gray-600 dark:disabled:bg-gray-700 dark:text-white font-semibold hover:bg-gray-800"
      >
        {isSubmitting ? "Processing..." : "Proceed"}
      </Button>

      <GoogleSigninBtn>Sign up with Google</GoogleSigninBtn>
      <p className="text-sm text-center">
        By creating an account, you agree to GGECL's{" "}
        <CustomLink to="https://ggecl.com/terms.html">Terms of Service</CustomLink>,{" "}
        <CustomLink to="https://ggecl.com/terms.html">Privacy Policy</CustomLink>
      </p>
    </form>
  );
}

interface PasswordType {
  message: string;
  isChecked: boolean;
}

interface PasswordChecksType {
  password: string;
  checks: (password: string) => PasswordType[];
}

function PasswordChecks({ password, checks }: PasswordChecksType): JSX.Element {
  return (
    <div className="space-y-2 mt-4">
      {checks(password).map(({ message, isChecked }) => (
        <div
          key={message}
          className={`flex items-center gap-3 ${
            isChecked ? "text-green-500" : "text-red-500"
          }`}
        >
          {isChecked ? <FaCheck /> : <FaXmark />}
          <span>{message}</span>
        </div>
      ))}
    </div>
  );
}
