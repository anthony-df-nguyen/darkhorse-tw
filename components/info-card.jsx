import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import { GiMagnifyingGlass } from "react-icons/gi";

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
    icon: ScaleIcon,
  },
  {
    name: "Integrity",
    description:
      "DHA serves its clients’ needs first and foremost by acting as an independent fiduciary advisor. DHA has no affiliation with any products or service companies including wholesalers or retail brokerages. Because of this, DHA has no conflict of interest and does not receive any commission fees which assures DHA advice will always be centered on what is best for the client. All client fee arrangements are modest and transparent. The fee is based on the value of the account(s) under management.",
    icon: LightningBoltIcon,
  },
];
export default function InfoCard() {
  return (
    <div className="relative bg-white pad-top">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-sky-600 rounded-md shadow-lg">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
