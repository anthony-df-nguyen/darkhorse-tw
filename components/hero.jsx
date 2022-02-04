import Link from "next/link";
// import Image from "next/image";

export default function Hero(props) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" src={props.image} />
            <div className="absolute inset-0 bg-gray-200 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-60 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">{props.title}</span>{" "}
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl font-semibold text-white sm:max-w-3xl">
              {props.text}
            </p>
            {props.cta && (
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <Link href="/contact">
                    <span className="cursor-pointer flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent hover-bg text-white sm:px-8">
                      Contact Me
                    </span>
                  </Link>
                </div>
              </div>
            )}
            {props.policy && (
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <Link href="/privacy-policy">
                    <span className="cursor-pointer flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent hover-bg text-white sm:px-8">
                      Privacy Policy
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
