import HouseholdRow from "./HouseholdRow";
import { GroupedHousehold } from "../types";

type Props = {
  data: GroupedHousehold[];
  onRowClick: (index: number) => void;
  asOf: string;
};

export default function HouseholdTable({ data, onRowClick, asOf }: Props) {
  const columns = [
    "Row",
    "Household",
    "# of Accounts",
    `Total Value of Accounts as of ${asOf}`,
    "Total Quarterly Fees",
    "Options",
  ];

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-accent">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row, i) => (
            <HouseholdRow
              key={i}
              row={row}
              index={i}
              onOpen={() => onRowClick(i)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
