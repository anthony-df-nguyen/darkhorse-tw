"use client";
import useReportData from "./hooks/useReportData";
import ReportsHeader from "./ReportsHeader";
import AuditTable from "../Darkhorse Reports/AuditTable/index";
import InvoiceTable from "../Darkhorse Reports/InvoiceTable/index";

export default function ReportsPage() {
  const {
    uploadDisplay,
    clearDisplay,
    savedData,
    asOf,
    uploadError,
    table,
    updateTable,
    updateUploadDisplay,
    clearData,
  } = useReportData();

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <ReportsHeader
        uploadDisplay={uploadDisplay}
        clearDisplay={clearDisplay}
        error={uploadError}
        table={table}
        updateTable={updateTable}
        updateUploadDisplay={updateUploadDisplay}
        clearData={clearData}
      />
      {table ? (
        <AuditTable savedData={savedData} asOf={asOf} />
      ) : (
        <InvoiceTable savedData={savedData} asOf={asOf} />
      )}
    </div>
  );
}
