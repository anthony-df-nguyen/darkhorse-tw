//This function only runs when localStorage.getItem("savedCSVData") existsm which is called from reports.js
const getRequiredFields = () => {
  const getDataFromStorage = localStorage.getItem("savedCSVData");
  const jsonData = JSON.parse(getDataFromStorage);
  //Remove the Header
  const rows = jsonData.slice(1, jsonData.length + 1);
  const asOf = rows[0][0];
  const details = rows.map(a => {
      return {
        household: a[1],
        account_desc: a[2],
        account_type:a[3],
        account:a[4],
        account_value:a[7],
        actual_fee:a[12],
        annual_fee:a[13],
        quarter_fee:a[14],
      }
  })
  const finalData = {
      asOf: asOf,
      data: details,
  }
  return finalData;
};

export default getRequiredFields;
