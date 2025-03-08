'use client';
import Link from 'next/link';
import { createPost } from './actions';

export default function CreatePost() {
  return (
    <main>
      <h1>ブログ作成</h1>
      {/* action属性にサーバーアクション関数を指定 */}
      <form action={createPost}>
        <div>
          <label htmlFor="title">Title : </label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="body">Body : </label>
          <input type="text" id="body" name="body" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <Link href="/posts">戻る</Link>
      </div>
    </main>
  );
}
