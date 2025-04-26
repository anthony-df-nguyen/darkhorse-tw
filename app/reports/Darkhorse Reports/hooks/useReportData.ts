"use client";
import { useState, useEffect } from "react";
import getRequiredFields from "../utilities/getRequiredFields";
import { ParsedAccount } from "../types";

export default function useReportData() {
  const [uploadDisplay, updateUploadDisplay] = useState(false);
  const [clearDisplay, updateClearDisplay] = useState(true);
  const [savedData, updateSavedData] = useState<ParsedAccount[]>([]);
  const [asOf, updateAsOf] = useState("");
  const [uploadError, updateUploadError] = useState(false);
  const [table, updateTable] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("savedCSVData")) {
      try {
        const data = getRequiredFields();
  
        if (data !== null) {
          updateSavedData(data.data);
          updateUploadDisplay(false);
          updateClearDisplay(true);
          updateAsOf(data.asOf);
        } else {
          updateUploadDisplay(true);
          updateUploadError(true);
          updateClearDisplay(false);
          localStorage.removeItem("savedCSVData");
        }
      } catch (err) {
        console.error(err);
        updateUploadDisplay(true);
        updateUploadError(true);
        updateClearDisplay(false);
        localStorage.removeItem("savedCSVData");
      }
    } else {
      updateUploadDisplay(true);
      updateClearDisplay(false);
    }
  }, [uploadDisplay]);

  const clearData = () => {
    localStorage.removeItem("savedCSVData");
    updateSavedData([]);
    updateUploadDisplay(true);
    updateClearDisplay(false);
  };

  return {
    uploadDisplay,
    clearDisplay,
    savedData,
    asOf,
    uploadError,
    table,
    updateTable,
    updateUploadDisplay,
    clearData,
  };
}
