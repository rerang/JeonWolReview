"use client";
import "../../globals.css";

import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let userSchema = yup.object({
  address: yup.string().required("필수요소입니다."),
  //type -> btn?
  deposit: yup.number().required("필수요소입니다"),
  qu1: yup.string().required("필수요소입니다."),
  qu2: yup.string().required("필수요소입니다."),
  etc: yup.string(),
});

export default function ReviewForm(props: any) {
  const { register, handleSubmit, watch, formState } = useForm<any>({
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-4/5 flex flex-col p-8 gap-10 items-center"
    >
      <div className="w-full bg-color-5/[.9] flex flex-col items-center p-14 text-xl border border-color-4">
        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> 주소 </div>
          <input
            {...register("address")}
            className="w-3/5 h-[35px] rounded-[5px] outline-none p-2 border border-color-0 border-2"
          ></input>
          <div className="text-[#A44848] text-base">
            {formState.errors.address?.message?.toString()}
          </div>
        </div>
        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> 전월세 </div>
          <button></button>
          <button></button>
        </div>
        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> 보증금 </div>
          <input
            {...register("deposit")}
            className="w-3/5 h-[35px] rounded-[5px] outline-none p-2 border border-color-0 border-2"
          ></input>
          <div className="text-[#A44848] text-base">
            {formState.errors.deposit?.message?.toString()}
          </div>
        </div>
        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> 필수 질문 1 </div>
          <input
            {...register("qu1")}
            className="w-3/5 h-[35px] rounded-[5px] outline-none p-2 border border-color-0 border-2"
          ></input>
          <div className="text-[#A44848] text-base">
            {formState.errors.qu1?.message?.toString()}
          </div>
        </div>
        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> 필수 질문 2 </div>
          <input
            {...register("qu2")}
            className="w-3/5 h-[35px] rounded-[5px] outline-none p-2 border border-color-0 border-2"
          ></input>
          <div className="text-[#A44848] text-base">
            {formState.errors.qu2?.message?.toString()}
          </div>
        </div>
        <div className="flex flex-row w-full p-2.5 flex-wrap">
          <div className="w-2/5"> 추가 내용 </div>
          <input
            {...register("etc")}
            className="w-3/5 h-[35px] rounded-[5px] outline-none p-2 border border-color-0 border-2"
          ></input>
          <div className="text-[#A44848] text-base">
            {formState.errors.etc?.message?.toString()}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-[150px] h-[50px] bg-color-7 rounded-[8px] text-[#FFFFFF] "
        role="submit"
      >
        재출
      </button>
    </form>
  );
}
