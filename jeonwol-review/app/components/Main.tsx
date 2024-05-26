"use client";
import Main_Search from "./Main_Search";
import Main_Profile from "./Main_Profile";

export default function Main(props: any) {
  return (
    <>
      <div className="w-full h-full">map</div>
      <Main_Search />
      <Main_Profile />
    </>
  );
}
