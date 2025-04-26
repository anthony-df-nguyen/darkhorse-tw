export default function toCurrency(value: number | string): string {
  let numericValue: number;

  if (typeof value === "number") {
    numericValue = value;
  } else if (typeof value === "string") {
    const cleaned = value.replace(/[^0-9.-]+/g, "");
    numericValue = parseFloat(cleaned);
  } else {
    return "$0.00";
  }

  if (isNaN(numericValue)) {
    return "$0.00";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(numericValue);
}
