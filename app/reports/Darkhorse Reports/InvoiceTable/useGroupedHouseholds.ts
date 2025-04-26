import { useMemo } from "react";
import deCurrency from "../utilities/deCurrency";
import { GroupedHousehold, ParsedAccount, Account } from "../types";

export default function useGroupedHouseholds(
  savedData: ParsedAccount[]
): GroupedHousehold[] {
  return useMemo(() => {
    const uniqueHouseholds: GroupedHousehold[] = [];

    savedData.forEach((row) => {
      const account: Account = {
        household: row.household,
        account_desc: row.account_desc,
        account_type: row.account_type,
        account: row.account,
        account_value: deCurrency(row.account_value),
        account_fee:
          typeof row.actual_fee === "string"
            ? parseFloat(row.actual_fee)
            : row.actual_fee,
        annual_fee: deCurrency(row.annual_fee),
        quarter_fee: deCurrency(row.quarter_fee),
      };

      const existing = uniqueHouseholds.find(
        (e) => e.household === row.household
      );

      if (existing) {
        existing.accounts.push(account);
      } else {
        uniqueHouseholds.push({
          household: row.household,
          accounts: [account],
        });
      }
    });

    return uniqueHouseholds;
  }, [savedData]);
}
