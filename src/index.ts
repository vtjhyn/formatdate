export function formatDate(date: Date, format: string): string {
  const hours = date.getHours();
  const isPM = hours >= 12;
  const hour12 = hours % 12 || 12;

  const map: { [key: string]: number | string } = {
    YYYY: date.getFullYear(),
    YY: date.getFullYear().toString().slice(-2),
    MM: padNumber(date.getMonth() + 1),
    DD: padNumber(date.getDate()),
    hh: padNumber(hour12),
    HH: padNumber(hours),
    mm: padNumber(date.getMinutes()),
    ss: padNumber(date.getSeconds()),
    A: isPM ? "PM" : "AM",
  };

  return format.replace(/YYYY|YY|MM|DD|hh|HH|mm|ss|A/g, (matched: string) => {
    return String(map[matched]);
  });
}

function padNumber(num: number): string {
  return num.toString().padStart(2, "0");
}
