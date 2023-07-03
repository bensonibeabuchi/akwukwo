import React from "react";
import Coursecontent from "../component/Coursecontent";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-96 grid place-items-center mx-auto bg-red-500">
      <h1>contact us here AGBA</h1>

      <button className="p-8 relative flex justify-center items-center group">
        <p>Dropdown</p>
        <div className="hidden group-focus:block absolute bg-white top-full w-full mt-1 rounded ">
          <button>
            <Link href="/frontend"> Frontend</Link>
          </button>
          <ul>
            <li>
              <Link href="/backend"> backend</Link>
            </li>
            <li>
              <Link href="/frontend"> Data</Link>
            </li>
            <li>
              <Link href="/frontend"> Frontend</Link>
            </li>
            <li>
              <Link href="/frontend"> product</Link>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
}
