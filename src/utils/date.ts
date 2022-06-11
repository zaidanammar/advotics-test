import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  addYears,
} from "date-fns";
import { formatDate } from "./common";
import { isEqual } from "lodash";

export const defineds = {
  startOfDay: startOfDay(new Date()),
  endOfDay: endOfDay(new Date()),
  last7day: addDays(new Date(), -7),
  last30day: addDays(new Date(), -30),
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  endOfYear: endOfYear(new Date()),
  startOflastYear: startOfYear(addYears(new Date(), -1)),
  endOflastYear: endOfYear(addYears(new Date(), -1)),
};

const staticRangeHandler = {
  range: {},
  isSelected(range: { startDate: any; endDate: any }) {},
};

export function createStaticRanges(ranges: any[]) {
  return ranges.map((range: any) => ({ ...staticRangeHandler, ...range }));
}

export const defaultStaticRanges = createStaticRanges([
  {
    label: "Today",
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday,
      label: "Today",
    }),
  },
  {
    label: "Yesterday",
    range: () => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday,
      label: "Yesterday",
    }),
  },
  {
    label: "Last 7 days",
    range: () => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.last7day,
      label: "This Week",
    }),
  },
  {
    label: "Last 30 days",
    range: () => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.last30day,
      label: "Last Week",
    }),
  },
  {
    label: "This Month",
    range: () => ({
      startDate: defineds.startOfMonth,
      endDate: defineds.endOfDay,
      label: "This Month",
    }),
  },
  {
    label: "Last Month",
    range: () => ({
      startDate: defineds.startOfLastMonth,
      endDate: defineds.endOfLastMonth,
      label: "Last Month",
    }),
  },
]);

export const checkLabelColor = (date: { startDate: Date; endDate: Date }[]) => {
  const element = document.getElementsByClassName("rdrStaticRange");
  defaultStaticRanges.filter((el, idx) =>
    isEqual(
      formatDate(date[0].startDate, "YYYY-MM-DD"),
      formatDate(el.range().startDate, "YYYY-MM-DD")
    ) &&
    isEqual(
      formatDate(date[0].endDate, "YYYY-MM-DD"),
      formatDate(el.range().endDate, "YYYY-MM-DD")
    )
      ? element[idx].classList["add"]("text-primary", "font-bold")
      : element[idx].classList["remove"]("text-primary", "font-bold")
  );
};
