import Header from "./header";

export default function Services() {
  return (
    <div className="relative pad-tb bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-40 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={192}
            fill="none"
            viewBox="0 0 404 192"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={192}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={192}
            fill="none"
            viewBox="0 0 404 192"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <Header subtitle="Darkhorse Advisor" title="Management Services">
          Darkhorse Advisor provides clients with wealth management services
          which include a broad range of comprehensive financial planning and
          consulting services management of investment portfolios.{" "}
          <span>
            Ready to receive quality advice and services?{" "}
            <a
              href="/pdf-files/darkhorse-adv.pdf"
              download="darkhorse-adv"
              className="text-accent"
            >
              Download Form ADV
            </a>
          </span>
        </Header>
        <div className="mt-6 prose prose-lg text-base lg:text-md text-gray mx-auto">
          <div className="flex place-content-evenly mr-12">
            <ul role="list">
              <li>Business Planning</li>
              <li>Estate Planning</li>
              <li>Cash Flow</li>
              <li>Tax Needs</li>
            </ul>
            <ul>
              <li>Investment</li>
              <li>Insurance</li>
              <li>Retirement</li>
              <li>Education</li>
            </ul>
          </div>
          <figure>
            {/* <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            /> */}
          </figure>
        </div>
      </div>
    </div>
  );
}
