export default function deCurrency(val) {
  const removeChars = val.replace(/[^0-9.-]+/g, "")
  if (isNaN(removeChars)) {
    return "Error: Number format is wrong";
  } else {
    return parseFloat(removeChars, 2);
  }
}
