import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Recommendation(props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="bg-gray-50 overflow-hidden text-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="">
            <div className="max-w-3xl mx-auto text-base lg:text-lg text-gray">
              <p>{props.children}</p>
            </div>
            <footer>
              <div className=" md:flex md:items-center md:justify-center">
                <div className="text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-dark">
                    {props.name}
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray">
                    {props.title}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
          <div className="w-min block mx-auto text-accent py-8">
            <DotsHorizontalIcon
              className="text-center h-10 w-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
