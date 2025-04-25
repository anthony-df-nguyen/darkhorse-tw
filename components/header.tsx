import InfoCard from "./info-card";
export default function Header(props: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-semibold text-accent tracking-wide uppercase text-sm lg:text-base">
          {props.subtitle}
        </h2>
        <p className="mt-1 text-2xl font-extrabold text-dark sm:text-2xl sm:tracking-tight lg:text-4xl">
          {props.title}
        </p>
        <div className="text-left max-w-3xl pt-4 mx-auto text-base lg:text-lg text-gray leading-8">
          {props.children}
        </div>
      </div>
    </div>
  );
}
