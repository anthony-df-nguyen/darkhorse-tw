import HouseholdReport from "../HouseholdReport";
import { GroupedHousehold } from "../types";

type Props = {
  visible: boolean;
  data: GroupedHousehold | null;
  asOf: string;
  updateHousehold: (household: GroupedHousehold | null) => void;
  close: () => void;                        
};

export default function HouseholdModal({ visible, data, asOf, updateHousehold, close }: Props) {
  if (!visible || !data) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
        <HouseholdReport
          data={data}
          updateHousehold={updateHousehold}
          updateModal={close}                
          asOf={asOf}
        />
      </div>
    </div>
  );
}
