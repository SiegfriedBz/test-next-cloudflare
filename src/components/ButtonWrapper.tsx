"use client";

import React from "react";

type TProps = {
  children: React.ReactNode;
};

const ButtonWrapper = ({ children }: TProps) => {
  console.log("ButtonWrapper -> I am a CLIENT component");

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div className="flex gap-x-32">
      <button onClick={handleClick} className="flex">
        clickMe
      </button>
      <div>{children}</div>
    </div>
  );
};

export default ButtonWrapper;
