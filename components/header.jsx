import InfoCard from "../components/info-card";
export default function Header(props) {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 pad-tb sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-semibold text-accent tracking-wide uppercase text-sm lg:text-base">
            {props.subtitle}
          </h2>
          <p className="mt-1 text-2xl font-extrabold text-dark sm:text-2xl sm:tracking-tight lg:text-4xl">
            {props.title}
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-base lg:text-lg text-gray">
            {props.children}
          </p>
          <InfoCard></InfoCard>
        </div>
      </div>
    </div>
  );
}
