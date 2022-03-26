import { useState, useEffect, useRef } from "react";
import { MdOpenInNew } from "react-icons/md";
import HouseholdReport from "./HouseholdReport";
import toCurrency from '../../utilities/toCurrency'
import deCurrency from "../../utilities/deCurrency";

export default function InvoiceTable(props) {
  const savedData = props.savedData;
  const [households, updateHouseholds] = useState([]);
  const [householdData,updateHouseholdData] = useState([])
  const [modalDisplay,updateModalDisplay] = useState("none")

  const householdColumns = [
    "Row",
    "Household",
    "# of Accounts",
    `Total Value of Accounts as of ${props.asOf}`,
    "Total Quarterly Fees",
    "Options",
  ];

  //Create a household array and group unique households together
  useEffect(() => {
    let uniqueHouseholds = [];
    savedData.forEach((row, i) => {
      //Determines if uniqueHouseholds already has an entry for the househould
      const exists =
        uniqueHouseholds.filter((e) => e.household === row.household).length >= 1
          ? true
          : false;

      //If it doesnt exist, create an object with the household name and an array of the 1st account found
      if (!exists) {
        uniqueHouseholds.push({
          household: row.household,
          accounts: [
            {
              household: row.household,
              account_type: row.account_type,
              account: row.account,
              account_value: deCurrency(row.account_value),
              account_fee: parseFloat(row.actual_fee,2),
              annual_fee: deCurrency(row.annual_fee),
              quarter_fee: deCurrency(row.quarter_fee),
            },
          ],
        });
      }
      //If it does exist already...
      else {
        //Figure out which index in uniqueHouseholds has the matching existing household name
        const index = uniqueHouseholds.findIndex(
          (item) => item.household === row.household
        );

        //Add this new found account to the accounts array of the existing household
        uniqueHouseholds[index].accounts.push({
          household: row.household,
          account_type: row.account_type,
          account: row.account,
          account_value: deCurrency(row.account_value),
          account_fee: parseFloat(row.actual_fee, 2),
          annual_fee: deCurrency(row.annual_fee),
          quarter_fee: deCurrency(row.quarter_fee),
        });
      }
    });
    //console.log(uniqueHouseholds);
    updateHouseholds(uniqueHouseholds);
  }, [savedData]);



  const load = (i) => {
    console.log('This should set household to ',households[i].household)
    updateHouseholdData(households[i])
    updateModalDisplay('block');
  };

  return (
    <div className="bg-gray-50 py-8 px-4 rounded-lg mt-4">
      {/* Header */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Darkhorse Advisor Invoice Reports as of {props.asOf}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Shows unique household groups of Darkhorse Advisor
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Total of {households.length} unique household groups found
          </p>
        </div>
      </div>

      {/* Household Report */}
      <div style={{ display: modalDisplay }}>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full blackdrop">
          <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-min overflow-hidden min-w-[700px]">
            {
              <HouseholdReport
                data={householdData}
                updateHousehould={updateHouseholdData}
                updateModal={updateModalDisplay}
                asOf={props.asOf}
              />
            }
          </div>
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
                            .map((account) => account.account_value)
                            .reduce((a, b) => a + b, 0)
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {toCurrency(
                          row.accounts
                            .map((account) => account.quarter_fee)
                            .reduce((a, b) => a + b, 0)
                        )}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <div
                          onClick={() => {
                            load(i);
                          }}>
                          {<MdOpenInNew className="w-6 h-6 cursor-pointer" />}
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
