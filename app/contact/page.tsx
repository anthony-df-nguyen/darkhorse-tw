import { Metadata } from "next";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import IntroHeader from "@/components/Text/IntroHeader";
import { contacts } from "./constants";

export const metadata: Metadata = {
  title: "Darkhorse Advisor | Contact",
  description:
    "Contact Darkhorse Advisor for financial consulting and planning.",
  keywords:
    "invest, portfolio, advisor, services, alan, flores, financial, consultant, business planning, investment, insurance, retirement, education, estate planning, tax, cash flow",
  authors: [{ name: "Web Developer: Kenneth Kieu" }],
  robots: "index, follow",
};

export default function Contact() {
  return (
    <div>
      {" "}
      <div>
        <Hero
          image="/images/testimonial-min.jpeg"
          title="Contact Me"
          text="Contact Darkhorse Advisor through Email, Phone or LinkedIn."
        />
      </div>
      <div className="bg-gray-100 pad-tb">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <IntroHeader
              subtitle="Darkhorse Advisor"
              title="Contact Me"
            ></IntroHeader>
            <div className="pad-top grid grid-cols-1 gap-14 lg:gap-8 lg:grid-cols-3 pt-4 sm:pt-12">
              {contacts.map((contact) => {
                return (
                  <div key={contact.method}>
                    <InfoCard
                      name={contact.method}
                      href={contact.href}
                      description={contact.value}
                      icon={contact.icon}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
