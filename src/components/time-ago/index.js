import React, { useEffect, useState, useRef } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

// strict thresholds
let thresholds = [
  { l: "s", r: 1 },
  { l: "ss", r: 59, d: "s" },
  { l: "m", r: 1 },
  { l: "mm", r: 59, d: "m" },
  { l: "h", r: 1 },
  { l: "hh", r: 23, d: "h" },
  { l: "d", r: 1 },
  { l: "dd", r: 29, d: "d" },
  { l: "M", r: 1 },
  { l: "MM", r: 11, d: "m" },
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
    s: "%ds",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    M: "1M",
    MM: "%dM",
    y: "1y",
    yy: "%dy",
  },
});
const TimeAgo = () => {
  const ref = useRef(Date.now());
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  });

  return <span className="cursor-default">Updated {dayjs(ref.current).from(now)}</span>;
};

export default TimeAgo;
