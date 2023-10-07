import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import BlogList from "./components/BlogList";

// const query = groq`
//   *[_type=='post'] | order(_createdAt desc)
// `;
const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h1 className="text-4xl">Welcome to the blog!</h1>
    //   <p>Some content</p>
    // </main>
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
