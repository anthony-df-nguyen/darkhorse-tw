// import { AccountData } from "./types";
import { ParsedAccount } from "../types";

type Props = {
  row: ParsedAccount;
  index: number;
};

export default function AuditRow({ row, index }: Props) {
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {index + 1}
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {row.account_desc}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        {row.account}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        {row.quarter_fee.toString().replace("$", "")}
      </td>
    </tr>
  );
}
