"use client";

import { generateYearCalendar } from "@/lib/calendar";
import { type Theme } from "@/lib/themes";

interface CalendarProps {
  year: number;
  title?: string;
  language?: 'en' | 'es';
  theme: Theme;
  cellHeight?: 'compact' | 'medium' | 'large' | 'extra-large';
}

const heightClasses = {
  'compact': 'min-h-[3rem]',
  'medium': 'min-h-[4rem]',
  'large': 'min-h-[5rem]',
  'extra-large': 'min-h-[6rem]',
};

const heightPrintStyles = {
  'compact': '2.5cm',
  'medium': '3.5cm',
  'large': '4.5cm',
  'extra-large': '5.5cm',
};

export default function Calendar({ year, title, language = 'en', theme, cellHeight = 'medium' }: CalendarProps) {
  const calendar = generateYearCalendar(year, language);

  return (
    <div className="w-full bg-white print-calendar" style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem' }}>
      <style jsx>{`
        @media print {
          .print-cell {
            min-height: ${heightPrintStyles[cellHeight]} !important;
          }
        }
      `}</style>
      {/* Header */}
      <h1
        className="text-[3.5rem] leading-none font-black tracking-tight uppercase text-center print-title"
        style={{ fontFamily: 'Impact, Arial Black, sans-serif', color: theme.colors.primary, margin: 0, padding: 0, marginBottom: '0.25rem' }}
      >
        {title || `THE BIG A## CALENDAR ${year}`}
      </h1>

      {/* Calendar Grid */}
      <div className="border-[3px]" style={{ borderColor: theme.colors.border }}>
        {/* Month rows */}
        {calendar.map((month, monthIndex) => (
          <div
            key={month.name}
            className={`grid grid-cols-[50px_repeat(31,minmax(0,1fr))] ${monthIndex > 0 ? 'border-t-[3px]' : ''}`}
            style={monthIndex > 0 ? { borderColor: theme.colors.border } : {}}
          >
            {/* Month label */}
            <div
              className="bg-white border-r-[3px] flex items-center justify-center py-4"
              style={{ borderColor: theme.colors.border }}
            >
              <span
                className="font-black text-sm tracking-tight [writing-mode:vertical-rl] rotate-180 print-month-label"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif', color: theme.colors.monthLabel }}
              >
                {month.abbreviation}
              </span>
            </div>

            {/* Day cells */}
            {month.days.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`border-r ${heightClasses[cellHeight]} p-1 relative print-cell`}
                style={{
                  borderColor: `${theme.colors.border}4D`,
                  backgroundColor: day && day.isWeekend ? theme.colors.weekendBg : "white",
                  opacity: !day ? 0 : 1,
                }}
              >
                {day && (
                  <>
                    <div
                      className="absolute text-[0.50rem] font-bold leading-none print-day-number"
                      style={{ color: theme.colors.dayNumber, top: '0.10rem', left: '0.08rem' }}
                    >
                      {day.date}
                    </div>
                    <div
                      className="absolute text-[0.5rem] font-medium leading-tight text-center mt-5 tracking-wide print-day-name"
                      style={{ color: theme.colors.dayName,  top: '0.8rem', left: '0.08rem'  }}
                    >
                      {day.dayOfWeekName}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
