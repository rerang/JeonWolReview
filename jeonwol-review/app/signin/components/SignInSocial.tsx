"use client";
import "../../globals.css";

export default function SignInSocial(props: any) {
  return (
    <div className="w-4/5 flex flex-col p-8 gap-10 items-center">
      <div className="w-full p-4 text-center text-2xl">Social</div>
      <div className="w-full bg-color-5/[.9] flex flex-row justify-around p-14 text-xl border border-color-4 px-20">
        <button className="rounded-full bg-[#ffffff] w-[100px] h-[100px]"></button>
        <button className="rounded-full bg-[#ffffff] w-[100px] h-[100px]"></button>
        <button className="rounded-full bg-[#ffffff] w-[100px] h-[100px]"></button>
      </div>
    </div>
  );
}
