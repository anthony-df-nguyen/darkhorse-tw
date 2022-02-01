import React from "react";

export default function ImagePanel() {
  return (
    <div className="relative pad-top bg-white pad-tb">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-indigo-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="hidden lg:block object-cover object-center rounded-3xl shadow-2xl"
                  src="/images/services2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-accent lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-accent-dark"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="text-3xl font-extrabold text-white"
                id="join-heading"
              >
                Services{" "}
              </h2>
              <span className="text-white underline uppercase font-bold text-sm hover:text-gray-100">
                Download ADV
              </span>
              <p className="text-lg text-white">
                Our wealth management services which include a broad range of
                comprehensive financial planning and consulting services
                management of investment portfolios.
              </p>
              <div className="mx-auto text-white">
                <ul
                  role="list"
                  className="list-disc grid md:grid-cols-2 ml-4 lg:ml-2"
                >
                  <li>Business Planning</li>
                  <li>Estate Planning</li>
                  <li>Cash Flow Needs</li>
                  <li>Tax Needs</li>
                  <li>Investment</li>
                  <li>Insurance</li>
                  <li>Retirement</li>
                  <li>Education</li>
                </ul>
              </div>
              {/* <a
                className="block w-full py-3 px-5 text-center border border-transparent rounded-md shadow-md text-base font-medium text-dark bg-gray-50 hover:bg-gray-200 sm:inline-block sm:w-auto"
                href="/pdf-files/darkhorse-adv.pdf"
                download="Darkhorse ADV"
              >
                ADV Form
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
