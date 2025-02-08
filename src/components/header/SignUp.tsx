"use client";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import { FormEvent, MouseEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { GithubLogin, GoogleLogin } from "@/lib/auth-actions";
import { toast } from "react-toastify";
import { client } from "@/sanity/lib/client";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  authMethod: string;
}
const SignUp = ({ onSwitchToSignIn }: { onSwitchToSignIn: () => void }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    authMethod: "",
  });
  const onSubmit = async (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
    authMethod: string,
    formData: FormData
  ) => {
    e.preventDefault();

    try {
      if (authMethod === "email") {
        const { email } = formData;

        const user = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email }
        );
        if (user) {
          toast.error("Email already exists. Please go to the login page.");
          return;
        }
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData!, authMethod }),
        });

        if (!response.ok) {
          toast.error("Network response was not ok");
          return;
        }
        // Process response here
        toast.success("Registration Successful");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          authMethod: "",
        });
      } else {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authMethod }),
        });
        if (!response.ok) {
          toast.error("Network response was not ok");
          return;
        }
        toast.success("Registration Successful");
      }
    } catch (error: unknown) {
      toast.error("Registration Failed");
      console.error("Registration Failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black">
      <div className="relative w-full max-w-md p-8 rounded-lg border border-gray-700 bg-black text-white">
        <h2 className="text-2xl font-semibold text-center">Join SHOP.CO</h2>
        <p className="text-gray-400 text-center mt-2">
          Sign up to start shopping
        </p>

        {/* Google & GitHub Sign Up */}
        {/* <div className="mt-6 space-y-4">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition"
            onClick={async (e) => {
              GoogleLogin();
              onSubmit(e, "google");
            }}
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <button
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition"
            onClick={(e) => {
              GithubLogin();
              onSubmit(e, "github");
            }}
          >
            <FaGithub className="text-xl" />
            Continue with GitHub
          </button>
        </div> */}

        {/* Email Sign Up */}
        <form
          onSubmit={(e) => onSubmit(e, "email", formData)}
          className="my-6 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="Ahsan"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Ali"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="ahsan.ali@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="w-full">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-white text-black px-4 py-2 hover:bg-gray-300 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-500 text-center text-sm mt-4">
          Already have an account?{" "}
          <button className="underline" onClick={onSwitchToSignIn}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
