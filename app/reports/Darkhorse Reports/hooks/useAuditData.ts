import { useState, useEffect } from "react";
import { ParsedAccount } from "../types";

export default function useAuditData(savedData: ParsedAccount[]) {
  const [displayData, setDisplayData] = useState<ParsedAccount[]>([]);
  const [numberOfRandom, setNumberOfRandom] = useState(0);

  useEffect(() => {
    setDisplayData(savedData);
    setNumberOfRandom(Math.ceil(savedData.length * 0.25));
  }, [savedData]);

  const showFullList = () => {
    setDisplayData(savedData);
  };

  const showRandomSample = () => {
    const shuffled = [...savedData]
      .map((row) => ({ row, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ row }) => row);

    setDisplayData(shuffled.slice(0, numberOfRandom));
  };

  return { displayData, numberOfRandom, showFullList, showRandomSample };
}
