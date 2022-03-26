import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

export default function TableHeader({ asOf, width, cellPad, cellBorder }) {
  const columns = [
    "Account",
    "Account Type",
    `Account Value as of ${asOf}`,
    "Annual Fee (%)",
    "Annual Fee ($)",
    "Quarterly Fee ($)",
  ];
  const styles = StyleSheet.create({
    tableContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "#14b8a6",
    },
  });
  return (
    <View style={styles.tableContainer}>
      {columns.map((row, i) => (
        <Text
          key={row}
          style={{
            width: width[i],
            padding: cellPad,
            height: "100%",
            color: "white",
            fontWeight: "bold",
            borderLeft: cellBorder.left,
            borderRight: cellBorder.right,
            borderBottom: cellBorder.bottom,
          }}>
          {row}
        </Text>
      ))}
    </View>
  );
}
