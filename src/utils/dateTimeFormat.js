export const monthMap = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export const dayMap = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const dateFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

const timeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};

// Format incoming JS Date object to "DD.MM.YYY" format
const dateFormatter = new Intl.DateTimeFormat("de-DE", dateFormatOptions);

// Format incoming JS Date object to "hh:mm AM/PM" format
const timeFormatter = new Intl.DateTimeFormat("en-US", timeFormatOptions);

// Format incoming JS Date object to "DD.MM.YYY, hh:mm AM/PM" format
const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  ...dateFormatOptions,
  ...timeFormatOptions,
});

export function formatDate(date) {
  return dateFormatter.format(date);
}

export function formatTimeFromDate(date) {
  return timeFormatter.format(date);
}

export function formatDateAndTime(date) {
  return dateTimeFormatter.format(date);
}

export function getTimeOfDay(date) {
  const hour = date.getHours();

  if (hour >= 5 && hour <= 11) {
    return "morning";
  } else if (hour >= 12 && hour <= 16) {
    return "afternoon";
  } else if (hour >= 17 && hour <= 20) {
    return "evening";
  } else {
    return "night";
  }
}

export function getDateRange(startDate, endDate) {
  const dates = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
