import React from "react";

const Loader = () => {
  return (
    <div className="w-full min-h-screen bg-gray-600 flex justify-center items-center">
      <div className="w-48 h-48 border-solid border-r-4 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
