// app/posts/page.tsx
export default async function PostIndex() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
  })
  const posts = await res.json()

  return (
    <div>
      <h1>Blog Name</h1>
      {posts.map((post: { id: number; title: string; body: string }) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}