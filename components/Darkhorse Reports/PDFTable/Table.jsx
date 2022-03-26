import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TotalRow from "./TotalRow";

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

const Table = ({ data, asOf }) => (
  <View style={styles.tableContainer}>
    <TableHeader
      width={colWidths}
      asOf={asOf}
      cellPad={cellPad}
      cellBorder={cellBorder}
    />
    {data.accounts &&
      data.accounts.map((row, i) => {
        return (
          <TableRow
            key={i}
            items={row}
            width={colWidths}
            cellPad={cellPad}
            cellBorder={cellBorder}
          />
        );
      })}
    {data.accounts && (
      <TotalRow
        data={data.accounts}
        width={colWidths}
        cellPad={cellPad}
        cellBorder={cellBorder}
      />
    )}
    <Text
      style={{
        fontSize: "9pt",
        marginTop: "24pt",
      }}>
      Disclosure: *The annual fee is charged quarterly based on the market value
      as of the last quarter end date. The calculation for the quarterly fee is
      based on the annual fee % multiplied by the account value divided into 4
      quarters ((<em>annual fee %</em> * <em>account value</em>) / 4)
    </Text>
    {/*<TableFooter items={data.items} />*/}
  </View>
);

export default Table;
