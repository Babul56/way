"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function SignUp() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const LoginPopup = () => {
    setShowLogin(false);
  };

  const RegisterPopup = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <button
        onClick={openPopup}
        className="px-6 py-2 flex w-full items-center justify-center rounded-full bg-lime-300 hover:bg-lime-500 transition-all duration-300"
      >
        Sign Up
      </button>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 backdrop-blur-sm">
          {/* Popup */}
          <div className="bg-white p-4 md:p-8 rounded-lg w-fit h-fit top-28 mx-auto shadow-md relative flex gap-4 justify-center items-center flex-col">
            <button
              onClick={closePopup}
              className="bg-gray-800 text-white font-bold flex items-center justify-center opacity-50 h-10 w-10 rounded-full absolute -top-6 hover:rotate-180 -right-6 transition-all duration-300"
            >
              <AiOutlineClose size={20} />
            </button>
            <div className="flex gap-10 items-center">
              <button
                onClick={RegisterPopup}
                className={`px-2 py-2 hover:bg-slate-100 ${
                  showLogin ? "border-b-2 border-lime-500" : ""
                }`}
              >
                LOGIN
              </button>
              |
              <button
                onClick={LoginPopup}
                className={`px-2 py-2 hover:bg-slate-100 ${
                  showLogin ? "" : "border-b-2 border-lime-500"
                }`}
              >
                REGISTER
              </button>
            </div>
            {showLogin ? (
              <div className="bg-lime-300 mt-8 flex flex-col gap-6 p-4 ">
                <input
                  placeholder="UserName Or Email"
                  className="h-10 rounded-lg px-4 outline-none"
                />
                <input
                  placeholder="Password"
                  className="h-10 rounded-lg px-4 outline-none"
                />
                <button className="bg-lime-600 py-2 font-bold rounded-lg text-white hover:bg-lime-700">
                  Login
                </button>
              </div>
            ) : (
              <div
                className={`bg-lime-300 mt-8 flex flex-col gap-6 p-4 transition-transform duration-300 ${
                  showLogin ? "-translate-x-full" : "translate-x-0"
                }`}
              >
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
                <button className="bg-lime-600 py-2 rounded-lg font-bold text-white hover:bg-lime-700">
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
