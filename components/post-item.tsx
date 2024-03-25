import Link from 'next/link';
import React from 'react';
import Tag from './tag';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { buttonVariants } from './ui/button';

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

const PostItem = ({ post }: { post: PostItemProps }) => {
  const { slug, title, description, date, tags } = post;
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={`/${slug}`}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <Link href={`/${slug}`}>
        <div className="max-w-none text-muted-foreground">{description}</div>
      </Link>

      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-2">
            <Calendar className="size-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={`/${slug}`}
          className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
