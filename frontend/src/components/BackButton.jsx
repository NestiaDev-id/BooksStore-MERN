import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BackButton({ destination = "/" }) {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <div className="flex">
          <BsArrowLeft className="text-2xl " />
          <span className="ml-2 ">Back</span>
        </div>
      </Link>
    </div>
  );
}