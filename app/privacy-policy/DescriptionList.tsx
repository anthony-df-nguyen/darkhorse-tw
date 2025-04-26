import React from "react";
import { descriptionListData } from "./constants";

export default function DescriptionList() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="text-center px-4 py-5 sm:px-6">
        <h3 className="text-lg my-3 leading-6 font-medium text-gray-900">
          Updates and Review
        </h3>
        <p className="mt-1 max-w-2xl text-sm">Firm Principal Attestation</p>
      </div>
      <div className="border-t border-gray-200">
        <div className="sm:divide-y sm:divide-gray-200">
          {descriptionListData.map((item, index) => (
            <div
              key={index}
              className="py-5 sm:py-5 grid sm:grid-cols-2 text-center sm:gap-4 sm:px-6"
            >
              <div className="text-sm font-bold">{item.label}</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
