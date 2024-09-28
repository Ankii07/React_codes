import React from "react";
import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <>
      <header className="flex justify-between py-4 px-4 md:px-8 shadow-md pb-10">
        <img className="w-4" src={viteLogo} alt="vitelogo" />
        <ul className="flex gap-4">
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/about">About</a>
          </li>
          <li>
            {" "}
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
}
