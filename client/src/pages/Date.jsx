import React, { useRef } from 'react';

const DateMethodsPage = () => {
  // Refs for each method
  const getDateRef = useRef(null);
  const getDayRef = useRef(null);
  const getFullYearRef = useRef(null);
  const getMonthRef = useRef(null);
  const getTimeRef = useRef(null);
  const toDateStringRef = useRef(null);
  const toISOStringRef = useRef(null);
  const toLocaleDateStringRef = useRef(null);
  const toLocaleTimeStringRef = useRef(null);
  const toTimeStringRef = useRef(null);
  const toUTCStringRef = useRef(null);
  const dateNowRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    ref.current.style.color = "red";
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript Date Methods</h1>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => scrollToRef(getDateRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            getDate()
          </button>
          <button onClick={() => scrollToRef(getDayRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            getDay()
          </button>
          <button onClick={() => scrollToRef(getFullYearRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            getFullYear()
          </button>
          <button onClick={() => scrollToRef(getMonthRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            getMonth()
          </button>
          <button onClick={() => scrollToRef(getTimeRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            getTime()
          </button>
          <button onClick={() => scrollToRef(toDateStringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            toDateString()
          </button>
          <button onClick={() => scrollToRef(toISOStringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            toISOString()
          </button>
          <button onClick={() => scrollToRef(toLocaleDateStringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            toLocaleDateString()
          </button>
          <button onClick={() => scrollToRef(toLocaleTimeStringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            toLocaleTimeString()
          </button>
          <button onClick={() => scrollToRef(toTimeStringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            toTimeString()
          </button>
          <button onClick={() => scrollToRef(toUTCStringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            toUTCString()
          </button>
          <button onClick={() => scrollToRef(dateNowRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            Date.now()
          </button>
        </div>

        {/* Method Sections */}
        <div className="space-y-8">
          {/* getDate() */}
          <section ref={getDateRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">getDate() Method</h2>
            <p className="mb-4">Returns the day of the month (1-31) for the specified date.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.getDate()); // e.g. 23`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Points:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Returns a number between 1 and 31</li>
                <li>Corresponds to the local time zone</li>
                <li>Useful for displaying or comparing specific days</li>
              </ul>
            </div>
          </section>

          {/* getDay() */}
          <section ref={getDayRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">getDay() Method</h2>
            <p className="mb-4">Returns the day of the week (0-6) for the specified date.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.getDay()); // e.g. 1 (Monday)`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Day Values:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>0 = Sunday</li>
                <li>1 = Monday</li>
                <li>2 = Tuesday</li>
                <li>3 = Wednesday</li>
                <li>4 = Thursday</li>
                <li>5 = Friday</li>
                <li>6 = Saturday</li>
              </ul>
            </div>
          </section>

          {/* getFullYear() */}
          <section ref={getFullYearRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">getFullYear() Method</h2>
            <p className="mb-4">Returns the year (4 digits for 4-digit years) of the specified date.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.getFullYear()); // e.g. 2025`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Always use getFullYear() instead of getYear() (which is deprecated)</li>
                <li>Returns full 4-digit year (1999, 2000, etc.)</li>
                <li>For 2-digit year, use: <code className="bg-gray-800 px-1 rounded">getFullYear().toString().slice(-2)</code></li>
              </ul>
            </div>
          </section>

          {/* getMonth() */}
          <section ref={getMonthRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">getMonth() Method</h2>
            <p className="mb-4">Returns the month (0-11) in the specified date.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.getMonth()); // e.g. 5 (June)`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Month Values:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>0 = January</li>
                <li>1 = February</li>
                <li>2 = March</li>
                <li>3 = April</li>
                <li>4 = May</li>
                <li>5 = June</li>
                <li>6 = July</li>
                <li>7 = August</li>
                <li>8 = September</li>
                <li>9 = October</li>
                <li>10 = November</li>
                <li>11 = December</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Tip:</h3>
              <p>For display purposes, you might want to add 1 or use an array of month names.</p>
            </div>
          </section>

          {/* getTime() */}
          <section ref={getTimeRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">getTime() Method</h2>
            <p className="mb-4">Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.getTime()); // e.g. 1750669523190`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Uses:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Creating timestamps</li>
                <li>Measuring time intervals</li>
                <li>Comparing dates</li>
                <li>Storing dates in databases</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Note:</h3>
              <p>This is the same value as Date.now() but for a specific Date object rather than the current time.</p>
            </div>
          </section>

          {/* toDateString() */}
          <section ref={toDateStringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">toDateString() Method</h2>
            <p className="mb-4">Returns the date portion of a Date object in a human readable form.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.toDateString()); // e.g. "Mon Jun 23 2025"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Characteristics:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Format: "Day Month Date Year"</li>
                <li>Uses 3-letter day and month abbreviations</li>
                <li>Good for quick debugging or simple displays</li>
                <li>Not suitable for locale-specific formatting</li>
              </ul>
            </div>
          </section>

          {/* toISOString() */}
          <section ref={toISOStringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">toISOString() Method</h2>
            <p className="mb-4">Returns a string in simplified extended ISO format (ISO 8601).</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.toISOString()); // e.g. "2025-06-23T06:45:23.190Z"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Always uses UTC time (indicated by the Z suffix)</li>
                <li>Format: YYYY-MM-DDTHH:mm:ss.sssZ</li>
                <li>Ideal for APIs, databases, and data exchange</li>
                <li>Consistent across all browsers and environments</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Use Cases:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sending dates to servers</li>
                <li>Storing dates in databases</li>
                <li>When timezone consistency is important</li>
              </ul>
            </div>
          </section>

          {/* toLocaleDateString() */}
          <section ref={toLocaleDateStringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">toLocaleDateString() Method</h2>
            <p className="mb-4">Returns a string with a language sensitive representation of the date portion.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.toLocaleDateString()); // e.g. "6/23/2025" (varies by locale)`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Customization Options:</h3>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`// With options
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};
console.log(date.toLocaleDateString('en-US', options));
// e.g. "Monday, June 23, 2025"`}</code>
              </pre>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Best For:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Displaying dates to users in their local format</li>
                <li>Applications that need to support multiple locales</li>
                <li>When you need flexible date formatting</li>
              </ul>
            </div>
          </section>

          {/* toLocaleTimeString() */}
          <section ref={toLocaleTimeStringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">toLocaleTimeString() Method</h2>
            <p className="mb-4">Returns a string with a language sensitive representation of the time portion.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.toLocaleTimeString()); // e.g. "11:45:23 AM" (varies by locale)`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Customization Options:</h3>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`// With options
const options = { 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit',
  hour12: true 
};
console.log(date.toLocaleTimeString('en-US', options));
// e.g. "11:45:23 AM"`}</code>
              </pre>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Note:</h3>
              <p>This is the time-only equivalent of toLocaleDateString() and shares similar localization benefits.</p>
            </div>
          </section>

          {/* toTimeString() */}
          <section ref={toTimeStringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">toTimeString() Method</h2>
            <p className="mb-4">Returns the time portion of a Date object in human readable form, including timezone.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.toTimeString()); // e.g. "11:45:23 GMT+0500 (Pakistan Standard Time)"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Format:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>HH:mm:ss GMT±HHMM (Timezone Name)</li>
                <li>Shows local time and timezone offset</li>
                <li>Useful for debugging timezone issues</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Comparison:</h3>
              <p>Unlike toLocaleTimeString(), this always uses the same format regardless of locale.</p>
            </div>
          </section>

          {/* toUTCString() */}
          <section ref={toUTCStringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">toUTCString() Method</h2>
            <p className="mb-4">Converts a date to a string, using the UTC time zone.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const date = new Date();
console.log(date.toUTCString()); // e.g. "Mon, 23 Jun 2025 06:45:23 GMT"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Points:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Format: "Day, DD Month YYYY HH:mm:ss GMT"</li>
                <li>Converts the date to UTC before displaying</li>
                <li>Commonly used in HTTP headers and email dates</li>
                <li>Good for international applications</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Note:</h3>
              <p>This is similar to toISOString() but in a more human-readable format.</p>
            </div>
          </section>

          {/* Date.now() */}
          <section ref={dateNowRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Date.now() Method</h2>
            <p className="mb-4">Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`console.log(Date.now()); // e.g. 1750669523190`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Performance Benefits:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>More efficient than <code className="bg-gray-800 px-1 rounded">new Date().getTime()</code></li>
                <li>Doesn't create a Date object instance</li>
                <li>Recommended for timing operations and performance measurement</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Common Uses:</h3>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`// Measuring execution time
const start = Date.now();
// Some operation...
const end = Date.now();
console.log(\`Operation took \${end - start}ms\`);`}</code>
              </pre>
            </div>
          </section>
        </div>
        
        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateMethodsPage;