import React from "react";

function Loader() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className=" h-24 w-72 bg-gray-900 border-2 border-[#7C3AED] rounded-lg absolute top-[50%] ">
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-xl font-extrabold text-white">Generating review</h1>

          <div className=" mx-4 loader-wrapper">
            <span className="loader">
              <span className="loader-inner"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
