export default function InfoCard(props) {
  return (
    <div className="flow-root bg-white sm:rounded-lg pb-6 px-6 h-full shadow-sm">
      <div className="">
        {props.icon && (
          <div className="-mt-6">
            <span className="p-3 inline-flex items-center justify-center bg-accent rounded-md shadow-lg">
              <span className="text-white text-2xl" aria-hidden="true">
                {props.icon}
              </span>
            </span>
          </div>
        )}
        <h3 className="mt-6 text-2xl font-bold text-dark tracking-wide">
          {props.name}
        </h3>

        {props.href ? (
          <p className="mt-4 text-base  leading-8 text-gray hover-text">
            <a className="underline" href={props.href}>
              {props.description}
            </a>
          </p>
        ) : (
          <p className="mt-6 text-base text-center leading-8 text-gray-500">
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
}
