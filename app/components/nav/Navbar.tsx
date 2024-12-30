"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import CartCount from "./CartCount";
import Image from "next/image";
import UserMenu from "./UserMenu";
import { usePathname } from "next/navigation";

export default function Navbar({ currentUser }) {
  const pathname = usePathname();
  const [navGradient, setNavGradient] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavGradient(true) : setNavGradient(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  console.log("navGradient", navGradient);

  const showNavBar = pathname?.includes("builder");

  return (
    <div className="relative flex-grow">
      <div
        className={`fixed h-[80px] w-screen top-0 left-0 right-0 z-1 ${
          (navGradient || showNavBar) && "shadow-md"
        }`}
        style={{
          background: "white",
          opacity: navGradient || showNavBar ? 1 : 0,
          transition: "all .3s ease",
          zIndex: 1,
        }}
      />{" "}
      <nav className={`top-0 z-30 navbar w-[100%] fixed`}>
        <div className="flex-1">
          <Link href="/" className="w-[110px] h-[50px] relative">
            <Image
              src="/images/weblogo-horizontal.png"
              alt="atomic blossom"
              layout="fill"
              objectFit="contain"
              objectPosition="left top"
              quality={100}
              unoptimized
            />
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              style={{ backgroundColor: "#FCCDC0" }}
            />
          </div>
          <div className="flex items-center gap-1 md:gap-4">
            <Link href="/customizations">Customizations</Link>
            <Link href="/cart">
              <CartCount />
            </Link>
            <UserMenu currentUser={currentUser} />
          </div>

          {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
        </div>
      </nav>
    </div>
  );
}

{
  /* <div className="py-2">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className="w-[110px] h-[50px] relative">
              <Image
                src="/images/weblogo-horizontal.png"
                alt="atomic blossom"
                layout="fill"
                objectFit="contain"
                objectPosition="left top"
                quality={100}
                unoptimized
              />
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <Link href="/cart">
                <CartCount />
              </Link>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container> */
}
