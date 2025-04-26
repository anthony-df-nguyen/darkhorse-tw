import AuditRow from "./AuditRow";
import { ParsedAccount } from "../types";

type Props = {
  data: ParsedAccount[];
  asOf: string;
};

export default function AuditTable({ data, asOf }: Props) {
  const columns = ["Row #", "Name", "Account", "Account Fee"];

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
            <AuditRow key={i} row={row} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
