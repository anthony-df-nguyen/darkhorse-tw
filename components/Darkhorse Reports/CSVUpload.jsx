import { useState } from "react";
import Papa from "papaparse";

export default function csvreader(props) {
  const [csvFile, setCsvFile] = useState();

  console.log("CSV File", csvFile);
  const submit = (e) => {
    e.preventDefault();
    const file = csvFile;
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      const initialParse = Papa.parse(text);
      console.log("initialParse: ", initialParse.data);
      //Only return rows with an account number - column 3
      const validRows = initialParse.data.filter((row) => row[3] && row);
      //Save the parsed csvData as jsonstring to localstorage
      localStorage.setItem("savedCSVData", JSON.stringify(validRows));
      props.updateUploadDisplay(false);
    };

    reader.readAsText(file);
  };

  return (
    <div className="bg-gray-100 rounded p-4">
      <h1 className="font-bold text-xl mb-4">Upload your billing CSV file</h1>
      <form id="csv-form" onSubmit={(e) => submit(e)}>
        <div className="flex justify-start items-center gap-4">
          <div className="">
            <input
              className="form-control block w-full  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white "
              type="file"
              accept=".csv"
              id="csvFile"
              onChange={(e) => {
                setCsvFile(e.target.files[0]);
              }}
            />
          </div>
          <div>
            <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-3 py-1.5 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
