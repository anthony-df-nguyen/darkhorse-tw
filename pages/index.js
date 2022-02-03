import Image from "next/image";
import Hero from "../components/hero";
import Link from "next/link";
import Page from "../components/page";
import InfoCard from "../components/info-card";
import Header from "../components/header";
import Testimonial from "../components/testimonial";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Services from "../components/services";

import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import { AiTwotoneThunderbolt, AiTwotoneEdit } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      name: "Research",
      description:
        "Today market volatility is unprecedented. By applying a market-proven proprietary blend of fundamental and technical analysis, DHA is effectively able to identify and avoid market risk while focusing on systematically uncovering and capturing the right quality and value opportunities.",
      icon: <FaBookOpen />,
    },
    {
      name: "Service",
      description:
        "DHA is committed to understanding long and short-term financial and investment objectives, needs, and risk tolerances of each customer. Aligning a well-built investment portfolio for each unique client profile substantially increases the likelihood of achieving positive wealth goals.",
      icon: <AiTwotoneEdit />,
    },
    {
      name: "Integrity",
      description:
        "As an independent fiduciary advisor, DHA has no affiliation with any products or service companies including wholesalers or retail brokerages. DHA has no conflicts of interest and does not receive any commission fees, assuring that advice is always centered on what is best for the client. All client fee arrangements are modest and transparent, based on the value of the account(s) under management.",
      icon: <AiTwotoneThunderbolt />,
    },
  ];

  return (
    <Page
      title="Darkhorse Advisor"
      description="Individualized financial planning and advice."
    >
      <Hero
        image="/images/method.jpg"
        title="Darkhorse"
        accent="Advisor"
        text="Individualized financial planning and advisory."
        cta={true}
      />
      <div className="pad-top">
        <Header
          subtitle="Three Core Tenets"
          title="Research, service and integrity."
        >
          Darkhorse Advisor LLC. is an independent financial advisory firm
          located in Newport Beach, California. Founded by Alan Flores, a
          registered investment advisor with 27 years of financial portfolio
          management, industry expertise, and market analysis. Alan has built a
          long-term client base from his commitment to three core tenets.
        </Header>
      </div>
      <div className="pt-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="mx-auto text-center">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name}>
                  <InfoCard
                    name={feature.name}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pad-tb">
        <Services />
      </div>
      {/* Testimonials */}
      <div className="pad-top bg-gray-50">
        <Header subtitle="Darkhorse Advisor" title="Testimonials" />

        <Testimonial
          name="Carlos and Mercedes Carchi"
          title="Sr. Network Manager, Belkin International"
          side="left"
        >
          {`"Over the past 13 years, Alan has provided us a framework of a thorough planning process and ongoing quarterly portfolio reviews that has helped us make informed decisions about our money, and with a steady hand, guided us through the good times and bad ones"`}
        </Testimonial>

        <Testimonial
          name="Dr. Brad and Kathy de Marquette"
          title="Emergency Physician, Kaiser Permanante"
          side="right"
        >
          {`"Alan has carefully listened and has tailor-made a thoughtful financial plan that matches our comfort level and our long-term wishes for our family. We are confident with his asset management process that allows us the freedom to focus on the other things"`}
        </Testimonial>
        <Testimonial
          name="Dr. Janet K. Ruffing, RSM"
          title="Yale University"
          side="left"
        >
          {`"You are a true scholar in your research efforts and your personal investment guidance"`}
        </Testimonial>
      </div>
    </Page>
  );
}
