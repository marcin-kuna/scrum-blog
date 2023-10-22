import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  post: Post;
};

function BlogListItem({ post }: Props) {
  return (
    <div
      key={post._id}
      className="flex flex-col group cursor-pointer overflow-hidden"
    >
      <div className="relative w-full h-80 drop-shadow-xl overflow-hidden">
        <Image
          className="object-cover object-center mx-auto group-hover:scale-110 transition ease delay-100"
          alt={post.mainImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={urlForImage(post.mainImage).url()}
          priority
        />
        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
          <div>
            <p className="font-bold text-[var(--clr-primary)]">{post.title}</p>
            <p className="text-[var(--clr-yellow)] text-xs md:text-base">
              {new Date(post._createdAt).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
            {post.categories.map((category) => (
              <div
                key={post._id}
                className="bg-[var(--clr-yellow)] text-center text-black px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
              >
                <p>{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex-1">
        <p className="line-clamp-2">{post.description}</p>
      </div>

      <p className="mt-2 font-bold flex items-center group-hover:underline decoration-[var(--clr-primary)]">
        Read Post
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--clr-primary)"
          className="ml-2 h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
            clipRule="evenodd"
          />
        </svg>
      </p>
    </div>
  );
}
export default BlogListItem;
