"use client";
import Link from "next/link";
import { use } from "react";
export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  const { articlesId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News article {articlesId}</h1>

      <p>Language: {lang}</p>
      <div>
        <Link href={`/articles/${articlesId}?lang=en`}>English </Link>
        <Link href={`/articles/${articlesId}?lang=es`}>Spanis </Link>
        <Link href={`/articles/${articlesId}?lang=fr`}>French </Link>
      </div>
    </div>
  );
}
