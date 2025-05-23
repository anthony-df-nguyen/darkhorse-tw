import Link from "next/link";
import Image from "next/image";
import React from "react";

export type HeroProps = {
  image: string;
  title: string;
  text?: string;
  cta?: boolean;
  cta_text?: string;
  cta_href?: string;
};

export default function Hero({
  image,
  title,
  text,
  cta,
  cta_text,
  cta_href,
}: HeroProps) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
                alt="Darkhorse Advisor"
              />
            </div>
            <div className="absolute inset-0 bg-gray-200 mix-blend-multiply" />
          </div>

          <div className="relative px-4 py-60 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-wide sm:text-5xl lg:text-6xl">
              <span className="text-white">{title}</span>
            </h1>

            <p className="mt-6 max-w-lg mx-auto text-center text-xl lg:text-2xl font-light text-white sm:max-w-3xl">
              {text}
            </p>

            {cta && cta_href && cta_text && (
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 w-fit mx-auto sm:space-y-0 sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <Link href={cta_href}>
                    <span className="cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent hover-bg text-white">
                      {cta_text}
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
