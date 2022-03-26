const toCurrency = (val) => {
    //console.log(val)
    const formatter = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    });
    return isNaN(val) ? "Error: Number is wrong format" : formatter.format(val);
  };

export default toCurrency
