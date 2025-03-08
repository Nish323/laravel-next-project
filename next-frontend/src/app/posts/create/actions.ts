// app/posts/create/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { Post } from '@/app/types/post';

export async function createPost(formData: FormData) {
  const title = formData.get('title')?.toString() ?? '';
  const body = formData.get('body')?.toString() ?? '';

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  });

  if (!res.ok) {
    throw new Error('投稿の作成に失敗しました');
  }

  redirect('/posts');
}
