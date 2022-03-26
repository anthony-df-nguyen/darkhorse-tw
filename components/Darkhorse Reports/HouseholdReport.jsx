import React, {useState,useEffect} from "react";
import toCurrency from "../../utilities/toCurrency";

export default function HouseholdReport(props) {
  const [data,updateData] = useState([])
  console.log("data: ", data);
  const householdColumns = [
    "Account Description",
    "Account Type",
    "Account Value",
    "Actual Fee %",
    "Annual Fee",
    "Quarterly Fee",
    // "Quarterly Fee (Math Check)",
  ];
  useEffect(()=>{
    updateData(props.data)
  },[props])
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="ml-4 my-4">
          <h3 className="text-2xl leading-6 font-bold text-gray-900">
            Household
          </h3>
          <p className="mt-1 text-lg text-gray-500">{data.household}</p>
        </div>
        <div className="ml-4 mt-4 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent hover-bg ">
            Download Invoice
          </button>
          <button
            onClick={() => props.updateModal("none")}
            type="button"
            className="ml-4 relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600">
            Close Window
          </button>
        </div>
      </div>
      <div>
        <table className="min-w-full divide-y divide-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-accent">
            <tr>
              {householdColumns.map((col) => (
                <th
                  scope="col"
                  key={col}
                  className="py-3.5 px-2 text-left text-sm font-semibold text-gray-900 ">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white" id="tableBody">
            {data.accounts &&
              data.accounts.map((row, i) => {
                const annualFee = row.value * parseFloat(row.rate / 100);
                const quarterFee = annualFee / 4;
                return (
                  <tr key={i} className="bg-gray-50 ">
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {row.name}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {row.type}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {toCurrency(row.value)}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {row.rate}%
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {toCurrency(annualFee)}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {toCurrency(row.quarterly_fee)}
                    </td>
                    {/* <td className="whitespace-nowrap ppx-2pr-3 text-sm font-medium text-gray-900">
                      {toCurrency(quarterFee)}
                    </td> */}
                  </tr>
                );
              })}
            <tr>
              <td
                colSpan={2}
                className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900 bg-gray-200 text-right">
                Total
              </td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900 bg-gray-200">
                {data.accounts &&
                  toCurrency(
                    data.accounts.map((a) => a.value).reduce((a, b) => a + b, 0)
                  )}
              </td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900 bg-gray-200"></td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900 bg-gray-200">
                {data.accounts &&
                  toCurrency(
                    data.accounts
                      .map((a) => a.value * parseFloat(a.rate / 100))
                      .reduce((a, b) => a + b, 0)
                  )}
              </td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900 bg-gray-200">
                {data.accounts &&
                  toCurrency(
                    data.accounts
                      .map((a) => a.quarterly_fee)
                      .reduce((a, b) => a + b, 0)
                  )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
