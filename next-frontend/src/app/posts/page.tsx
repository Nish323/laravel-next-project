import Link from "next/link";
import { Post } from "../types/post";

// app/posts/page.tsx
export default async function PostIndex() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
  })
  const posts: Post = await res.json()

  return (
    <div>
      <h1>Blog Name</h1>
      <Link href={`/posts/create`}>ブログ作成</Link>
      {posts.map((post: { id: number; title: string; body: string }) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} className="gap-4 text-blue-400">{post.title}</Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}