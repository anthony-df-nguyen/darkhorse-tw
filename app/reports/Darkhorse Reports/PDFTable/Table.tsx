import { View, StyleSheet, Text } from "@react-pdf/renderer";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TotalRow from "./TotalRow";
import { GroupedHousehold } from "../types";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "24pt",
  },
});

const colWidths = ["15%", "25%", "20%", "10%", "15%", "15%"];
const cellPad = "3pt 6pt";
const cellBorder = {
  left: "none",
  right: "1pt solid #e5e7eb",
  bottom: "none",
};

type Props = {
  data: GroupedHousehold;
  asOf: string;
};

export default function Table({ data, asOf }: Props) {
  const { accounts } = data;

  if (!accounts || accounts.length === 0) {
    return (
      <View style={styles.tableContainer}>
        <Text>No account data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.tableContainer}>
      <TableHeader
        width={colWidths}
        asOf={asOf}
        cellPad={cellPad}
        cellBorder={cellBorder}
      />

      {accounts.map((account, index) => (
        <TableRow
          key={index}
          items={account}
          width={colWidths}
          cellPad={cellPad}
          cellBorder={cellBorder}
        />
      ))}

      <TotalRow
        data={accounts}
        width={colWidths}
        cellPad={cellPad}
        cellBorder={cellBorder}
      />

      <Text style={{ fontSize: "9pt", marginTop: "24pt" }}>
        Disclosure: *The annual fee is charged quarterly based on the market
        value as of the last quarter end date. The calculation for the quarterly
        fee is based on the annual fee % multiplied by the account value divided
        into 4 quarters ((annual fee % * account value) / 4).
      </Text>
    </View>
  );
}