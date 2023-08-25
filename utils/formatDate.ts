const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(dateTime: string) {
  let date = dateTime.split("T")[0];
  let month = Number(date.slice(5, 7));
  return `${months[month]} ${date.slice(0, 4)}`;
}
