"use client";

import { useState } from "react";
import Calendar from "@/components/Calendar";
import { themes, getTheme } from "@/lib/themes";

export default function Home() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [themeId, setThemeId] = useState('blue');
  const [cellHeight, setCellHeight] = useState<'compact' | 'medium' | 'large' | 'extra-large'>('medium');

  const handlePrint = () => {
    window.print();
  };

  const currentTheme = getTheme(themeId);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Controls - hidden during print */}
      <div className="no-print bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 items-center mb-4">
            <div className="flex-1">
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                Year
              </label>
              <input
                id="year"
                type="number"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value) || new Date().getFullYear())}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1900"
                max="2100"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="cellHeight" className="block text-sm font-medium text-gray-700 mb-1">
                Cell Height
              </label>
              <select
                id="cellHeight"
                value={cellHeight}
                onChange={(e) => setCellHeight(e.target.value as 'compact' | 'medium' | 'large' | 'extra-large')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="compact">Compact (2.5cm)</option>
                <option value="medium">Medium (3.5cm)</option>
                <option value="large">Large (4.5cm)</option>
                <option value="extra-large">Extra Large (5.5cm)</option>
              </select>
            </div>
            <div className="flex-[2]">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
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
            <div className="pt-6">
              <button
                onClick={handlePrint}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Print Calendar
              </button>
            </div>
          </div>

          {/* Theme Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    ringColor: theme.colors.primary,
                  }}
                >
                  {theme.name}
                </button>
              ))}
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
