import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import { GiMagnifyingGlass } from "react-icons/gi";
import { FaHandshake, FaBriefcase } from "react-icons/fa";

const features = [
  {
    name: "Research",
    description:
      "Today market volatility is unprecedented. By applying a market-proven proprietary blend of fundamental and technical analysis, DHA is effectively able to identify and avoid market risk while focusing on systematically uncovering and capturing the right quality and value opportunities.",
    icon: GiMagnifyingGlass,
  },
  {
    name: "Service",
    description:
      "DHA is committed to understanding long and short-term financial and investment objectives, needs, and risk tolerances of each customer. Aligning a well-built investment portfolio for each unique client profile substantially increases the likelihood of achieving positive wealth goals.",
    icon: FaBriefcase,
  },
  {
    name: "Integrity",
    description:
      "DHA serves its clients’ needs first and foremost by acting as an independent fiduciary advisor. DHA has no affiliation with any products or service companies including wholesalers or retail brokerages. Because of this, DHA has no conflict of interest and does not receive any commission fees which assures DHA advice will always be centered on what is best for the client. All client fee arrangements are modest and transparent. The fee is based on the value of the account(s) under management.",
    icon: FaHandshake,
  },
];
export default function Example() {
  return (
    <div className="pad-tb bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="lg:text-center">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase">
            Transactions
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div> */}

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
