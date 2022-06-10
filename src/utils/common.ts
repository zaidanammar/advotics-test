import moment from "moment";

type formatCurrencyProps = {
  value: number;
  lang?: string;
  currency?: string;
};

export const formatCurrency = ({
  value,
  lang = "id-ID",
  currency = "IDR",
}: formatCurrencyProps) => {
  return value.toLocaleString(lang, {
    style: "currency",
    currency,
  });
};

export const formatDate = (
  date: Date | string,
  format:
    | "YYYY-MM-DD"
    | "DD/MM/YYYY"
    | "YYYY"
    | "MM"
    | "DD"
    | "LLLL"
    | "llll"
    | "LLL"
    | "lll" = "YYYY-MM-DD",
  isIso?: boolean
) => {
  if (isIso) {
    return moment(date).toISOString();
  }
  return moment(date).format(format);
};
