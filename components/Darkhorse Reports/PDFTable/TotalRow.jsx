import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import toCurrency from "../../../utilities/toCurrency";

export default function TotalRow({ data, width, cellPad, cellBorder }) {
  const styles = StyleSheet.create({
    row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#e5e7eb",
    },
  });
  const cells = [
    "Total",
    "",
    toCurrency(data.map((a) => a.account_value).reduce((a, b) => a + b, 0)),
    "",
    toCurrency(
      data
        .map((a) => a.annual_fee)
        .reduce((a, b) => a + b, 0)
    ),
    toCurrency(data.map((a) => a.quarter_fee).reduce((a, b) => a + b, 0)),
  ];

  return (
    <View style={styles.row}>
      {cells.map((val, i) => (
        <Text
          key={i}
          style={{
            padding: cellPad,
            width: width[i],
            height: "100%",
            borderLeft: cellBorder.left,
            borderRight: cellBorder.right,
            borderBottom: cellBorder.bottom,
            fontWeight: 'bold',
          }}>
          {val}
        </Text>
      ))}
    </View>
  );
}
