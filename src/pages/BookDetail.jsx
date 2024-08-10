import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import bookImg from "../assets/book.png";
import useTheme from "../hooks/useTheme";

export default function BlogDetail() {
  let { id } = useParams();
  let url = `http://localhost:3000/books/${id}`;
  let { data: books, loading, error } = useFetch(url);
  let { isDark } = useTheme();
  return (
    <div>
      {error && <div>{error}</div>}
      {loading && (
        <div className="flex justify-center items-center mt-10 ">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
      {books && (
        <div
          className={`grid md:grid-cols-2 h-screen ${
            isDark ? "text-gray-200" : ""
          }`}
        >
          <div>
            <img src={bookImg} alt="" className="w-[80] mx-auto mt-5" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{books.title}</h1>
            <div className="space-x-3">
              {books.categories.map((c) => (
                <span
                  className="bg-pink-500 text-white rounded-full text-sm px-2 py-1"
                  key={c}
                >
                  {c}
                </span>
              ))}
            </div>
            <p>{books.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
