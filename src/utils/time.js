import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import updateLocale from "dayjs/plugin/updateLocale";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(duration);
// strict thresholds
let thresholds = [
  { l: "s", r: 1 },
  { l: "ss", r: 59, d: "second" },
  { l: "m", r: 1 },
  { l: "mm", r: 59, d: "minute" },
  { l: "h", r: 1 },
  { l: "hh", r: 23, d: "hour" },
  { l: "d", r: 1 },
  { l: "dd", r: 29, d: "day" },
  { l: "M", r: 1 },
  { l: "MM", r: 11, d: "month" },
  { l: "y" },
  { l: "yy", d: "year" },
];
let config = {
  thresholds,
  rounding: Math.floor,
};
dayjs.extend(relativeTime, config);

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%d seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

export const formateTime = (time) => {
  return dayjs(time).format("MMM Do,HH:mm,YYYY");
};

export const formatePrimaryTime = (time) => {
  return dayjs(time).format(" YYYY/MM/DD HH:mm");
};

export const formateTimeTwo = (time) => {
  return dayjs(time).format("MMM Do,YYYY,HH:mm");
};
export const formateUTCTimeTwo = (time) => {
  return dayjs.utc(time).format("MMM Do,YYYY,HH:mm");
};
export const formateUTCTime = (time) => {
  return dayjs.utc(time).format("MMM Do,HH:mm,YYYY");
};

export const formateChartTime30 = (time) => {
  return dayjs(time).local().format("MMM Do");
};
export const formateChartTime7 = (time) => {
  return dayjs(time).local().format("Do HH:mm");
};
export const formateChartTime1 = (time) => {
  return dayjs(time).local().format("HH:mm");
};
export const formateDate = (time) => {
  return dayjs(time).format("MMM Do,YYYY");
};
export const formateUTCDate = (time) => {
  return dayjs.utc(time).format("MMM Do");
};
export const fromNow = (time) => {
  const text = dayjs(time).fromNow();
  return text;
};

export const formatLocalTime = (time) => {
  const localTime = dayjs(time).local();
  const localTimeString = localTime.format("MMM Do,YYYY,HH:mm");
  return localTimeString;
};

export const formatLocalHTime = (time) => {
  const localTime = dayjs(time).local();
  const localTimeString = localTime.format("Do HH:mm");
  return localTimeString;
};

export const formatLocalDayTime = (time) => {
  const localTime = dayjs(time).local();
  const localTimeString = localTime.format("MMM Do");
  return localTimeString;
};

export const formatePrimaryTimeUTC = (time) => {
  return dayjs(time).tz("Asia/Shanghai").format(" YYYY/MM/DD HH:mm");
};

function formatDuration(duration) {
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  let result = "";

  if (days > 0) {
    result += `${days}D `;
  }

  if (hours > 0) {
    result += `${hours}h `;
  }

  if (minutes > 0) {
    result += `${minutes}m `;
  }

  return result.trim();
}

export function formatTimestamp(timestamp) {
  const now = new Date().getTime();
  const leave = timestamp - now;
  if (leave < 0) return "-";
  const duration = dayjs.duration(leave);
  return formatDuration(duration);
}

function formatDuration2(duration) {
  const days = duration.days();

  let result = "";

  // if (days > 0) {
  result += `start in ${days + 1} days`;
  // }
  return result.trim();
}

export function formatTimestamp2(timestamp) {
  if (!timestamp) return "";
  const now = new Date().getTime();
  const leave = timestamp - now;
  if (leave < 0) return "-";
  const duration = dayjs.duration(leave);
  return formatDuration2(duration);
}

export function formatTimeAgo(timestamp, showAgo = true) {
  let currentTimestamp = Math.floor(Date.now() / 1000);
  let timeDifference = currentTimestamp - timestamp;
  const ago = showAgo ? "ago" : "";

  if (timeDifference < 60) {
    return `${timeDifference} s ${ago}`;
  } else if (timeDifference < 3600) {
    let minutes = Math.floor(timeDifference / 60);
    return `${minutes} m ${ago}`;
  } else if (timeDifference < 86400) {
    let hours = Math.floor(timeDifference / 3600);
    return `${hours} hr ${ago}`;
  } else {
    let days = Math.floor(timeDifference / 86400);
    return `${days} day ${ago}`;
  }
}
