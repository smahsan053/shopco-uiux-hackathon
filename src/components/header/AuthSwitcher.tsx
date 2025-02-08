"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function AuthSwitcher() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <div>
      <CircleUserRound
        className="cursor-pointer hover:scale-105 active:scale-95"
        onClick={() => {
          setShowSignUp(true);
        }}
      />
      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative bg-black border border-gray-700 p-6 rounded-lg w-96 ">
            <Button
              className="absolute top-2 right-2 text-gray-400 hover:text-white z-50"
              onClick={() => setShowSignUp(false)}
            >
              ✕
            </Button>
            <SignUp
              onSwitchToSignIn={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
            />
          </div>
        </div>
      )}
      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative bg-black border border-gray-700 p-6 rounded-lg w-96 ">
            <Button
              className="absolute top-2 right-2 text-gray-400 hover:text-white z-50"
              onClick={() => setShowSignIn(false)}
            >
              ✕
            </Button>
            <SignIn
              onSwitchToSignUp={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthSwitcher;
