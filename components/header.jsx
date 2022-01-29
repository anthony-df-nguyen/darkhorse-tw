import InfoCard from "../components/info-card";
export default function Header(props) {
  return (
    <div className={props.bg}>
      <div className="max-w-7xl mx-auto px-4 pad-top sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-semibold text-accent tracking-wide uppercase text-sm lg:text-base">
            {props.subtitle}
          </h2>
          <p className="mt-1 text-2xl font-extrabold text-dark sm:text-2xl sm:tracking-tight lg:text-4xl">
            {props.title}
          </p>
          <p className="text-left max-w-3xl pt-4 mx-auto text-base lg:text-lg text-gray leading-8">
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
}
