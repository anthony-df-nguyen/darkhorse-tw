import { StyleSheet, Text, View } from "@react-pdf/renderer";

type Props = {
  asOf: string;
  width: string[];
  cellPad: string;
  cellBorder: {
    left: string;
    right: string;
    bottom: string;
  };
};

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#14b8a6",
  },
  headerCell: {
    height: "100%",
    color: "white",
    fontWeight: "bold",
  },
});

export default function TableHeader({ asOf, width, cellPad, cellBorder }: Props) {
  const columns = [
    "Account",
    "Account Type",
    `Account Value as of ${asOf}`,
    "Annual Fee (%)",
    "Annual Fee ($)",
    "Quarterly Fee ($)",
  ];

  return (
    <View style={styles.tableContainer}>
      {columns.map((col, i) => (
        <Text
          key={col}
          style={{
            ...styles.headerCell,
            width: width[i],
            padding: cellPad,
            borderLeft: cellBorder.left,
            borderRight: cellBorder.right,
            borderBottom: cellBorder.bottom,
          }}
        >
          {col}
        </Text>
      ))}
    </View>
  );
}