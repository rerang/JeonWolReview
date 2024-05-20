import { Form } from "react-hook-form";
import SignUpForm from "./components/SignUpForm";
import SignUpSocial from "./components/SignUpSocial";

export default function Signup() {
  return (
    <>
      <div className="flex flex-col items-center p-12">
        <div className="w-full p-4 text-center text-2xl">Sign Up</div>
        <SignUpForm />
        <hr className="w-full h-[1px] border border-2 border-dashed border-color-5 m-6"></hr>
        <SignUpSocial />
        <a href="#" className="underline p-10">
          <div className="w-full p-4 text-center text-lg">Sign In</div>
        </a>
      </div>
    </>
  );
}
