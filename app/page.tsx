"use client";

import { useState, useEffect } from "react";
import Calendar from "@/components/Calendar";
import { themes, getTheme } from "@/lib/themes";

export default function Home() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [themeId, setThemeId] = useState('blue');
  const [cellHeight, setCellHeight] = useState<'compact' | 'medium' | 'large' | 'extra-large'>('medium');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedYear = localStorage.getItem('calendar-year');
    const savedTitle = localStorage.getItem('calendar-title');
    const savedLanguage = localStorage.getItem('calendar-language');
    const savedTheme = localStorage.getItem('calendar-theme');
    const savedCellHeight = localStorage.getItem('calendar-cell-height');

    if (savedYear) setYear(parseInt(savedYear));
    if (savedTitle) setTitle(savedTitle);
    if (savedLanguage) setLanguage(savedLanguage as 'en' | 'es');
    if (savedTheme) setThemeId(savedTheme);
    if (savedCellHeight) setCellHeight(savedCellHeight as 'compact' | 'medium' | 'large' | 'extra-large');
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('calendar-year', year.toString());
  }, [year]);

  useEffect(() => {
    localStorage.setItem('calendar-title', title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem('calendar-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('calendar-theme', themeId);
  }, [themeId]);

  useEffect(() => {
    localStorage.setItem('calendar-cell-height', cellHeight);
  }, [cellHeight]);

  const handlePrint = () => {
    window.print();
  };

  const currentTheme = getTheme(themeId);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Controls - hidden during print */}
      <div className="no-print bg-white shadow-md sticky top-0 z-10" style={{ padding: '1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            <div>
              <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-2">
                Year
              </label>
              <input
                id="year"
                type="number"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value) || new Date().getFullYear())}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                min="1900"
                max="2100"
              />
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-semibold text-gray-700 mb-2">
                Language
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            <div>
              <label htmlFor="cellHeight" className="block text-sm font-semibold text-gray-700 mb-2">
                Cell Height
              </label>
              <select
                id="cellHeight"
                value={cellHeight}
                onChange={(e) => setCellHeight(e.target.value as 'compact' | 'medium' | 'large' | 'extra-large')}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="compact">Compact (2.5cm)</option>
                <option value="medium">Medium (3.5cm)</option>
                <option value="large">Large (4.5cm)</option>
                <option value="extra-large">Extra Large (5.5cm)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Print
              </label>
              <button
                onClick={handlePrint}
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-sm hover:shadow-md"
              >
                Print Calendar
              </button>
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Custom Title (optional)
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={`THE BIG A## CALENDAR ${year}`}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div style={{ gridColumn: 'span 4' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Color Theme
              </label>
              <div className="flex gap-2 flex-wrap">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setThemeId(theme.id)}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                      themeId === theme.id
                        ? 'ring-2 ring-offset-2'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: 'white',
                      ...(themeId === theme.id && {
                        '--tw-ring-color': theme.colors.primary,
                      } as React.CSSProperties),
                    }}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="w-full print:w-full">
        <Calendar year={year} title={title || undefined} language={language} theme={currentTheme} cellHeight={cellHeight} />
      </div>
    </div>
  );
}
