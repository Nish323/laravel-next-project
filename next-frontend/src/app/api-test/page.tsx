"use client";

import { useEffect, useState } from "react";

export default function ApiTestPage() {
  const [message, setMessage] = useState<string>("データ取得中...");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("API取得エラー:", err);
        setMessage("API取得に失敗しました");
      });
  }, []);

  return (
    <div>
      <h1>API動作確認</h1>
      <p>{message}</p>
    </div>
  );
}
