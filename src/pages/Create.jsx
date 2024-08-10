import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";

export default function Create() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [newCategories, setNewCategories] = useState("");
  let [categories, setCategories] = useState([]);
  let { isDark } = useTheme();

  let {
    setPostData,
    data: book,
    loading,
  } = useFetch("http://localhost:3000/books", "POST");

  let navigate = useNavigate();

  let AddCategories = (e) => {
    if (newCategories && categories.includes(newCategories)) {
      setNewCategories("");
      return;
    }
    setCategories((prev) => [newCategories, ...prev]);
    setNewCategories("");
  };

  let addBook = (e) => {
    e.preventDefault();
    let data = { title, description, categories };
    setPostData(data);
  };
  useEffect(() => {
    if (book) {
      navigate("/");
    }
  }, [book, navigate]);
  return (
    <div className="h-screen">
      <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
        {/* Title */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="grid-password"
            >
              Book Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Book Title"
            />
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="grid-password"
            >
              Book Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Book Description"
            />
            <p className="text-gray-200 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        {/* categories */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="grid-password"
            >
              Categories
            </label>
            <div className="flex items-center space-x-2">
              <input
                value={newCategories}
                onChange={(e) => setNewCategories(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Book Categories"
              />
              <button
                type="button"
                onClick={AddCategories}
                className="bg-primary p-1 rounded-lg mb-3
            "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6  p-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {categories.map((c) => (
              <span
                key={c}
                className="mx-2 my-1 text-white text-sm rounded-full px-2 py-1 bg-pink-500"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        {/* Crate Book */}
        {loading && (
          <div className="flex justify-center items-center ">
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
        {!loading && (
          <button className="text-white bg-primary px-3 py-2 rounded-2xl flex justify-center items-center gap-1 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="hidden md:block">Create Book</span>
          </button>
        )}
      </form>
    </div>
  );
}
