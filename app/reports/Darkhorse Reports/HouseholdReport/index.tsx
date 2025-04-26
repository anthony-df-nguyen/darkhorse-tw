"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import InvoiceActions from "./InvoiceActions";
import Table from "./Table";
import Disclosure from "./Disclosure";
import useInvoiceTotals from "../hooks/useInvoiceTotals";
import { GroupedHousehold } from "../types";

type Props = {
  data: GroupedHousehold;
  asOf: string;
  updateHousehold: (household: GroupedHousehold | null) => void;
  updateModal: (val: string) => void;
};

export default function HouseholdReport({
  data,
  asOf,
  updateHousehold,
  updateModal,
}: Props) {
  const [householdData, setHouseholdData] = useState<GroupedHousehold | null>(
    null
  );

  useEffect(() => {
    setHouseholdData(data);
  }, [data]);

  const totals = useInvoiceTotals(householdData);

  if (!householdData || !householdData.accounts) return null;

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <InvoiceActions
        asOf={asOf}
        household={householdData.household}
        data={householdData}
        updateHousehold={updateHousehold}
        updateModal={updateModal}
      />
      <Header household={householdData.household} asOf={asOf} />
      <Table accounts={householdData.accounts} asOf={asOf} totals={totals} />
      <Disclosure />
    </div>
  );
}
