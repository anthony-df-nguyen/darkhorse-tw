"use client";

import useAuditData from "../hooks/useAuditData";
import AuditTable from "./AuditTable";
import { ParsedAccount } from "../types";

type Props = {
  savedData: ParsedAccount[];
  asOf: string;
};

export default function AuditTablePage({ savedData, asOf }: Props) {
  const { displayData, numberOfRandom, showFullList, showRandomSample } =
    useAuditData(savedData);

  return (
    <div className="bg-gray-50 py-8 px-4 rounded-lg mt-4">
      {/* Header */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Account Value Audit List as of {asOf}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Show the full list of accounts and fees, or randomly generate a list
            of 25% of accounts
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Total of {savedData.length} accounts found
          </p>
          <p className="mt-2 text-sm text-gray-700">
            25% of accounts = {numberOfRandom} accounts
          </p>
        </div>

        <div className="mt-4 sm:mt-0 sm:ml-4 flex gap-2">
          <button
            onClick={showFullList}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
          >
            Show All Accounts
          </button>
          <button
            onClick={showRandomSample}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
          >
            Random 25%
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <AuditTable data={displayData} asOf={asOf} />
          </div>
        </div>
      </div>
    </div>
  );
}
