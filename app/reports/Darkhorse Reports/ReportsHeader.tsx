"use client"
import CSVUpload from "./CSVUpload";

type ReportsHeaderProps = {
  uploadDisplay: boolean;
  clearDisplay: boolean;
  error: boolean;
  table: boolean;
  updateTable: (val: boolean) => void;
  updateUploadDisplay: (val: boolean) => void;
  clearData: () => void;
};

export default function ReportsHeader({
  uploadDisplay,
  clearDisplay,
  error,
  table,
  updateTable,
  updateUploadDisplay,
  clearData,
}: ReportsHeaderProps) {
  return (
    <div className="my-4 flex flex-col gap-4">
      {uploadDisplay && (
        <CSVUpload
          updateUploadDisplay={updateUploadDisplay}
          error={error}
        />
      )}
      {clearDisplay && (
        <div className="flex flex-row items-center gap-4">
          <div className="text-xl font-bold">Mode</div>
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              onClick={() => updateTable(true)}
              className={`${table && "bg-gray-200 shadow-inner "}relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
            >
              Account Audit
            </button>
            <button
              type="button"
              onClick={() => updateTable(false)}
              className={`${!table && "bg-gray-200 shadow-inner "} -ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
            >
              Account Invoice
            </button>
          </span>
          <button
            onClick={() => {
              if (confirm("Are you sure you wish to clear out the CSV file?")) {
                clearData();
              }
            }}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm"
          >
            Clear Loaded Data
          </button>
        </div>
      )}
    </div>
  );
}