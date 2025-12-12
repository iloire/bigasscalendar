export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    border: string;
    weekendBg: string;
    text: string;
    monthLabel: string;
    dayNumber: string;
    dayName: string;
  };
}

export const themes: Theme[] = [
  {
    id: "blue",
    name: "Classic Blue",
    colors: {
      primary: "#0080FF",
      border: "#0080FF",
      weekendBg: "#B3D9FF",
      text: "#000000",
      monthLabel: "#0080FF",
      dayNumber: "#9CA3AF",
      dayName: "#0080FF",
    },
  },
  {
    id: "green",
    name: "Forest Green",
    colors: {
      primary: "#059669",
      border: "#059669",
      weekendBg: "#A7F3D0",
      text: "#000000",
      monthLabel: "#059669",
      dayNumber: "#9CA3AF",
      dayName: "#059669",
    },
  },
  {
    id: "purple",
    name: "Royal Purple",
    colors: {
      primary: "#7C3AED",
      border: "#7C3AED",
      weekendBg: "#DDD6FE",
      text: "#000000",
      monthLabel: "#7C3AED",
      dayNumber: "#9CA3AF",
      dayName: "#7C3AED",
    },
  },
  {
    id: "red",
    name: "Bold Red",
    colors: {
      primary: "#DC2626",
      border: "#DC2626",
      weekendBg: "#FECACA",
      text: "#000000",
      monthLabel: "#DC2626",
      dayNumber: "#9CA3AF",
      dayName: "#DC2626",
    },
  },
  {
    id: "orange",
    name: "Sunset Orange",
    colors: {
      primary: "#EA580C",
      border: "#EA580C",
      weekendBg: "#FED7AA",
      text: "#000000",
      monthLabel: "#EA580C",
      dayNumber: "#9CA3AF",
      dayName: "#EA580C",
    },
  },
  {
    id: "pink",
    name: "Pretty Pink",
    colors: {
      primary: "#DB2777",
      border: "#DB2777",
      weekendBg: "#FBCFE8",
      text: "#000000",
      monthLabel: "#DB2777",
      dayNumber: "#9CA3AF",
      dayName: "#DB2777",
    },
  },
  {
    id: "teal",
    name: "Ocean Teal",
    colors: {
      primary: "#0D9488",
      border: "#0D9488",
      weekendBg: "#99F6E4",
      text: "#000000",
      monthLabel: "#0D9488",
      dayNumber: "#9CA3AF",
      dayName: "#0D9488",
    },
  },
  {
    id: "monochrome",
    name: "Monochrome",
    colors: {
      primary: "#000000",
      border: "#000000",
      weekendBg: "#E5E7EB",
      text: "#000000",
      monthLabel: "#000000",
      dayNumber: "#9CA3AF",
      dayName: "#000000",
    },
  },
];

export function getTheme(themeId: string): Theme {
  return themes.find((t) => t.id === themeId) || themes[0];
}
