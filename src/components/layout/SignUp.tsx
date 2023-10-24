"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

/**
 * SignUp component for displaying a sign-up popup.
 */
export default function SignUp() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  // Open the sign-up popup
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Close the sign-up popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  // Switch to the login form
  const LoginPopup = () => {
    setShowLogin(true);
  };

  // Switch to the registration form
  const RegisterPopup = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <button
        onClick={openPopup}
        className="flex w-full items-center justify-center rounded-full bg-lime-300 px-6 py-2 transition-all duration-300 hover:bg-lime-500"
      >
        Sign Up
      </button>

      {isPopupOpen && (
        <div className="fixed left-0 top-0 h-full w-full bg-gray-900 bg-opacity-30 backdrop-blur-sm">
          {/* Popup */}
          <div className="relative top-28 mx-auto flex h-fit w-10/12 flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md md:w-7/12 md:p-8 lg:w-5/12">
            <button
              onClick={closePopup}
              className="absolute -right-6 -top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-bold text-white opacity-50 transition-all duration-300 hover:rotate-180"
            >
              <AiOutlineClose size={20} />
            </button>
            <div className="flex items-center gap-10">
              <button
                onClick={LoginPopup}
                className={`px-2 py-2 hover:bg-slate-100 ${
                  showLogin ? "border-b-2 border-lime-500" : ""
                }`}
              >
                LOGIN
              </button>
              |
              <button
                onClick={RegisterPopup}
                className={`px-2 py-2 hover:bg-slate-100 ${
                  showLogin ? "" : "border-b-2 border-lime-500"
                }`}
              >
                REGISTER
              </button>
            </div>
            {showLogin ? (
              <div className="mt-8 flex w-11/12 flex-col gap-6 bg-lime-300 p-4">
                <input
                  placeholder="UserName Or Email"
                  className="h-10 rounded-lg px-4 outline-none"
                />
                <input
                  placeholder="Password"
                  className="h-10 rounded-lg px-4 outline-none"
                />
                <button className="rounded-lg bg-lime-600 py-2 font-bold text-white hover:bg-lime-700">
                  Login
                </button>
              </div>
            ) : (
              <div className="mt-8 flex w-11/12 flex-col gap-6 bg-lime-300 p-4">
                <input
                  placeholder="UserName"
                  className="h-10 rounded-lg px-4 outline-none"
                />
                <input
                  placeholder="Email Address"
                  className="h-10 rounded-lg px-4 outline-none"
                />
                <input
                  placeholder="Password"
                  className="h-10 rounded-lg px-4 outline-none"
                />
                <button className="rounded-lg bg-lime-600 py-2 font-bold text-white hover:bg-lime-700">
                  Registration
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
