import { posts } from '#site/content';
import PostItem from '@/components/post-item';
import { sortPosts } from '@/lib/utils';

const BlogPage = async () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things dev.
          </p>
        </div>
      </div>
      <div className="">
        <div className="">
          <hr className="mt-8" />
          {displayPosts?.length > 0 ? (
            <ul>
              {displayPosts.map((post) => {
                return (
                  <li key={post.slug}>
                    <PostItem post={post} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
