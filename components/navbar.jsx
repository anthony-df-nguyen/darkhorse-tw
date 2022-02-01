/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
  HomeIcon,
  FolderIcon,
  UserIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Services",
    href: "/#services",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "About",
    href: "/about",
    icon: UserIcon,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: MailIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
              <Link href="/">
                <span className="flex items-center cursor-pointer">
                  <img
                    className="inline h-10 w-auto sm:h-10 bg-accent rounded-md"
                    src="images/horse.svg"
                    alt="horse-icon"
                  />
                  <span className="ml-4 text-2xl text-dark font-extrabold ">
                    Darkhorse Advisor
                  </span>
                </span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              ))}
            </Popover.Group>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <Link href="/">
                      <span className="flex items-center cursor-pointer">
                        <img
                          className="inline h-10 w-auto sm:h-10 bg-accent rounded-md"
                          src="images/horse.svg"
                          alt="horse-icon"
                        />
                        <span className="ml-4 text-xl text-dark font-extrabold ">
                          Darkhorse Advisor
                        </span>
                      </span>
                    </Link>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <span className="-m-3 p-3 flex items-center rounded-lg cursor-pointer">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-accent text-white">
                              <item.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-500">
                              {item.name}
                            </div>
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative  pb-16">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="images/method.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gray-200 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-60 sm:px-6 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="text-white">Darkhorse</span>{" "}
                    <span className="text-accent">Advisor</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl font-semibold text-white sm:max-w-3xl">
                    Individualized financial planning and advisory.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                      <Link href="/contact">
                        <span className="cursor-pointer flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent hoverBG text-white sm:px-8">
                          Contact Me
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
        </div>
      </main>
    </div>
  );
}
