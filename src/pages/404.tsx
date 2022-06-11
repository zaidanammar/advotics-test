import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <main className="h-screen w-full bg-white">
      <section className="font-sans w-full h-full flex flex-col justify-start items-center pt-20">
        <h1 className="text-xl font-bold">404</h1>
        <p className="">Page Not Found!</p>
        <p onClick={goBack} className="mt-2 cursor-pointer underline hover:text-primary">
          Go back
        </p>
      </section>
    </main>
  );
};

export default NoMatch;
