"use server";

import { Post } from "@/app/types/post";
import { redirect } from "next/navigation";

export const createPost = async (formData: FormData): Promise<void> => {
  const newPost: Post = {
    title: formData.get("title")?.toString() ?? "",
    body: formData.get("body")?.toString() ?? "",
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newPost.title, body: newPost.body }),
    });
  } catch (error) {
    state.error = "投稿の作成に失敗しました";
    return state;
  }

  redirect("/posts");
};
