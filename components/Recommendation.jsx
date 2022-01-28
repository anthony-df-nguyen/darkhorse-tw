/* This example requires Tailwind CSS v2.0+ */
import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Example(props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="bg-gray-50 overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <svg
          className={classNames(
            props.side === "left" ? "right-full" : "right-0",
            "absolute top-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 hidden lg:block"
          )}
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation">
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse">
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg> */}
        <div className="relative">
          {/* <img
            className="mx-auto h-8"
            src="https://tailwindui.com/img/logos/workcation-logo-sky-600-mark-gray-800-and-sky-600-text.svg"
            alt="Workcation"
          /> */}
          <div className="w-min block mx-auto  text-accent ">
            <DotsHorizontalIcon
              className="text-center h-12 w-12"
              aria-hidden="true"
            />
          </div>
          <blockquote className="">
            <div className="max-w-3xl mx-auto text-left text-md lg:text-xl leading-9 font-md text-gray-600">
              <p>{props.children}</p>
            </div>
            <footer className="">
              <div className=" md:flex md:items-center md:justify-center">
                <div className=" mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    {props.name}
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    {props.title}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
