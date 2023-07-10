"use client";
import React, { useState, useEffect, useRef } from "react";
import courses from "../coursedata";
import Link from "next/link";
import Image from "next/image";
import frontend from "../frontend";
import backend from "../backend";
import productdesign from "../productdesign";
import dataanalysis from "../dataanalysis";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const results = searchThroughData(query);
    setSearchResults(results);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // useEffect(() => {
  //   const results = searchThroughData(searchQuery);
  //   setSearchResults(results);
  // }, [searchQuery]);

  const searchThroughData = (query) => {
    const allData = [
      ...backend,
      ...frontend,
      ...productdesign,
      ...dataanalysis,
    ];

    const results = allData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    return results;
  };

  return (
    <div ref={searchRef}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="What do you want to learn"
        className="rounded-2xl w-[700px] p-4 pl-12 outline-[#286f6b]"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="absolute bg-[#105854] max-h-96 w-full overflow-y-auto border-[#0c7670] text-white shadow-lg rounded-2xl">
        {searchResults.map((item) => (
          <div
            key={item.id}
            className="p-4 pl-6  hover:bg-[#2f6462] cursor-pointer"
          >
            <Link href={`/${item.category}/${item.id}`}>
              <div className="flex flex-row hover:scale-[1.03]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <div className="flex truncate flex-col">
                  <p className="hover:underline hover:text-[#fcdc66] font-semibold pl-4">
                    {item.title}
                  </p>
                  <p className="text-xs truncate pl-4 text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
