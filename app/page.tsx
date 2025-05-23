import Hero from "@/components/Hero";
import InfoCard, { InfoCardProps } from "../components/InfoCard";
import Header from "../components/Text/IntroHeader";
import Services from "../components/Services/Services";
import { AiTwotoneThunderbolt, AiTwotoneEdit } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";

export default function Home() {
  const features: InfoCardProps[] = [
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
  const currentYear = new Date().getFullYear() 
  const yearsOfExperience = currentYear - 1994;

  return (
    <div>
      <Hero
        image="/images/method.jpg"
        title="Darkhorse Advisor"
        text="Individualized Wealth Management"
        cta={true}
        cta_text="Contact Us"
        cta_href="/contact"
      />
      <div className="bg-gray-100 pad-tb">
        <Header
          subtitle="Three Core Tenets"
          title="Research. Service. Integrity."
        >
          {`Darkhorse Advisor LLC. is an independent financial advisory firm in Newport Beach, California. It was founded by Alan Flores, a registered investment advisor with ${yearsOfExperience} years of financial portfolio management, industry expertise, and market analysis. Alan has built a long-term client base from his commitment to three core tenets.`}
        </Header>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pad-top">
          <div className="mx-auto text-center">
            <div className="grid grid-cols-1 gap-14 lg:gap-8 lg:grid-cols-3">
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
      {/* Services */}
      <div className="pad-tb" id="services">
        <Services />
      </div>
    </div>
  );
}
