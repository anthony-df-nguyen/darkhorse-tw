import { Text, View, StyleSheet } from "@react-pdf/renderer";
import toCurrency from "../utilities/toCurrency";
import { Account } from "../types";

type Props = {
  items: Account;
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
    backgroundColor: "#f9fafb",
  },
  cell: {
    fontWeight: "normal",
    height: "100%",
  },
});

export default function TableRow({ items, width, cellPad, cellBorder }: Props) {
  const cells = [
    items.account,
    items.account_type,
    toCurrency(items.account_value),
    `${items.account_fee}%`,
    toCurrency(items.annual_fee),
    toCurrency(items.quarter_fee),
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