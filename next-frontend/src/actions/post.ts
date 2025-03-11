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

export const updatePost = async (
  id: string,
  formData: FormData
): Promise<void> => {
  const updatedPost: Post = {
    title: formData.get("title")?.toString() ?? "",
    body: formData.get("body")?.toString() ?? "",
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedPost.title,
        body: updatedPost.body,
      }),
    });
  } catch (error) {
    state.erro = "投稿の更新に失敗しました";
    return state;
  }

  redirect(`/posts/${id}`);
};

export async function deletePost(formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) throw new Error("IDが見つかりません");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorDetail = await res.text(); // エラーの詳細を取得
    throw new Error(`削除に失敗しました: ${errorDetail}`);
  }

  redirect("/posts");
}
