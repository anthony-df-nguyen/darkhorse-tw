import Image from "next/image";
import Link from "next/link";
import Page from "../components/page";
import Header from "../components/header";
import InfoCard from "../components/info-card";

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
        <div className="mt-6">
          <a
            href="#"
            className="sm:inline flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent text-white  sm:px-8"
          >
            Services
          </a>
        </div>
      </Header>
      <InfoCard></InfoCard>
    </Page>
  );
}
