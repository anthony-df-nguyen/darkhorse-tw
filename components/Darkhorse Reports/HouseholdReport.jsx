import React from 'react'

export default function HouseholdReport(props) {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Household
          </h3>
          <p className="mt-1 text-sm text-gray-500">{props.data.household}</p>
        </div>
        <div className="ml-4 mt-4 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent hover-bg ">
            Download Invoice
          </button>
          <button
            type="button"
            className="ml-4 relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600">
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
