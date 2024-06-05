"use server";
// db logic function
import prisma from "../../prisma/prisma";

export async function createUser() {
  const user = await prisma.user_test.create({
    data: {
      name: "hyojin2",
      email: "chemic00@naver.com",
      image_url:
        "https://velog.velcdn.com/images%2Frerang%2Fpost%2F8c40e55b-e677-4641-a5ad-fbcb603cf7b2%2Finternship_velog_preview.png",
    },
  });

  return user;
}
