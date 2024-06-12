"use server";
// db logic function
import prisma from "../../prisma/prisma";
import { compareSync } from "bcryptjs";

export interface IUserSignup {
  name: string;
  id: string;
  password: string;
  phone: string;
}

export async function createUser(user_data: IUserSignup) {
  console.log("user_data", user_data);
  console.log("user_data.phone", user_data.phone);
  const user = await prisma.local_user.create({
    data: {
      user_id: user_data.id,
      password: user_data.password,
      name: user_data.name,
      phone: user_data.phone,
    },
  });

  return user;
}

export interface IUserSignin {
  id: string;
  password: string;
}

export async function checkUser(user_data: IUserSignin) {
  const user = await prisma.local_user.findUnique({
    where: {
      user_id: user_data.id,
    },
  });
  if (!user) {
    return { msg: "실패 : 그런 유저 없음", stat: false };
  }
  //비번 compare
  const compareres = await compareSync(
    user_data.password,
    user.password as string
  );

  if (!compareres) {
    return { msg: "실패 : 비번 틀림", stat: false };
  }

  //signin success
  return { msg: "성공 : 들어오셈", stat: true };
  //
}
