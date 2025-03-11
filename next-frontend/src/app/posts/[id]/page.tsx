import { deletePost } from "@/actions/post";
import { Post } from "@/app/types/post";
import Link from "next/link";

export default async function PostShow({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  const post: Post = await res.json();

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <div>
        <Link href={`/posts/${id}/edit`}>編集</Link>
      </div>
      <div>
        <Link href="/posts">戻る</Link>
      </div>
      <div>
        <form action={deletePost}>
          <input type="hidden" name="id" value={id} />
          <button type="submit">削除</button>
        </form>
      </div>
    </>
  );
}
