export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1; // Months are zero-based
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight

  return `${month.toString().padStart(2, "0")}.${day
    .toString()
    .padStart(2, "0")}.${year} at ${hours.toString().padStart(2, "0")}.${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;
}


export function formatDateOrders(milliseconds) {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
}


