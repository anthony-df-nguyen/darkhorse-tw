import Image from "next/legacy/image";

type Props = {
  household: string;
  asOf: string;
};

export default function Header({ household }: Props) {
  return (
    <>
      <div className="flex items-center">
        <Image
          src="/images/horse.png"
          layout="fixed"
          height={36}
          width={36}
          alt="horse-icon"
        />
        <span className="ml-4 text-2xl text-dark font-extrabold">
          Darkhorse<span className="text-accent"> Advisor</span>
        </span>
      </div>

      <div className="mt-12 mb-4">
        <h3 className="text-2xl font-bold text-accent">Quarterly Invoice</h3>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold">Household Group</h3>
        <p className="mt-1 text-lg">{household}</p>
      </div>
    </>
  );
}
