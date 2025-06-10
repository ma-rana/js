const now = new Date();
const createdDateTime = now.toISOString(); // e.g., "2025-06-11T03:18:00.000Z"
console.log(createdDateTime);

// const date = new Date(createdDateTime);

// // Get user's locale and timezone
// const userLocale = navigator.language || "en-US";
// const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// // Format for display
// const displayDateTime = date.toLocaleString(userLocale, {
//   timeZone: userTimezone,
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true,
// });
// console.log(displayDateTime);
