/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from "react";
import Csvreader from "./CSVUpload";
// import CsvDownloader from "react-csv-downloader";

export default function Table(props) {
  const [savedData, updateSavedData] = useState([]);
  const [data, updateData] = useState([]);
  // const [exportData, updateExportData] = useState([]);

  const [numberOfRandom, updateNumRandom] = useState(0);
  const columns = ["Row #", "Name", "Account", "Calculated Qtrly Fee"];
  const [uploadDisplay, updateUploadDisplay] = useState(false);
  const [clearDisplay, updateClearDisplay] = useState(true);

  // Check if a csv file has already been saved to localstorage
  useEffect(() => {
    if (localStorage.getItem("savedCSVData")) {
      const savedData = localStorage.getItem("savedCSVData");
      const jsonData = JSON.parse(savedData);
      updateSavedData(jsonData.slice(1, jsonData.length + 1));
      updateUploadDisplay(false);
      updateClearDisplay(true);
    }
    // If no file was uploaded, show the button to upload a file
    else {
      updateUploadDisplay(true);
      updateClearDisplay(false);
    }
  }, [uploadDisplay]);

  //When savedJSON data is finished loading from local storage, set savedData to CSV file
  useEffect(() => {
    updateData(savedData);
    updateNumRandom(Math.ceil(savedData.length * 0.25));
  }, [savedData]);

  // Show the full list of accounts again
  const showFullList = () => {
    updateData(savedData);
  };

  // Randomize the list of accounts to show the a random 25% list
  const randomize = () => {
    const temp = savedData.map((row) => {
      return [row, Math.random()];
    });
    temp.sort((a, b) => (a[1] > b[1] ? 1 : -1));
    const randomArray = temp.map((row) => row[0]);
    const limitedRandomArray = randomArray.slice(0, numberOfRandom);
    updateData(limitedRandomArray);
  };

  //Build CSV format when data changes
  // useEffect(() => {
  //   const arr = [];
  //   console.log("Running buildExport");
  //   data.forEach((row) => {
  //     console.log(row)
  //     arr.push({
  //       "Account Description": row[0],
  //       "Account #": row[2],
  //       "Fee": row[11].replace("$",""),
  //     });
  //   });
  //   //console.log("arr", arr);
  //   updateExportData(arr);
  // }, [data]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Only Show the Upload file button if there is none loaded */}
      {uploadDisplay && (
        <div className="my-4">
          <Csvreader updateUploadDisplay={updateUploadDisplay} />
        </div>
      )}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Darkhorse Advisor Accounts and Fee List
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Show the full list of accounts and fees, or randomly generate a list
            of 25% of accounts
          </p>

          <p className="mt-2 text-sm text-gray-700">
            Total of {savedData.length} accounts found
          </p>
          <p className="mt-2 text-sm text-gray-700">
            25% of accounts = {numberOfRandom} accounts
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-none">
          <button
            onClick={() => showFullList()}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
            Show All Accounts
          </button>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-none">
          <button
            onClick={() => randomize()}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
            Random 25%
          </button>
        </div>
        {/* Only Show the Clear Local Storage Button if there is Saved CSV Data already */}
        <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-none">
          {clearDisplay && (
            <button
              onClick={() => {
                confirm("Are you sure you wish to clear out the CSV file?") &&
                  localStorage.removeItem("savedCSVData");
                updateSavedData([]);
                updateData([]);
                updateUploadDisplay(true);
                updateClearDisplay(false);
              }}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
              Clear Loaded Data
            </button>
          )}
        </div>
      </div>
      {/* CSV Download of whats shown on table */}

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map((col) => (
                      <th
                        scope="col"
                        key={col}
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((data, i) => (
                    <tr key={i}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {data[0]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {data[2]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {data[11].replace("$", "")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
