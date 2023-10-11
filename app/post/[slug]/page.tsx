import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/app/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 20;

export async function generateStaticParams() {
  const query = groq`
    *[_type == 'post']
    {
      slug
    }
   `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
  } 
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#F7AB0A] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              alt={post.mainImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={urlForImage(post.mainImage).url()}
            />
          </div>
          <section className="p-5 bg-[#F7AB0A] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  alt={post.author.name}
                  src={urlForImage(post.author.image).url()}
                  height={40}
                  width={40}
                />
                <div>
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* TODO: Author BIO ?? */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                    key={category._id}
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}
export default Post;
