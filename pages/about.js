import Page from "../components/page";
import Hero from "../components/hero";
import Image from "next/image"

export default function About() {
  const aboutMe = [
    {
      name: "Competitive Biking",
      imageUrl: "/images/biking.jpg",
    },
    {
      name: "Surfing",
      imageUrl: "/images/surfing.jpg",
    },
  ];
  return (
    <Page title="About" description="Learn more about Alan.">
      <Hero
        title="About Me"
        image="/images/aboutme.jpg"
        cta={true}
        cta_text="Contact Us"
        cta_href="/contact"
        text="Learn more about Alan Flores, Darkhorse Advisor."
      />

      {/* Professional Experience */}
      <div className="bg-gray-100 pad-tb overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base lg:grid lg:grid-cols-3 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-accent font-semibold tracking-wide uppercase">
                The Darkhorse Advisor
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Meet Alan Flores
              </h3>
            </div>
          </div>
          {/* Picture and Text */}
          <div className="mt-6 md:grid md:grid-cols-2 md:gap-8">
            <div className="relative md:row-start-1 md:col-start-2">
              <svg
                className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto  md:max-w-none">
                <div className="aspect-w-4 aspect-h-4 md:mx-auto">
                  <Image
                    className="rounded-lg shadow-lg object-cover object-top"
                    src="/images/alan.png"
                    alt="Portrait of Alan Flores"
                    width={1184}
                    height={1376}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 leading-8 text-gray">
              <div className=" mx-auto md:max-w-none">
                <p>
                  I have worked as a Financial Consultant since 1993. I was a
                  Managing Partner at Clearview, an Independent fee-only
                  investment advisory firm. Prior to this, I spent 15 years with
                  Wall Street firms including UBS Financial Services, AG
                  Edwards, and Smith Barney.
                </p>
              </div>
              <div className="mt-5 mx-auto md:max-w-none md:row-start-1 md:col-start-1 leading-8 text-gray">
                <p>
                  I earned my Bachelor of Arts Degree in political science from
                  the University of California, Irvine.
                </p>
                <p>
                  I am very active in my community, currently serving on the
                  Independent Finance Audit Committee for the UCI Alumni
                  Association; I was a member on the Board of Directors from
                  1997-2002.
                </p>
              </div>

              <h2 className="mt-6 text-base text-accent font-semibold tracking-wide uppercase mx-auto">
                Experience
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 leading-8 text-gray  mx-auto">
                <div>
                  <div className="font-bold">Managing Partner</div>
                  <div className="-mt-1">
                    {" "}
                    Clearview Investment Partners LLC
                  </div>
                  <div className="text-xs">May 2009 - Present</div>
                </div>
                <div>
                  <div className="font-bold">Vice President - Investments</div>
                  <div className="-mt-1">UBS Wealth Management</div>
                  <div className="text-xs">June 2002 - May 2009</div>
                </div>
                <div>
                  <div className="font-bold">Vice President - Investments</div>
                  <div className="-mt-1">A.G. Edwards</div>
                  <div className="text-xs">June 1997 - June 2002</div>
                </div>
                <div>
                  <div className="font-bold">Financial Consultant</div>
                  <div className="-mt-1">Smith Barney</div>
                  <div className="text-xs">October 1993 - June 1997</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Section */}
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-accent">
                About Me
              </h2>
              <p className="text-lg text-gray-500">
                I live in Newport Beach with my wife, Sandy, and my sons, Sean
                and Jack. I am passionate about living a very active lifestyle
                which includes working out at gym, running along the beach,
                riding my bikes, and surfing.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {aboutMe.map((person, i) => (
                  <li key={i}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <Image
                          className="object-cover shadow-lg rounded-lg"
                          src={person.imageUrl}
                          alt=""
                          layout="fill"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
