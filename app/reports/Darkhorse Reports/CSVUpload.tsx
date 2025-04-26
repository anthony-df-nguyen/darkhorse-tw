"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Papa from "papaparse";

type CSVReaderProps = {
  updateUploadDisplay: (display: boolean) => void;
  error: boolean;
};

export default function CSVReader({
  updateUploadDisplay,
  error,
}: CSVReaderProps) {
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!csvFile) {
      console.error("No file selected.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text !== "string") {
        console.error("File could not be read as text.");
        return;
      }

      const initialParse = Papa.parse<string[]>(text);
      console.log("initialParse: ", initialParse.data);

      const validRows = initialParse.data.filter((row: any) => row[3]);
      localStorage.setItem("savedCSVData", JSON.stringify(validRows));
      updateUploadDisplay(false);
    };

    reader.readAsText(csvFile);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCsvFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-100 rounded p-4">
      <h1 className="font-bold text-xl mb-4">Upload your billing CSV file</h1>
      <form id="csv-form" onSubmit={submit}>
        <div className="flex justify-start items-center gap-4">
          <div>
            <input
              className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              type="file"
              accept=".csv"
              id="csvFile"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-3 py-1.5 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
            >
              Upload
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="mt-4 bg-red-500 p-2 rounded shadow text-white text-center">
          <p>
            There was an error generating a report for the file you attached.
            Please make sure you are uploading the correct CSV file for the
            quarterly billing spreadsheet, or that the format of the spreadsheet
            adheres to the rules.
          </p>
          <br />
          <a
            className="italic underline"
            href="mailto:anthonydfnguyen@gmail.com"
          >
            Email me if you have any issues
          </a>
        </div>
      )}
    </div>
  );
}
