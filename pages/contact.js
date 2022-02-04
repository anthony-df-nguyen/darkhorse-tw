import Page from "../components/page";
import Hero from "../components/hero";
import InfoCard from "../components/info-card";
import Header from "../components/header";
import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

export default function Contact() {
  const contacts = [
    {
      method: "Email",
      value: "alan@darkhorseadvisor.com",
      href: "mailto:alan@darkhorseadvisor.com",
      icon: <AiFillMail></AiFillMail>,
    },
    {
      method: "Phone",
      value: "714-394-0243",
      href: "tel:714-394-0243",
      icon: <AiFillPhone></AiFillPhone>,
    },
    {
      method: "LinkedIn",
      value: "LinkedIn",
      href: "https://www.linkedin.com/company/darkhorseadvisor/about/",
      icon: <AiFillLinkedin></AiFillLinkedin>,
    },
  ];

  return (
    <Page
      title="Contact"
      description="Contact Darkhorse Advisor for financial consulting and planning."
    >
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
            <Header subtitle="Darkhorse Advisor" title="Contact Me" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {contacts.map((contact) => {
                return (
                  <div key={contact.name}>
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
    </Page>
  );
}
