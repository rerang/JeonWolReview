import SignInForm from "./components/SignInForm";
import SignInSocial from "./components/SignInSocial";

export default function SignIn(props: any) {
  return (
    <>
      <div className="flex flex-col items-center p-12">
        <div className="w-full p-4 text-center text-2xl">Sign In</div>
        <SignInForm />
        <hr className="w-full h-[1px] border border-2 border-dashed border-color-5 m-6"></hr>
        <SignInSocial />
        <a href="#" className="underline p-10">
          <div className="w-full p-4 text-center text-lg">Sign In</div>
        </a>
      </div>
    </>
  );
}
