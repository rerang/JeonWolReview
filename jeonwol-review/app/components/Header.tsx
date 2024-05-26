"use client";
import Image from "next/image";
import Link from "next/link";

import Logo from "/public/logo.svg";

import NoneProfile from "./NoneProfile";
import Profile from "./Profile";

export default function Header(props: any) {
  if (props.IsUser == true) {
    return (
      <>
        <div className="box-border w-full bg-color-0/70 h-[80px] py-[10px] px-8 flex flex-row justify-between">
          <Link href={{ pathname: "/" }} className="flex items-center">
            <Image src={Logo} alt="logo image" width={80} />
          </Link>
          <div className="flex flex-row items-center text-2xl">전월 리뷰</div>
          <Profile />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="box-border w-full bg-color-0/70 h-[80px] py-[10px] px-8 flex flex-row justify-between">
          <Image src={Logo} alt="logo image" width={80} />
          <div className="flex flex-row items-center text-2xl">전월 리뷰</div>
          <NoneProfile />
        </div>
      </>
    );
  }
}
