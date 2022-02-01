import Page from "../components/page";
import Hero from "../components/hero";
import InfoCard from "../components/info-card";
import Header from "../components/header";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

export default function Contact() {
  const contacts = [
    {
      method: "Email",
      value: "alan@darkhorseadvisor.com",
      href: "mailto:alan@darkhorseadvisor.com",
    },
    {
      method: "Phone",
      value: "714-394-0243",
      href: "tel:714-394-0243",
    },
    {
      method: "LinkedIn",
      value: "LinkedIn",
      href: "https://www.linkedin.com/company/darkhorseadvisor/about/",
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
          title="Contact"
          accent="Me"
        />
      </div>

      <div className="pad-top">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
          <div className="mx-auto text-center">
            {/* <h2
              id="contact-heading"
              class="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl pb-6"
            >
              Get in touch
            </h2> */}
            <Header subtitle="Darkhorse Advisor" title="Contact Me" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {contacts.map((contact) => {
                return (
                  <div key={contact.name}>
                    <InfoCard
                      name={contact.method}
                      href={contact.href}
                      description={contact.value}
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
