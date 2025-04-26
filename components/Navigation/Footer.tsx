import Link from "next/link";
import { footer_links } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-white pad-tb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {footer_links.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <span className="text-base  hover:text-gray-900">
                <Link href={item.href}>{item.name}</Link>
              </span>
            </div>
          ))}
        </nav>
        <div className="mt-6 flex justify-center space-x-6">
          {footer_links.social.map((item) => (
            <a key={item.name} href={item.href}>
              <span className="sr-only text-gray hover-text">{item.name}</span>
              {/* <img className="h-10 w-10" src={item.icon} /> */}
              <span className="text-2xl text-accent hover-text">
                <item.icon></item.icon>
              </span>
            </a>
          ))}
        </div>
        <div className="text-base text-gray text-center">
          <Link href="/privacy-policy">
            <p className="mt-6 cursor-pointer underline hover:text-gray-900">
              Privacy Policy
            </p>
          </Link>
          <p className="mt-6">Darkhorse Advisor LLC.</p>
        </div>
      </div>
    </footer>
  );
}
