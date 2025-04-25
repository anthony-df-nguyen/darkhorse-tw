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
import Image from "next/legacy/image";


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
  // {
  //   name: "Contact",
  //   href: "/contact",
  //   icon: MailIcon,
  // },
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
                  <Image
                    src="/images/horse.svg"
                    layout="fixed"
                    height={36}
                    width={36}
                    alt="horse-icon"
                  />
                  <span className="ml-4 text-2xl text-dark font-extrabold">
                    Darkhorse
                    <span className="text-accent"> Advisor</span>
                  </span>
                </span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:flex items-center space-x-10">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <div className="bg-accent hover-bg cursor-pointer rounded-md px-4 py-2 text-white">
                  Contact Us
                </div>
              </Link>
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
                        <Image
                          src="/images/horse.svg"
                          layout="fixed"
                          height={36}
                          width={36}
                          alt="horse-icon"
                        />
                        <span className="ml-4 text-2xl text-dark font-extrabold">
                          Darkhorse
                          <span className="text-accent"> Advisor</span>
                        </span>
                      </span>
                    </Link>

                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <hr></hr>
                    <nav className="mt-6 grid grid-cols-1 gap-6">
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
                      <hr></hr>
                      <Link href="/contact">
                        <div className="cursor-pointer flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent hover-bg text-white sm:px-8">
                          Contact Us
                        </div>
                      </Link>
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

          {/* Logo cloud */}
        </div>
      </main>
    </div>
  );
}
