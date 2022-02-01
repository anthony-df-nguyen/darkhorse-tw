import Image from "next/image";
import Link from "next/link";
import Page from "../components/page";
import InfoCard from "../components/info-card";
import Header from "../components/header";
import Recommendation from "../components/recommendation";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Services from "../components/services";

export default function Home() {
  return (
    <Page
      title="Darkhorse Advisor"
      description="Individualized financial planning and advice."
    >
      <Header
        subtitle="Three Core Tenets"
        title="Research, service and integrity."
        bg="bg-white"
      >
        Darkhorse Advisor LLC. is an independent financial advisory firm located
        in Newport Beach, California. Founded by Alan Flores, a registered
        investment advisor with 27 years of financial portfolio management,
        industry expertise, and market analysis. Alan has built a long-term
        client base from his commitment to three core tenets.
      </Header>
      <InfoCard />
      <Services />

      {/* Testimonials */}
      <Header
        subtitle="Darkhorse Advisor"
        title="Testimonials"
        bg="bg-gray-50"
      />
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
