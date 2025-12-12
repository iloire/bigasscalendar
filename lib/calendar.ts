export interface DayInfo {
  date: number;
  month: number;
  year: number;
  dayOfWeek: number; // 0 = Sunday, 6 = Saturday
  dayOfWeekName: string;
  isWeekend: boolean;
}

export interface MonthData {
  name: string;
  abbreviation: string;
  days: (DayInfo | null)[];
}

const MONTH_NAMES_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTH_NAMES_ES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const MONTH_ABBR_EN = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const MONTH_ABBR_ES = [
  "ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
  "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"
];

const DAY_NAMES_EN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const DAY_NAMES_ES = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month: number, year: number): number {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 1 && isLeapYear(year)) {
    return 29;
  }
  return daysInMonth[month];
}

export function generateYearCalendar(year: number, language: 'en' | 'es' = 'en'): MonthData[] {
  const calendar: MonthData[] = [];
  const dayNames = language === 'es' ? DAY_NAMES_ES : DAY_NAMES_EN;
  const monthNames = language === 'es' ? MONTH_NAMES_ES : MONTH_NAMES_EN;
  const monthAbbr = language === 'es' ? MONTH_ABBR_ES : MONTH_ABBR_EN;

  for (let month = 0; month < 12; month++) {
    const daysInMonth = getDaysInMonth(month, year);
    const days: (DayInfo | null)[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      days.push({
        date: day,
        month,
        year,
        dayOfWeek,
        dayOfWeekName: dayNames[dayOfWeek],
        isWeekend
      });
    }

    // Pad the rest with nulls to make all months have same grid size (31 days)
    while (days.length < 31) {
      days.push(null);
    }

    calendar.push({
      name: monthNames[month],
      abbreviation: monthAbbr[month],
      days
    });
  }

  return calendar;
}
