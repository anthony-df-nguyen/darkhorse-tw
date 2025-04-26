import { MdOpenInNew } from "react-icons/md";
import { GroupedHousehold } from "../types";
import toCurrency from "../utilities/toCurrency";

type Props = {
  row: GroupedHousehold;
  index: number;
  onOpen: () => void;
};

export default function HouseholdRow({ row, index, onOpen }: Props) {
  const totalValue = row.accounts.reduce((a, b) => a + b.account_value, 0);
  const totalFee = row.accounts.reduce((a, b) => a + b.quarter_fee, 0);

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {index + 1}
      </td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {row.household}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
        {row.accounts.length}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
        {toCurrency(totalValue)}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
        {toCurrency(totalFee)}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
        <MdOpenInNew className="w-6 h-6 cursor-pointer" onClick={onOpen} />
      </td>
    </tr>
  );
}
