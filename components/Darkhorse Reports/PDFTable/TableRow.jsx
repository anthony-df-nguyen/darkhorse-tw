import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import toCurrency from "../../../utilities/toCurrency";

const TableRow = ({ items, width, cellPad, cellBorder }) => {
  const styles = StyleSheet.create({
    row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f9fafb",
    },
  });

  const cells = [
    items.account,
    items.account_type,
    toCurrency(items.account_value),
    items.account_fee + "%",
    toCurrency(items.annual_fee),
    toCurrency(items.quarter_fee),
  ];

  return (
    <View style={styles.row}>
      {cells.map((val, i) => (
        <Text
          key={i}
          style={{
            padding: cellPad,
            width: width[i],
            height:'100%',
            borderLeft: cellBorder.left,
            borderRight: cellBorder.right,
            borderBottom: cellBorder.bottom,
            fontWeight: 'normal',
          }}>
          {val}
        </Text>
      ))}
    </View>
  );
};

export default TableRow;
