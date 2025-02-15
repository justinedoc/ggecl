import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { FormHead } from "../ui/FormHead";
import { DarkOverlay } from "../ui/DarkOverlay";
import LoadingAnim from "../ui/LoadingAnim";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthTabsContext } from "../pages/Signup";

const formSchema = z.object({
  fullname: z
    .string({
      message: "Please enter your full name",
    })
    .min(2)
    .max(50),
  dateOfBirth: z.date().min(new Date(1900, 0, 1)),
  gender: z.enum(["male", "female", "other"]),
});

function SignupDetailsForm() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      dateOfBirth: new Date(),
      gender: "other",
    },
  });

  const { setCurrentTab } = useContext(AuthTabsContext);
  async function onSubmit(data: FieldValues) {
    // TODO: send to server
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    form.reset();
    navigate("/dashboard");
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
                  className="dark:bg-gray-900 dark:border-blue-300/30"
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
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="dark:bg-gray-900 dark:border-blue-300/30">
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
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full flex pl-3 text-left font-normal dark:bg-gray-900 dark:border-blue-300/30",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      className="dark:bg-gray-900 dark:border-blue-300/30"
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            onClick={() => {
              setCurrentTab("previous");
            }}
          >
            Back
          </Button>
          <Button type="submit">Signup</Button>
        </div>
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
