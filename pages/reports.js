import Page from "../components/page";
import AccountTable from "../components/AccountTable";

export default function () {
  return (
    <Page title="Reports" description="">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pad-top">    
        <div>
          <AccountTable />
        </div>
      </div>
    </Page>
  );
}
