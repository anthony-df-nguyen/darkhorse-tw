import React from "react";

export type InfoCardProps = {
  icon?: React.ReactNode;
  name: string;
  description: string;
  href?: string;
};

export default function InfoCard({
  icon,
  name,
  description,
  href,
}: InfoCardProps) {
  return (
    <div className="flow-root bg-white sm:rounded-lg pb-6 px-6 h-full shadow-sm">
      {icon && (
        <div className="-mt-6">
          <span className="p-3 inline-flex items-center justify-center bg-accent rounded-md shadow-lg">
            <span className="text-white text-2xl" aria-hidden="true">
              {icon}
            </span>
          </span>
        </div>
      )}
      <h3 className="mt-6 text-2xl font-bold text-dark tracking-wide">
        {name}
      </h3>

      {href ? (
        <p className="mt-4 text-base leading-8 text-gray hover-text">
          <a className="underline" href={href}>
            {description}
          </a>
        </p>
      ) : (
        <p className="mt-6 text-base text-center leading-8">{description}</p>
      )}
    </div>
  );
}
