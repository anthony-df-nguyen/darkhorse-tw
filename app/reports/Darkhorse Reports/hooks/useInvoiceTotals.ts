import { useMemo } from "react";
import { GroupedHousehold } from "../types";

type InvoiceTotals = {
  totalValue: number;
  totalAnnualFee: number;
  totalQuarterFee: number;
};

export default function useInvoiceTotals(data: GroupedHousehold | null): InvoiceTotals {
  return useMemo(() => {
    if (!data?.accounts) {
      return { totalValue: 0, totalAnnualFee: 0, totalQuarterFee: 0 };
    }

    const totalValue = data.accounts.reduce((sum, acc) => sum + acc.account_value, 0);
    const totalAnnualFee = data.accounts.reduce((sum, acc) => sum + acc.annual_fee, 0);
    const totalQuarterFee = data.accounts.reduce((sum, acc) => sum + acc.quarter_fee, 0);

    return { totalValue, totalAnnualFee, totalQuarterFee };
  }, [data]);
}