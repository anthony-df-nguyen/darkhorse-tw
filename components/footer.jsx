import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import Link from "next/link";

const navigation = {
  main: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/#services",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],

  social: [
    {
      name: "Email",
      href: "mailto:alan@darkhorseadvisor.com",
      icon: AiOutlineMail,
    },
    {
      name: "Phone",
      href: "tel:714-394-0243",
      icon: AiOutlinePhone,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/darkhorseadvisor/about/",
      icon: AiOutlineLinkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto pad-tb px-4 overflow-hidden sm:px-6 lg:px-8 text-center">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <span className="text-base text-gray-400 hover:text-gray-500">
                <Link href={item.href}>{item.name}</Link>
              </span>
            </div>
          ))}
        </nav>
        <div className="mt-6 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href}>
              <span className="sr-only text-gray hover-text">{item.name}</span>
              {/* <img className="h-10 w-10" src={item.icon} /> */}
              <span className="text-3xl text-gray-400 hover:text-gray-500">
                <item.icon></item.icon>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-6 text-base text-gray-400">Darkhorse Advisor LLC.</p>
      </div>
    </footer>
  );
}
