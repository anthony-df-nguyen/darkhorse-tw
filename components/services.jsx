import Header from "./header";
import { IoMdDownload } from "react-icons/io";

export default function Services() {
  const servicesGridOne = [
    {
      title: "Business Planning",
    },
    {
      title: "Estate Planning",
    },
    {
      title: "Investment",
    },
    {
      title: "Insurance",
    },
    {
      title: "Retirement",
    },
    {
      title: "Education",
    },
    {
      title: "Tax needs",
    },
    {
      title: "Cash flow needs",
    },
  ];

  // const servicesGridTwo = [
  //   {
  //     title: "Retirement",
  //   },
  //   {
  //     title: "Education",
  //   },
  //   {
  //     title: "Tax needs",
  //   },
  //   {
  //     title: "Cash flow needs",
  //   },
  // ];

  return (
    <div className="relative overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true">
          <svg
            className="absolute top-40 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={192}
            fill="none"
            viewBox="0 0 404 192">
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              height={192}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={192}
            fill="none"
            viewBox="0 0 404 192">
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
          <div className="mt-6 md:mt-12 grid grid-cols-2 rounded-lg overflow-hidden gap-1">
            {servicesGridOne.map((service) => (
              <div key={service.title} className="p-5 bg-gray-100 ">
                <div className="relative">
                  <h3 className="text-sm font-semibold text-dark text-center ">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-12">
            <a
              href="/pdf-files/darkhorse-adv.pdf"
              download="darkhorse-adv"
              className="text-accent font-semibold underline flex flex-row items-center gap-2 justify-center ">
              <div className="">
                <IoMdDownload />
              </div>
              <div> Download the Darkhorse Advisor ADV Form</div>
            </a>
          </div>
        </Header>
      </div>
    </div>
  );
}
