import React from "react";

function Button({ label, imageURL }) {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 
        border font-montserrat text-lg 
        leading-none bg-coral-red text-white-400 rounded-full
        border-coral-red
        ">
      {label}
      <img 
      src={imageURL} 
      alt="image" 
      className="rounded-full w-5 h-5" />
    </button>
  );
}

export default Button;
