"use client";

import { useState } from "react";
import useGroupedHouseholds from "./useGroupedHouseholds";
import HouseholdModal from "./HouseholdModal";
import HouseholdTable from "./HouseholdTable";
import { ParsedAccount, GroupedHousehold } from "../types";

type Props = {
  savedData: ParsedAccount[];
  asOf: string;
};

export default function InvoiceTable({ savedData, asOf }: Props) {
  const households = useGroupedHouseholds(savedData);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [householdData, setHouseholdData] = useState<GroupedHousehold | null>(null);  // ✅ added

  const closeModal = () => {
    setSelectedIndex(null);
    setHouseholdData(null);
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setHouseholdData(households[index]);
  };

  return (
    <div className="bg-gray-50 py-8 px-4 rounded-lg mt-4">
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Household Group Invoice Reports as of {asOf}
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Shows unique household groups of Darkhorse Advisor
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Total of {households.length} unique household groups found
        </p>
      </header>

      <div className="overflow-x-auto">
        <HouseholdTable
          data={households}
          asOf={asOf}
          onRowClick={openModal}  // ✅ fix
        />
      </div>

      <HouseholdModal
        visible={selectedIndex !== null}
        data={householdData}
        asOf={asOf}
        updateHousehold={(newData) => setHouseholdData(newData)}
        close={closeModal}
      />
    </div>
  );
}
