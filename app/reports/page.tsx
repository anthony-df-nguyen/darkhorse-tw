import { Metadata } from "next";
import ReportsPage from "./Darkhorse Reports/ReportsPage";

export const metadata: Metadata = {
  title: "Darkhorse Advisor | Reports",
  description: "",
  keywords:
    "invest, portfolio, advisor, services, alan, flores, financial, consultant, business planning, investment, insurance, retirement, education, estate planning, tax, cash flow",
  authors: [{ name: "Web Developer: Kenneth Kieu" }],
  robots: "noindex",
};

export default function Page() {
  return <ReportsPage />;
}