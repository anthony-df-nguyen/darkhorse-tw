import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const navigation = {
  main: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
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
      icon: <AiOutlineMail className="h-8 w-8" aria-hidden="true" />,
    },
    {
      name: "Phone",
      href: "tel:714-394-0243",
      icon: <AiOutlinePhone className="h-8 w-8" aria-hidden="true" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/darkhorseadvisor/about/",
      icon: <AiOutlineLinkedin className="h-8 w-8" aria-hidden="true" />,
    },
  ],
};

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto pad-tb px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base  text-gray-400">
          Darkhorse Advisor LLC.
        </p>
      </div>
    </footer>
  );
}
