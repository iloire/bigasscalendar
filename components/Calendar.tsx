"use client";

import { generateYearCalendar } from "@/lib/calendar";
import { type Theme } from "@/lib/themes";

interface CalendarProps {
  year: number;
  title?: string;
  language?: 'en' | 'es';
  theme: Theme;
}

export default function Calendar({ year, title, language = 'en', theme }: CalendarProps) {
  const calendar = generateYearCalendar(year, language);

  return (
    <div className="w-full bg-white p-4">
      {/* Header */}
      <div className="mb-4">
        <h1
          className="text-[3.5rem] leading-none font-black tracking-tight uppercase text-center"
          style={{ fontFamily: 'Impact, Arial Black, sans-serif', color: theme.colors.primary }}
        >
          {title || `THE BIG A## CALENDAR ${year}`}
        </h1>
      </div>

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
                className="font-black text-sm tracking-tight [writing-mode:vertical-rl] rotate-180"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif', color: theme.colors.monthLabel }}
              >
                {month.abbreviation}
              </span>
            </div>

            {/* Day cells */}
            {month.days.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="border-r min-h-[4rem] p-1 relative"
                style={{
                  borderColor: `${theme.colors.border}4D`,
                  backgroundColor: day && day.isWeekend ? theme.colors.weekendBg : "white",
                  opacity: !day ? 0 : 1,
                }}
              >
                {day && (
                  <>
                    <div
                      className="absolute top-1 left-1.5 text-[0.5rem] font-light leading-none opacity-40"
                      style={{ color: theme.colors.dayNumber }}
                    >
                      {day.date}
                    </div>
                    <div
                      className="text-[0.5rem] font-medium leading-tight text-center mt-5 tracking-wide"
                      style={{ color: theme.colors.dayName }}
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
