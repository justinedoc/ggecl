import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { FormHead } from "../ui/FormHead";
import { DarkOverlay } from "../ui/DarkOverlay";
import LoadingAnim from "../ui/LoadingAnim";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectFormData } from "@/app/features/auth/student/signup/SignupTabsPagination";
import { createAccount } from "@/app/features/auth/student/signup/CreateAccount";
import type { AppDispatch } from "@/app/store"; // Import your dispatch type
import AuthDivider from "../ui/AuthDivider";
import GoogleSigninBtn from "../ui/GoogleSigninBtn";
import { CustomLink } from "../ui/CustomLink";

// Define the schema and infer its type
const formSchema = z.object({
  fullname: z
    .string({ message: "Please enter your full name" })
    .min(2, "Please enter your full name")
    .max(50, "Full name must be 50 characters or less"),
  dateOfBirth: z.string(),
  gender: z.enum(["male", "female", "other"]),
});

type SignupDetailsFormData = z.infer<typeof formSchema>;

function SignupDetailsForm(): JSX.Element {
  const formData = useSelector(selectFormData);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<SignupDetailsFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      dateOfBirth: "",
      gender: "other",
    },
  });


  async function onSubmit(data: SignupDetailsFormData): Promise<void> {
    dispatch(createAccount({ ...formData, ...data }))
      .unwrap()
      .then((res: unknown) => {
        console.log("Account created:", res);
        // navigate("/dashboard");
      })
      .catch((error: unknown) => {
        console.error("Create account error:", error);
      });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-full md:p-5"
      >
        <FormHead title="Tell us about yourself">
          Let us know more about you
        </FormHead>

        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-gray-900 outline-none shadow-sm border border-blue-300/30 dark:border-blue-300/20"
                  placeholder="Full Name Here"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This should appear exactly as in your documents
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="dark:bg-gray-900 outline-none shadow-sm border border-blue-300/30 dark:border-blue-300/20">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="dark:bg-gray-900 dark:border-blue-300/30">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Date of birth</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="dark:bg-gray-900 outline-none shadow-sm border border-blue-300/30 dark:border-blue-300/20"
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="my-3">
          Signup
        </Button>

        <AuthDivider />

        <GoogleSigninBtn>Continue with Google</GoogleSigninBtn>
        <p className="text-sm text-center">
          By creating an account, you agree to GGECL's{" "}
          <CustomLink to="https://ggecl.com/terms.html">
            Terms of Service
          </CustomLink>
          ,{" "}
          <CustomLink to="https://ggecl.com/terms.html">
            Privacy Policy
          </CustomLink>
        </p>
      </form>
      {form.formState.isSubmitting && (
        <DarkOverlay>
          <LoadingAnim />
        </DarkOverlay>
      )}
    </Form>
  );
}

export default SignupDetailsForm;
