import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-200 to-pink-500 h-48 flex justify-center items-center">
        <div className="space-y-2 text-center">
          <h2 className="text-white text-3xl"> Welcome from my library</h2>
          <p className="text-gray-300 text-sm">
            A place where you can store and mange your books.
          </p>
        </div>
      </div>
    </div>
  );
}
