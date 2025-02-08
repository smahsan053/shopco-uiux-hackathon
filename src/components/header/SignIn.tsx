"use client";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
// import { GithubLogin, GoogleLogin } from "@/lib/auth-actions";
// import { login } from "@/lib/auth-actions";
import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/UserStore";
interface FormData {
  email: string;
  password: string;
}
const SignIn = ({ onSwitchToSignUp }: { onSwitchToSignUp: () => void }) => {
  const setUser = useUserStore((state) => state.setUser);
  const setAdmin = useUserStore((state) => state.setAdmin);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const onsubmit = async (
    e: FormEvent<HTMLFormElement>,
    formData: FormData
  ) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const user = await client.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email }
      );

      if (!user) {
        toast.error("Invalid email or password");
        return;
      }
      if (!user.password) {
        toast.error("Invalid email or password");
        return;
      }

      if (user.password === password.toString()) {
        toast.success("Login Successful");
        const userData = {
          id: user._id!,
          firstName: user.firstName!,
          lastName: user.lastName!,
          email: user.email!,
          authMethod: user.authMethod!,
          joiningDate: user.createdAt!,
        };
        setUser(userData);
        setFormData({ email: "", password: "" });
        if (user.role === "admin") {
          setAdmin(true);
        }
        return userData;
      } else {
        toast.error("Please enter correct password");
        return;
      }
    } catch (error) {
      toast.error("SignIn Failed");
      console.error("SignIn Failed:", error);
    }
  };
  return (
    <div className="flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 rounded-lg border border-gray-700 bg-black">
        <h2 className="text-2xl font-semibold text-center">
          Welcome to SHOP.CO
        </h2>
        <p className="text-gray-400 text-center mt-2">Sign in to continue</p>
        <div className="mt-6 space-y-4">
          {/* Google Sign-In */}
          {/* <button
            onClick={() => GoogleLogin()}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button> */}

          {/* GitHub Sign-In */}
          {/* <button
            onClick={() => GithubLogin()}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition"
          >
            <FaGithub className="text-xl" />
            Continue with GitHub
          </button> */}

          {/* Email Sign-In */}
          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => onsubmit(e, formData)}
          >
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
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
                className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <Button className="mt-2 w-full rounded-md bg-white text-black px-4 py-2 hover:bg-gray-300 transition">
              Sign In
            </Button>
          </form>
        </div>
        ``
        <p className="text-gray-500 text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <button className="underline" onClick={onSwitchToSignUp}>
            Sign Up
          </button>
        </p>
        <p className="text-gray-500 text-center mt-6 text-sm">
          By signing in, you agree to our{" "}
          <span className="underline">Terms & Conditions</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
