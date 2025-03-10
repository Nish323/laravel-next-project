"use client";
import { updatePost } from "@/actions/post";
import Link from "next/link";
import React from "react";

export default function UpdatePost({ params }: { params: { id: string } }) {
	const { id } = React.use(params);

  return (
    <main>
      <h1>ブログ更新</h1>
      <form action={(formData: FormData) => updatePost(id, formData)}>
        <div>
          <label htmlFor="title">Title : </label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="body">Body : </label>
          <input type="text" id="body" name="body" required />
        </div>
        <button type="submit">更新</button>
      </form>
      <div>
        <Link href="/posts">戻る</Link>
      </div>
    </main>
  );
}
