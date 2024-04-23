import React, {useState,useEffect} from "react";
import {
  Page,
  Document,
  StyleSheet,
  Text,
  Font,
  Image,
  View,
} from "@react-pdf/renderer";
import Table from "./Table";

Font.register({
  family: "Lato",
  fonts: [
    { src: "/fonts/Lato-Light.ttf", fontWeight: "light" },
    { src: "/fonts/Lato-Bold.ttf", fontWeight: "bold" },
    { src: "/fonts/Lato-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Lato-Thin.ttf", fontWeight: "thin" },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
    padding: "0.5in .5in",
    fontFamily: "Lato",
  },
});

const InvoicePDF = (props) => {
  const [data,updateData] = useState([]);
  const [asOf,updateAsOf] = useState("");
  
  useEffect(()=> {
    updateData(props.data);
    updateAsOf(props.asOf)
  },[props])

  return (
    <Document title="Sample PDF" language="en">
      <Page size="A4" style={styles.page}>
        {/* Logo */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Image
            src="/images/horse.png"
            style={{ width: "36pt", height: "36pt" }}
            alt="Darkhorse Advisor Logo"
          />
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginLeft: "12pt",
              color: "#14b8a6",
            }}>
            Darkhorse
          </Text>
          <Text
            style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "6pt" }}>
            Advisor
          </Text>
        </View>
        {/* Header */}
        <View style={{ marginTop: "24pt" }}>
          <Text style={{ fontSize: "24px" }}>Quarterly Invoice</Text>
          <Text
            style={{ fontSize: "18px", color: "#14b8a6", marginTop: "24pt" }}>
            Household Group
          </Text>
          <Text style={{ fontSize: "16px" }}>{data.household}</Text>
        </View>
        {/* Table */}
        <Table data={data} asOf={asOf} />
      </Page>
    </Document>
  );
};

export default InvoicePDF;
