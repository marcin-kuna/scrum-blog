import ClientSideRoute from "./ClientSideRoute";
import BlogListItem from "./BlogListItem";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[var(--clr-yellow)] mb-10 mx-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-10">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <BlogListItem post={post} />
          </ClientSideRoute>
        ))}
      </div>
      <hr className="border-[var(--clr-yellow)] mx-10" />
    </div>
  );
}
export default BlogList;
