import Link from "next/link";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 p-3 mx-auto">
      <Link href={`/`} className="flex gap-1 items-center">
        <span
          className="text-2xl font-bold bg-amber-500 py-1 px-2
         rounded-lg"
        >
          IMDb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
      <ul className="flex gap-4 text-lg flex-grow items-center justify-center ">
        <li className="hidden sm:block hover:text-purple-500">
          <Link href={`/`}>Home</Link>
        </li>
        <li className="hidden sm:block hover:text-purple-500">
          <Link href={`/about`}>About</Link>
        </li>
      </ul>
      <div className="flex  items-center gap-4">
        <DarkModeSwitch />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href={`/sign-in`}>Sign In</Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
