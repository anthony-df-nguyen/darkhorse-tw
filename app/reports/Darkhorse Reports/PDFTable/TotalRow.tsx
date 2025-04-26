import { View, StyleSheet, Text } from "@react-pdf/renderer";
import toCurrency from "../utilities/toCurrency";
import { Account } from "../types";

type Props = {
  data: Account[];
  width: string[];
  cellPad: string;
  cellBorder: {
    left: string;
    right: string;
    bottom: string;
  };
};

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e7eb",
  },
  cell: {
    fontWeight: "bold",
    height: "100%",
  },
});

export default function TotalRow({ data, width, cellPad, cellBorder }: Props) {
  const totalAccountValue = data.reduce(
    (sum, acc) => sum + acc.account_value,
    0
  );
  const totalAnnualFee = data.reduce((sum, acc) => sum + acc.annual_fee, 0);
  const totalQuarterFee = data.reduce((sum, acc) => sum + acc.quarter_fee, 0);

  const cells = [
    "Total",
    "",
    toCurrency(totalAccountValue),
    "",
    toCurrency(totalAnnualFee),
    toCurrency(totalQuarterFee),
  ];

  return (
    <View style={styles.row}>
      {cells.map((val, i) => (
        <Text
          key={i}
          style={{
            ...styles.cell,
            width: width[i],
            padding: cellPad,
            borderLeft: cellBorder.left,
            borderRight: cellBorder.right,
            borderBottom: cellBorder.bottom,
          }}
        >
          {val}
        </Text>
      ))}
    </View>
  );
}
