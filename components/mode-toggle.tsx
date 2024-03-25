'use client';

import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

const ModeToggle = ({ className }: { className: string }) => {
  const { setTheme } = useTheme();

  return (
    <div className={className}>
      <Button variant="ghost" className="w-10 px-0">
        <Sun
          className="size-[1.2rem] transition-all scale-100 dark:scale-0"
          onClick={() => setTheme('dark')}
        />
        <Moon
          className="absolute size-[1.2rem] transition-all scale-0 dark:scale-100"
          onClick={() => setTheme('light')}
        />
      </Button>
    </div>
  );
};

export default ModeToggle;
