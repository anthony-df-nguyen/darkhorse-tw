import React, { useState, useEffect } from "react";
import toCurrency from "../../utilities/toCurrency";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "../Darkhorse Reports/PDFTable/InvoicePDF";

export default function HouseholdReport(props) {
  const [data, updateData] = useState([]);
  const householdColumns = [
    "Account Description",
    "Account Type",
    `Account Value as of ${props.asOf}`,
    "Annual Fee (%)",
    "Annual Fee ($)",
    "Quarterly Fee ($)",
  ];

  useEffect(() => {
    updateData(props.data);
    console.log('Household is now ', props.data.household)
  }, [props]);

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      {/* PDF Buttons */}
      {data.household && (
        <div className="flex items-center justify-end flex-wrap sm:flex-nowrap">
          <div className="flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent hover-bg ">
              <PDFDownloadLink
                fileName={`${data.household.replace(/[^a-zA-Z0-9]/g, "")}_${
                  props.asOf
                }.pdf`}
                document={<InvoicePDF data={data} asOf={props.asOf} />}>
                Download Invoice
              </PDFDownloadLink>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => {
                props.updateHousehould([])
                props.updateModal("none");
              }}
              type="button"
              className="ml-4 relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600">
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* {data.household && (
        <PDFViewer height={400} width={800} showToolbar={false}>
          <InvoicePDF data={data} asOf={props.asOf} />
        </PDFViewer>
      )} */}
      {/* Web Table */}
      <div>
        <div className="-mt-9 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <span className="flex items-center cursor-pointer">
            <img
              src="/images/horse.png"
              layout="fixed"
              height={36}
              width={36}
              alt="horse-icon"
            />
            <span className="ml-4 text-2xl text-dark font-extrabold">
              Darkhorse
              <span className="text-accent"> Advisor</span>
            </span>
          </span>
        </div>
        <div className="mt-12 mb-4">
          <h3 className="text-2xl leading-6 font-bold text-accent">
            Quarterly Invoice
          </h3>
        </div>

        <div className="mb-4">
          <h3 className="text-xl leading-6 font-bold ">Household Group</h3>
          <p className="mt-1 text-lg text-gray-500">{data.household}</p>
        </div>

        <table className="min-w-full divide-y divide-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-accent">
            <tr>
              {householdColumns.map((col) => (
                <th
                  scope="col"
                  key={col}
                  className="py-3.5 px-2 text-left text-sm font-semibold text-white ">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white" id="tableBody">
            {data.accounts &&
              data.accounts.map((row, i) => {
                return (
                  <tr key={i} className="bg-gray-50 ">
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {row.account}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {row.account_type}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {toCurrency(row.account_value)}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {row.account_fee}%
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {toCurrency(row.annual_fee)}
                    </td>
                    <td className="whitespace-nowrap py-4 px-2 text-sm font-medium text-gray-900">
                      {toCurrency(row.quarter_fee)}
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-bold text-gray-900 bg-gray-200"></td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-bold text-gray-900 bg-gray-200 text-right">
                Total
              </td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-bold text-gray-900 bg-gray-200">
                {data.accounts &&
                  toCurrency(
                    data.accounts
                      .map((a) => a.account_value)
                      .reduce((a, b) => a + b, 0)
                  )}
              </td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-bold text-gray-900 bg-gray-200"></td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-bold text-gray-900 bg-gray-200">
                {data.accounts &&
                  toCurrency(
                    data.accounts
                      .map(
                        (a) => a.account_value * parseFloat(a.account_fee / 100)
                      )
                      .reduce((a, b) => a + b, 0)
                  )}
              </td>
              <td className="whitespace-nowrap py-4 px-2 text-sm font-bold text-gray-900 bg-gray-200">
                {data.accounts &&
                  toCurrency(
                    data.accounts
                      .map((a) => a.quarter_fee)
                      .reduce((a, b) => a + b, 0)
                  )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-xs">
          Disclosure: *The annual fee is charged quarterly based on the market
          value as of the last quarter end date. The calculation for the
          quarterly fee is based on the annual fee % multiplied by the account
          value divided into 4 quarters ((<em>annual fee %</em> *{" "}
          <em>account value</em>) / 4)
        </div>
      </div>
    </div>
  );
}
