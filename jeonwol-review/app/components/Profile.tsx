"use client";
import "../globals.css";
import Image from "next/image";
import BasicPrifle from "/public/basic_profile.svg";

export default function Profile(props: any) {
  return (
    <>
      <div className="flex flex-row items-center px-[10px]">
        <button className="rounded-full bg-[#ffffff] w-[50px] h-[50px]">
          <Image src={BasicPrifle} alt="profile button"></Image>
        </button>
      </div>
    </>
  );
}
