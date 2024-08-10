import book from "../assets/book.png";
import React from "react";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme";

export default function BookList() {
  let location = useLocation();
  let parems = new URLSearchParams(location.search);
  let search = parems.get("search");
  let { isDark } = useTheme();

  let {
    data: books,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center mt-10 ">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
      {!!books && (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4  my-3  ">
          {books.map((b) => (
            <Link to={`/books/${b.id}`} key={b.id}>
              <div
                className={`p-4 border rounded-3xl border-l h-full shadow-lg ${
                  isDark ? "bg-dcard border-primary shadow-rose-950" : ""
                }`}
              >
                <img src={book} alt="" className="mx-auto" />
                <div
                  className={`text-center space-y-2 mt-3 ${
                    isDark ? "text-gray-200" : ""
                  }`}
                >
                  <h1>{b.title}</h1>
                  <p>{b.description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start">
                    {b.categories.map((c) => (
                      <span
                        key={c}
                        className={`mx-2 my-1 text-white text-sm rounded-full px-2 py-1 bg-pink-500 ${
                          isDark ? "text-gray-200" : "text-white"
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {books && !books.length && (
        <p className="text-center text-xl text-gray-500">
          No Search Results Found
        </p>
      )}
    </div>
  );
}
