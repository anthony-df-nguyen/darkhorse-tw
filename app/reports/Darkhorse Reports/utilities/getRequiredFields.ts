type RawCSVRow = (string | number)[];
import { ParsedAccount } from "../types";


type GetRequiredFieldsResult = {
  asOf: string;
  data: ParsedAccount[];
};

const getRequiredFields = (): GetRequiredFieldsResult | null => {
  const raw = localStorage.getItem("savedCSVData");

  if (!raw) {
    console.error("No saved CSV data found in localStorage.");
    return null;
  }

  try {
    const jsonData: RawCSVRow[] = JSON.parse(raw);

    if (!Array.isArray(jsonData) || jsonData.length < 2) {
      console.error("Invalid CSV data format.");
      return null;
    }

    const rows = jsonData.slice(1); // Skip header
    const asOf = rows[0][0] as string;

    const details: ParsedAccount[] = rows.map((row) => ({
      household: row[1]?.toString() || "",
      account_desc: row[2]?.toString() || "",
      account_type: row[3]?.toString() || "",
      account: row[4]?.toString() || "",
      account_value: row[7] ?? "",
      actual_fee: row[12] ?? "",
      annual_fee: row[13] ?? "",
      quarter_fee: row[14] ?? "",
    }));

    return { asOf, data: details };
  } catch (error) {
    console.error("Error parsing saved CSV data:", error);
    return null;
  }
};

export default getRequiredFields;
