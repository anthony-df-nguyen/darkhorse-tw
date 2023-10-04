import Page from "../components/page";
import { useState, useEffect } from "react";
import CSVUPload from "../components/Darkhorse Reports/CSVUpload";
import AuditTable from "../components/Darkhorse Reports/AuditTable";
import InvoiceTable from "../components/Darkhorse Reports/InvoiceTable";
import getRequiredFields from "../utilities/getRequiredFields";

export default function () {
  const [uploadDisplay, updateUploadDisplay] = useState(false);
  const [clearDisplay, updateClearDisplay] = useState(true);
  const [savedData, updateSavedData] = useState([]);
  const [asOf, updateAsOf] = useState("");
  const [uploadError, updateUploadError] = useState(false)
  //Which table to show, depending on toggled mode
  const [table, updateTable] = useState(true);

  // Check if a csv file has already been saved to localstorage
  useEffect(() => {
    if (localStorage.getItem("savedCSVData")) {
      try {
        const data = getRequiredFields();
        updateSavedData(data.data);
        updateUploadDisplay(false);
        updateClearDisplay(true);
        updateAsOf(data.asOf);
      } catch (err) {
        console.log(err);
        updateUploadDisplay(true)
        updateUploadError(true)
        updateClearDisplay(false);
        localStorage.removeItem("savedCSVData");
      }
    }
    // If no file was uploaded, show the button to upload a file
    else {
      updateUploadDisplay(true);
      updateClearDisplay(false);
    }
  }, [uploadDisplay]);

  return (
    <Page title="Reports" description="">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Only Show the Upload file button if there is none loaded */}
        {uploadDisplay && (
          <div className="my-4">
            <CSVUPload updateUploadDisplay={updateUploadDisplay} error={uploadError} />
          </div>
        )}
        {/* Only Show the Clear Local Storage Button if there is Saved CSV Data already */}
        <div className="sm:mt-0 sm:flex-none">
          {clearDisplay && (
            <div className="flex flex-row items-center gap-4">
              <div className="text-xl font-bold">Mode</div>
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  onClick={() => updateTable(true)}
                  className={
                    `${table && "bg-gray-200 shadow-inner "}` +
                    "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  }
                >
                  Account Audit
                </button>
                <button
                  type="button"
                  onClick={() => updateTable(false)}
                  className={
                    `${!table && "bg-gray-200 shadow-inner "}` +
                    "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  }
                >
                  Account Invoice
                </button>
              </span>
              <button
                onClick={() => {
                  confirm("Are you sure you wish to clear out the CSV file?") &&
                    localStorage.removeItem("savedCSVData");
                  updateSavedData([]);
                  updateUploadDisplay(true);
                  updateClearDisplay(false);
                }}
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
              >
                Clear Loaded Data
              </button>
            </div>
          )}
        </div>
        {table && <AuditTable savedData={savedData} asOf={asOf} />}
        {!table && <InvoiceTable savedData={savedData} asOf={asOf} />}
      </div>
    </Page>
  );
}
