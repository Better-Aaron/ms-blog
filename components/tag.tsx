import Link from 'next/link';
import { cn } from '@/lib/utils';
import { badgeVariants } from './ui/badge';

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export const Tag = ({ tag, current, count }: TagProps) => {
  return (
    <Link
      className={cn(
        badgeVariants({
          variant: current ? 'default' : 'secondary',
          className: 'no-underline rounded-md',
        })
      )}
      href={`/tags/${tag}`}
    >
      {tag} {count && `(${count})`}
    </Link>
  );
};
