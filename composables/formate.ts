export function formatDate(isoDate) {
  // Parse the ISO date string
  const date = new Date(isoDate);

  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  // Return the formatted date
  return `${day}/${month}/${year}`;
}
