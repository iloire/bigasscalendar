# Big Ass Calendar

A Next.js application that generates customizable, print-optimized year-long calendars. Perfect for wall-mounted planning and large format printing.

## Features

- **Full Year View**: All 12 months displayed in a single grid layout
- **Weekend Highlighting**: Saturdays and Sundays are visually distinguished
- **Bilingual Support**: Toggle between English and Spanish
- **8 Color Themes**: Classic Blue, Forest Green, Royal Purple, Bold Red, Sunset Orange, Pretty Pink, Ocean Teal, and Monochrome
- **Customizable Cell Heights**: Choose between Compact (2.5cm), Medium (3.5cm), Large (4.5cm), or Extra Large (5.5cm)
- **Custom Titles**: Personalize your calendar with a custom title
- **Print Optimized**: Designed for A1 landscape printing with proper page breaks and sizing

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4.x
- Inter font

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
npm start
```

## Usage

1. **Select Year**: Choose any year between 1900 and 2100
2. **Choose Language**: Switch between English and Spanish day/month names
3. **Select Cell Height**: Adjust cell height based on your printing needs
4. **Pick a Theme**: Select from 8 color themes to match your style
5. **Add Custom Title** (optional): Replace the default title with your own
6. **Print**: Click "Print Calendar" to generate a print-ready version

## Printing Tips

- The calendar is optimized for A1 landscape format
- Use "Print to PDF" if you want to save digitally before printing
- Adjust print margins to "None" for best results
- Ensure "Background Graphics" is enabled in print settings

## Project Structure

```
app/
├── globals.css       # Global styles and print CSS
├── layout.tsx        # Root layout
└── page.tsx          # Main page with controls
components/
└── Calendar.tsx      # Calendar grid component
lib/
├── calendar.ts       # Calendar generation logic
└── themes.ts         # Theme definitions
```

## License

ISC
