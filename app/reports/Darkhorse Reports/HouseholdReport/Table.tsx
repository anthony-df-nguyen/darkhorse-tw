import toCurrency from "../utilities/toCurrency";

type Props = {
  accounts: any[];
  asOf: string;
  totals: {
    totalValue: number;
    totalAnnualFee: number;
    totalQuarterFee: number;
  };
};

export default function Table({ accounts, asOf, totals }: Props) {
  const columns = [
    "Account Description",
    "Account Type",
    `Account Value as of ${asOf}`,
    "Annual Fee (%)",
    "Annual Fee ($)",
    "Quarterly Fee ($)",
  ];

  return (
    <div className="overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-accent">
          <tr>
            {columns.map((col) => (
              <th key={col} className="py-3.5 px-2 text-left text-sm font-semibold text-white">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {accounts.map((row, i) => (
            <tr key={i} className="bg-gray-50">
              <td className="whitespace-nowrap py-4 px-2 text-sm text-gray-900">{row.account}</td>
              <td className="whitespace-nowrap py-4 px-2 text-sm text-gray-900">{row.account_type}</td>
              <td className="whitespace-nowrap py-4 px-2 text-sm text-gray-900">{toCurrency(row.account_value)}</td>
              <td className="whitespace-nowrap py-4 px-2 text-sm text-gray-900">{row.account_fee}%</td>
              <td className="whitespace-nowrap py-4 px-2 text-sm text-gray-900">{toCurrency(row.annual_fee)}</td>
              <td className="whitespace-nowrap py-4 px-2 text-sm text-gray-900">{toCurrency(row.quarter_fee)}</td>
            </tr>
          ))}
          <tr className="bg-gray-200">
            <td></td>
            <td className="text-right py-4 px-2 text-sm font-bold text-gray-900">Total</td>
            <td className="py-4 px-2 text-sm font-bold text-gray-900">{toCurrency(totals.totalValue)}</td>
            <td></td>
            <td className="py-4 px-2 text-sm font-bold text-gray-900">{toCurrency(totals.totalAnnualFee)}</td>
            <td className="py-4 px-2 text-sm font-bold text-gray-900">{toCurrency(totals.totalQuarterFee)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
