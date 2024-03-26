import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="w-fit">
          <Image
            className=""
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png"
            }
            alt="logo-image"
            width={50}
            height={50}
          />
        </div>
        <h1 className="font-bold text-xl">DropBox</h1>
      </Link>

      <div className="px-5 flex items-center space-x-2">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
