export const fmt$ = (n) =>
  "$" +
  Number(n || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

/** Format a number with a fixed decimal count and thousands separators. */
export const fmtNum = (n, decimals = 2) =>
  Number(n || 0).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/** Locale-aware currency formatting. digits = decimal places. */
export const fmtMoney = (n, country, digits = 0) =>
  Number(n || 0).toLocaleString(country.locale, {
    style: "currency",
    currency: country.currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
