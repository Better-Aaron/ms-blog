import { posts } from '#site/content';
import { MDXContent } from '@/components/mdx-components';
import { Tag } from '@/components/tag';
import { notFound } from 'next/navigation';
import React from 'react';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
interface PostPageProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = async (params: PostPageProps['params']) => {
  const slug = params?.slug?.join('/');
  console.log(slug);
  const post = posts.find(
    (post) => post.slugAsParams === slug.replace(/%20/g, ' ')
  );

  return post;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);
  if (!post) {
    return {};
  }
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);
  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export const generateStaticParams = async (): Promise<
  PostPageProps['params'][]
> =>
  posts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      <div className=" flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description && (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      )}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
};

export default PostPage;
