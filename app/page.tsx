import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import BlogList from "./components/BlogList";

const query = groq`
  *[_type == 'post'] | order(_createdAt desc) {
    ...,
    author->,
    categories[]->
  } 
`;

export const revalidate = 20;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
