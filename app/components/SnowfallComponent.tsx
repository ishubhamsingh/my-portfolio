"use client";

import Snowfall from "react-snowfall";

export default function SnowfallComponent() {
    return (
        isHolidaySeason() && <Snowfall 
        style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        />
    );
}

// Utility function to check if the current date is in the holiday season
function isHolidaySeason() {
    const today = new Date();
    const currentYear = today.getFullYear();
  
    // Define start and end dates for the holiday season
    const holidayStart = new Date(`${currentYear}-12-15`); // December 15th
    const holidayEnd = new Date(`${currentYear + 1}-01-05`); // January 5th (next year)
  
    // Check if today is between the start and end dates
    return today >= holidayStart && today <= holidayEnd;
  }