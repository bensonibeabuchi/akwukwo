"use client";
import React, { useState } from "react";

export default function Readmore({ text }) {
  const [showFullText, setShowFullText] = useState(false);

  function handleClick() {
    setShowFullText(true);
  }

  if (text.length <= 20 || showFullText) {
    return <p></p>;
  }

  return (
    <div>
      <p>{text.slice(0, 20)}...</p>
      <button onClick={handleClick}>Read more</button>
    </div>
  );
}
