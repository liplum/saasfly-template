import * as React from "react";
import Image from "next/image";
import cn from "@/components/cn";
import { ThemeToggle } from "@/components/theme-toggle";
import iconImage from "@/app/favicon.ico"

export function SiteFooter({
  className,
  dict,
}: {
  className?: string;
  params: {
    lang: string;
  };

  dict: Record<string, string | Record<string, string>>;
}) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src={iconImage}
            width="36"
            height="36"
            alt=""
          />
          <p className="text-center text-sm leading-loose md:text-left">
            {dict.copyright as string}
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
