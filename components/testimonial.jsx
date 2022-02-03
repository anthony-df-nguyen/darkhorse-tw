import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Recommendation(props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="overflow-hidden text-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote>
            <div className="max-w-3xl mx-auto text-base lg:text-lg text-gray italic">
              <p className="border-l-4 pl-4 border-emerald-500">
                {props.children}
              </p>
            </div>
            <div className="mt-4">
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

                  <div className="text-base font-medium text-gray mt-">
                    {props.title}
                  </div>
                </div>
              </div>
            </div>
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
