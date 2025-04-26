import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "../PDFTable/InvoicePDF";
import { GroupedHousehold } from "../types";

type Props = {
  household: string;
  asOf: string;
  data: GroupedHousehold;
  updateHousehold: (household: GroupedHousehold | null) => void;
  updateModal: (val: string) => void;
};

export default function InvoiceActions({
  household,
  asOf,
  data,
  updateHousehold,
  updateModal,
}: Props) {
  console.log(data);
  return (
    <div className="flex items-center justify-end flex-wrap sm:flex-nowrap mb-6">
      {data && data.accounts && data.accounts.length > 0 && (
        <PDFDownloadLink
          fileName={`${household.replace(
            /[^a-zA-Z0-9]/g,
            ""
          )}_invoice_${asOf}.pdf`}
          document={<InvoicePDF data={data} asOf={asOf} />}
        >
          {({ loading }) => (
            <button className="bg-accent text-white rounded-md px-4 py-2 text-sm shadow-sm">
              {loading ? "Preparing..." : "Download Invoice"}
            </button>
          )}
        </PDFDownloadLink>
      )}

      <button
        onClick={() => {
          updateHousehold(null);
          updateModal("none");
        }}
        className="ml-4 bg-gray-500 text-white rounded-md px-4 py-2 text-sm shadow-sm hover:bg-gray-600"
      >
        Close Window
      </button>
    </div>
  );
}
