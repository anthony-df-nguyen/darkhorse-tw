// Raw CSV structure
export type RawAccountRow = (string | number)[];

// After parsing from CSV (still some strings)
export type ParsedAccount = {
  household: string;
  account_desc: string;
  account_type: string;
  account: string;
  account_value: string | number;
  actual_fee: string | number;
  annual_fee: string | number;
  quarter_fee: string | number;
};

// After cleaning for app (everything properly typed)
export type Account = {
  household: string;
  account_desc: string;
  account_type: string;
  account: string;
  account_value: number;
  account_fee: number;
  annual_fee: number;
  quarter_fee: number;
};

// Household group (used in InvoiceTable)
export type GroupedHousehold = {
  household: string;
  accounts: Account[];
};

// Slimmed-down account for AuditTable
export type AuditAccount = Pick<Account, "account_desc" | "account" | "quarter_fee">;

// Result returned by parsing CSV
export type GetRequiredFieldsResult = {
  asOf: string;
  data: ParsedAccount[];
} | null;