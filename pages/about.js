import Page from "../components/page";
import Hero from "../components/hero";
import Header from "../components/header";
import { CameraIcon } from "@heroicons/react/solid";

export default function () {
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

      <div className="bg-gray-100 pad-tb overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-accent font-semibold tracking-wide uppercase">
                The Darkhorse Advisor
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Meet Alan Flores
              </h3>
            </div>
          </div>
          <div className="mt-6 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true">
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse">
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
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <div className="aspect-w-6 aspect-h-7 lg:mx-auto">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="/images/alan.png"
                    alt="Portrait of Alan Flores"
                    width={1184}
                    height={1376}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 leading-8 text-gray">
              <div className="max-w-prose mx-auto lg:max-w-none">
                <p>
                  I have worked as a Financial Consultant since 1993. I was a
                  Managing Partner at Clearview, an Independent fee-only
                  investment advisory firm. Prior to this, I spent 15 years with
                  Wall Street firms including UBS Financial Services, AG
                  Edwards, and Smith Barney.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 leading-8 text-gray">
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
                <h3>More About Alan</h3>
                <p>
                  I live in Newport Beach with my wife Sandy, and sons Sean and
                  Jack. I am passionate about living a very active lifestyle
                  including gym workouts, beach runs, bike rides and surfing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
