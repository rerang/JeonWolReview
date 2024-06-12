"use client";
import "../../globals.css";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkUser, IUserSignin } from "@/lib/server_logic/user";

let userSchema = yup.object({
  id: yup
    .string()
    .required("필수요소입니다.")
    .min(3, "ID는 최소 3자 이상 입력하여 주세요.")
    .matches(
      /^[가-힣a-zA-Z0-9]*$/,
      "ID는 한글, 영문, 숫자 조합으로만 이루어 질 수 있습니다."
    ),
  pwd: yup
    .string()
    .required("필수요소입니다.")
    .min(8, "비밀번호는 8자리 이상으로 입력하여 주세요.")
    .max(16, "비밀번호는 16자리 이하로 입력하여 주세요."),
});

export default function SignUpForm(props: any) {
  const { register, handleSubmit, watch, formState } = useForm<any>({
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });
  const onSubmit = async (data: any) => {
    const user_signin: IUserSignin = {
      id: data.id,
      password: data.pwd,
    };
    const checkUserRes = await checkUser(user_signin);
    if (!checkUserRes.stat) {
      alert(checkUserRes.msg);
    }
    // signin
    console.log("sign in 하세용");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-4/5 flex flex-col p-8 gap-10 items-center"
    >
      <div className="w-full bg-color-5/[.9] flex flex-col items-center p-14 text-xl border border-color-4">
        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> ID </div>
          <input
            {...register("id")}
            className="w-3/5 h-[35px] rounded-[5px] outline-none p-2 border border-color-0 border-2"
          ></input>
          <div className="text-[#A44848] text-base">
            {formState.errors.id?.message?.toString()}
          </div>
        </div>

        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> PWD </div>
          <input
            {...register("pwd")}
            type="password"
            className="w-3/5 h-[35px] rounded-[5px] outline-none p-2 border border-color-0 border-2"
          ></input>
          <div className="text-[#A44848] text-base">
            {formState.errors.pwd?.message?.toString()}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-[150px] h-[50px] bg-color-7 rounded-[8px] text-[#FFFFFF] "
        role="submit"
      >
        로그인
      </button>
    </form>
  );
}
// 비번 해쉬 https://www.npmjs.com/package/bcryptjs
