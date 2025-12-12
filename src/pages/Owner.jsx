import React from "react";

const Owner = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <h1 className="text-center pt-5 text-3xl font-bold">
          26 Oassalam Promjit (อัส) - JSDX
        </h1>
        <div className="flex justify-center pt-7 pb-7">
          <img src="../public/IMG_8105.jpg" alt="" className="w-52 " />
        </div>
        <h2 className="text-center text-lg font-bold">short biography</h2>
        <p className="text-sm text-black mx-auto  max-w-md line-clamp-5 leading-relaxed">
  I am a Junior Software Developer with a strong interest in building modern web applications and turning ideas into practical digital solutions. I have hands-on experience with front-end and back-end development, particularly using JavaScript,  React, <br></br>TypeScript, and modern frameworks.
</p>
      </div>
    </>
  );
};

export default Owner;
