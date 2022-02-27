import React, { useState } from "react";

import Logo from "./Logo";

const LoginPage = () => {
  const [userID, setUserID] = useState("");

  return (
    <>
      <div className="w-full h-screen bg-indigo-900 bg-opacity-30 fixed z-50">
        {/* Container */}
        <div className="flex h-screen justify-center items-center text-white">
          {/* Content */}
          {/* <Logo /> */}
          <form action="submit" className="flex flex-col gap-4 w-72 mb-60">
            <label htmlFor="userID" className="ml-3 text-3xl">
              Co-Star ID
            </label>

            <div className=" flex justify-around">
              <input
                type="number"
                id="userID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                className=" text-gray-900 text-md rounded-2xl p-3 "
                autoFocus
              />

              <button className=" bg-pink-500 px-4 py-1 rounded-xl">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Dark Background */}
      <div className="bg-black fixed inset-0 z-40"></div>
    </>
  );
};

export default LoginPage;
