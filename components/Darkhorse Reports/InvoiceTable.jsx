import { useState, useEffect, useRef } from "react";
import { BsChevronRight } from "react-icons/bs";

export default function InvoiceTable(props) {
  const savedData = props.savedData;

  const [households, updateHouseholds] = useState([]);

  const [data, updateData] = useState([]);
  const householdColumns = [
    "Row",
    "Household",
    "# of Accounts",
    "Total Accounts Value",
    "Total Quarterly Fees",
    "Options",
  ];

  useEffect(() => {
    let uniqueHouseholds = [];
    savedData.forEach((row, i) => {
      //Determines if uniqueHouseholds already has an entry for the househould
      const exists =
        uniqueHouseholds.filter((e) => e.household === row[0]).length >= 1
          ? true
          : false;

      //If it doesnt exist, create an object with the household name and an array of the 1st account found
      if (!exists) {
        uniqueHouseholds.push({
          household: row[0],
          accounts: [
            {
              name: row[1],
              type: row[2],
              number: row[3],
              value: parseFloat(row[6].replace(/[^0-9.-]+/g, ""), 2),
              rate: row[9],
              quarterly_fee: parseFloat(row[12].replace(/[^0-9.-]+/g, ""), 2),
            },
          ],
        });
      }
      //If it does exist already...
      else {
        //Figure out which index in uniqueHouseholds has the matching existing household name
        const index = uniqueHouseholds.findIndex(
          (item) => item.household === row[0]
        );

        //Add this new found account to the accounts array of the existing household
        uniqueHouseholds[index].accounts.push({
          name: row[1],
          type: row[2],
          number: row[3],
          value: parseFloat(row[6].replace(/[^0-9.-]+/g, ""), 2),
          rate: row[9],
          quarterly_fee: parseFloat(row[12].replace(/[^0-9.-]+/g, ""), 2),
        });
      }
    });
    //console.log(uniqueHouseholds);
    updateHouseholds(uniqueHouseholds);
  }, [savedData]);

  const toCurrency = (val) => {
    //console.log(val)
    const formatter = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    });
    return isNaN(val) ? "Error" : formatter.format(val);
  };

  const load = (i) => {
    console.log(`You clicked index ${i}`);
    const detailAccount = households[i].accounts.map((row) => {
      return {
        account: row.name,
        type: row.type,
        value: row.value,
        quarterly_fee: row.quarterly_fee,
        detailed: true,
      };
    });
  };

  return (
    <div className="bg-gray-50 py-8 px-4 rounded-lg mt-4">
      {/* Header */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Darkhorse Advisor Invoice Reports
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Shows unique household groups of Darkhorse Advisor
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Total of {savedData.length} accounts found
          </p>
        </div>
      </div>
      {/* Table */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-accent">
                  <tr>
                    {householdColumns.map((col) => (
                      <th
                        scope="col"
                        key={col}
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody
                  className="divide-y divide-gray-200 bg-white"
                  id="tableBody">
                  {households.map((row, i) => (
                    <tr key={i} className="tableRow">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {row.household}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {row.accounts.length}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {toCurrency(
                          row.accounts
                            .map((account) => account.value)
                            .reduce((a, b) => a + b, 0)
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {toCurrency(
                          row.accounts
                            .map((account) => account.quarterly_fee)
                            .reduce((a, b) => a + b, 0)
                        )}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <div
                          onClick={() => {
                            load(i);
                          }}>
                          {<BsChevronRight />}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
