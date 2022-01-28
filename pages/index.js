import Image from "next/image";
import Link from "next/link";
import Page from "../components/page";
import Header from "../components/header";
// import InfoCard from "../components/info-card";
import ImagePanel from "../components/ImagePanel";
import Recommendation from "../components/Recommendation";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <Page
      title="Darkhorse Advisor"
      description="Individualized financial planning and advice."
    >
      <Header
        subtitle="Three Core Tenets"
        title="Research, service and integrity."
      >
        Darkhorse Advisor LLC. is an independent financial advisory firm located
        in Newport Beach, California. Founded by Alan Flores, a registered
        investment advisor with 27 years of financial portfolio management,
        industry expertise, and market analysis. Alan has built a long-term
        client base from his commitment to three core tenets.
        {/* <div className="mt-6">
          <a
            href="#"
            className="sm:inline flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent text-white  sm:px-8">
            Services
          </a>
        </div> */}
      </Header>
      <ImagePanel />
      <Recommendation
        name="Carlos and Mercedes Carchi"
        title="Sr. Network Manager, Belkin International"
        side="left"
      >
        {`"Over the past 13 years, Alan has provided us a framework of a thorough planning process and ongoing quarterly portfolio reviews that has helped us make informed decisions about our money, and with a steady hand, guided us through the good times and bad ones"`}
      </Recommendation>

      <Recommendation
        name="Dr. Brad and Kathy de Marquette"
        title="Emergency Physician, Kaiser Permanante"
        side="right"
      >
        {`"Alan has carefully listened and has tailor-made a thoughtful financial plan that matches our comfort level and our long-term wishes for our family. We are confident with his asset management process that allows us the freedom to focus on the other things"`}
      </Recommendation>
      <Recommendation
        name="Dr. Janet K. Ruffing, RSM"
        title="Yale University"
        side="left"
      >
        {`"You are a true scholar in your research efforts and your personal investment guidance"`}
      </Recommendation>
    </Page>
  );
}
