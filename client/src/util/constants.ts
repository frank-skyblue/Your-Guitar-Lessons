const url = process.env.NODE_ENV === "production" ?
    process.env.REACT_APP_BACKEND_API_DOMAIN_PROD : process.env.REACT_APP_BACKEND_API_DOMAIN;

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

export { url, days, months };