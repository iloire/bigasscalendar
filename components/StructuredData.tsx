export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Big Ass Calendar",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A free yearly calendar generator for planning goals and tracking inspiration. Create customizable, printable calendars with multiple themes and bilingual support.",
    "featureList": [
      "Yearly calendar view",
      "Customizable themes",
      "Bilingual support (English and Spanish)",
      "Printable format",
      "Goal tracking",
      "Inspiration planner",
      "Multiple color themes",
      "Custom titles and year selection"
    ],
    "screenshot": "https://bigasscalendar.com/screenshot.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bigasscalendar.com"
      }
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Big Ass Calendar",
    "url": "https://bigasscalendar.com",
    "logo": "https://bigasscalendar.com/icon.png",
    "description": "Create and print customizable yearly calendars for goal tracking and inspiration"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
