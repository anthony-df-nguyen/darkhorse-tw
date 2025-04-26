export default function deCurrency(val: string | number): number {
  if (typeof val === "number") {
    return val; // Already a number
  }

  if (typeof val === "string") {
    const cleaned = val.replace(/[^0-9.-]+/g, "");
    const parsed = parseFloat(cleaned);

    if (isNaN(parsed)) {
      return 0; // or throw an error if you want
    }

    return parsed;
  }

  // Fallback, if somehow a wrong type is passed
  return 0;
}
