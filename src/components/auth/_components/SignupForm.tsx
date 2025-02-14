import { CustomLink } from "../ui/CustomLink";
import { FormHead } from "../ui/FormHead";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { InputBox } from "../ui/InputBox";
import { FaXmark } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { DarkOverlay } from "../ui/DarkOverlay";
import LoadingAnim from "../ui/LoadingAnim";
import GoogleSigninBtn from "../ui/GoogleSigninBtn";
import { useNavigate } from "react-router";

const SignupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function SignupForm() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
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

  async function createAcc(data: FieldValues) {
    // TODO: send to server
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
    navigate("/dashboard");
  }

  const password: string = watch("password");
  const email: string | null = watch("email");
  const isEmailValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid = handleCheckPassword(password).every(
    (password) => password.isChecked
  );

  return (
    <form
      onSubmit={handleSubmit(createAcc)}
      className="flex flex-col gap-7 w-full md:mt-5 md:p-5 "
    >
      <FormHead title="Create an account">
        Already have an account? <CustomLink to="/login">Login</CustomLink>
      </FormHead>

      <InputBox>
        <label className="text-md font-semibold">Email</label>
        <input
          {...register("email")}
          type="email"
          name="email"
          className={`border ${
            errors?.email ? "border-red-500" : "border-gray-400/30"
          }  bg-transparent w-full p-2 rounded-sm focus:ring-2 focus:ring-blue-500/30 outline-none`}
        />

        <aside className="absolute w-fit top-[2.68rem] right-2">
          {errors?.email && !isEmailValid ? (
            <FaXmark className="text-red-500" size={22} />
          ) : (
            <FaCheckCircle
              className={email && isEmailValid ? "text-green-500" : "hidden"}
              size={22}
            />
          )}
        </aside>

        {errors?.email && (
          <p className="text-red-500 text-xs capitalize">
            {errors?.email?.message as string}
          </p>
        )}
      </InputBox>

      <InputBox>
        <label className="text-md font-semibold">Password</label>
        <input
          {...register("password")}
          type={isPasswordHidden ? "password" : "text"}
          name="password"
          className={`border ${
            errors?.password ? "border-red-500" : "border-gray-400/30"
          }  bg-transparent w-full p-2 rounded-sm focus:ring-2 focus:ring-blue-500/30 outline-none`}
        />
        {errors?.password && (
          <p className="text-red-500 text-xs capitalize">
            {errors?.password?.message as string}
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
        className="bg-blue-500 font-semibold hover:bg-zinc-500/50"
      >
        {isSubmitting ? "Signing up..." : "Signup"}
      </Button>

      <GoogleSigninBtn>Sign up with Google</GoogleSigninBtn>
      <p className="text-sm text-center">
        By creating an account, you agree to GGECL's{" "}
        <CustomLink>Terms of Service</CustomLink>,{" "}
        <CustomLink>Privacy Policy</CustomLink>
      </p>

      {isSubmitting && (
        <DarkOverlay>
          <LoadingAnim />
        </DarkOverlay>
      )}
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

function PasswordChecks({ password, checks }: PasswordChecksType) {
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
