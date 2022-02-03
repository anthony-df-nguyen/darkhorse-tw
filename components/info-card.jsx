export default function InfoCard(props) {
  return (
    <div className="pt-6">
      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
        <div className="mt-6">
          {props.icon && (
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-accent rounded-md shadow-lg">
                <span className="text-white text-2xl" aria-hidden="true">
                  {props.icon}
                </span>
              </span>
            </div>
          )}
          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
            {props.name}
          </h3>
          {props.href ? (
            <p className="mt-5 text-base leading-8 text-gray hover-text">
              <a className="underline" href={props.href}>
                {props.description}
              </a>
            </p>
          ) : (
            <p className="mt-5 text-base leading-8 text-gray-500">
              {props.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
