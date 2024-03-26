import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Information about me',
};

const AboutPage = () => {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-8 md:flex-row items-center md:items-start">
        <div className="min-w-48 max-w-48 flex-col gap-2">
          <Avatar className="size-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-word">
            Software Deveolper
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum modi
          placeat eaque! Libero accusamus nobis quam sed natus perspiciatis
          dolores eligendi, deleniti, dolore sapiente saepe inventore ex
          suscipit! Hic, adipisci! Modi amet enim repudiandae.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
