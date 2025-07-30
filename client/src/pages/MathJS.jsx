import React, { useRef } from 'react';

const MathPage = () => {
  // Refs for each math method
  const floorRef = useRef(null);
  const ceilRef = useRef(null);
  const roundRef = useRef(null);
  const truncRef = useRef(null);
  const randomRef = useRef(null);
  const minMaxRef = useRef(null);
  const powSqrtRef = useRef(null);
  const absSignRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    ref.current.style.color = "red";
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript Math Methods</h1>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => scrollToRef(floorRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            floor()
          </button>
          <button onClick={() => scrollToRef(ceilRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            ceil()
          </button>
          <button onClick={() => scrollToRef(roundRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            round()
          </button>
          <button onClick={() => scrollToRef(truncRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            trunc()
          </button>
          <button onClick={() => scrollToRef(randomRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            random()
          </button>
          <button onClick={() => scrollToRef(minMaxRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            min()/max()
          </button>
          <button onClick={() => scrollToRef(powSqrtRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            pow()/sqrt()
          </button>
          <button onClick={() => scrollToRef(absSignRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            abs()/sign()
          </button>
        </div>

        {/* Math Method Sections */}
        <div className="space-y-8">
          {/* Math.floor() */}
          <section ref={floorRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.floor()</h2>
            <p className="mb-4">Rounds down the value to the nearest smaller whole number. Even if the decimal is .9, it will go down.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`console.log(Math.floor(4.5));     // Output: 4
console.log(Math.floor(4.9));     // Output: 4
console.log(Math.floor(-4.1));    // Output: -5 (goes to lower number)

// Practical use: Getting whole numbers from division
const items = 17;
const itemsPerPage = 5;
const totalPages = Math.floor(items / itemsPerPage) + 1; // 4 pages`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need to round down to the nearest integer</li>
                <li>For pagination calculations</li>
                <li>When generating random integers within a range</li>
                <li>For financial calculations where you need to round down</li>
              </ul>
            </div>
          </section>

          {/* Math.ceil() */}
          <section ref={ceilRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.ceil()</h2>
            <p className="mb-4">Rounds up the value to the nearest larger whole number. Even if the decimal is .1, it will go up.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`console.log(Math.ceil(4.1));      // Output: 5
console.log(Math.ceil(4.0001));   // Output: 5
console.log(Math.ceil(-4.9));     // Output: -4 (goes to higher number)

// Practical use: Calculating required resources
const users = 102;
const capacityPerServer = 50;
const serversNeeded = Math.ceil(users / capacityPerServer); // 3 servers`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need to round up to ensure coverage</li>
                <li>For resource allocation calculations</li>
                <li>When you can't have partial units (like people, servers)</li>
                <li>For pricing calculations where you round up</li>
              </ul>
            </div>
          </section>

          {/* Math.round() */}
          <section ref={roundRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.round()</h2>
            <p className="mb-4">Rounds to the nearest integer. Values exactly halfway between are rounded up.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`console.log(Math.round(4.4));    // Output: 4
console.log(Math.round(4.5));    // Output: 5 (rounds up at .5)
console.log(Math.round(-4.4));   // Output: -4
console.log(Math.round(-4.5));   // Output: -4 (but -4.6 would be -5)

// Practical use: General rounding for display
const price = 19.99;
const roundedPrice = Math.round(price); // 20`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>For general rounding purposes</li>
                <li>When displaying rounded values to users</li>
                <li>When you need standard rounding behavior</li>
                <li>For statistical calculations where you need nearest integer</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Note:</h3>
              <p>Negative numbers round differently at exactly .5 (-4.5 rounds to -4, but -4.6 rounds to -5)</p>
            </div>
          </section>

          {/* Math.trunc() */}
          <section ref={truncRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.trunc()</h2>
            <p className="mb-4">Removes the decimal part and returns the integer portion only (truncates toward zero).</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`console.log(Math.trunc(4.88));   // Output: 4
console.log(Math.trunc(-4.88));  // Output: -4
console.log(Math.trunc(4.1));    // Output: 4
console.log(Math.trunc(-4.1));   // Output: -4

// Practical use: Getting integer part without rounding
const floatNumber = 12.3456;
const integerPart = Math.trunc(floatNumber); // 12`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need just the integer part without rounding</li>
                <li>For splitting numbers into integer and fractional parts</li>
                <li>When working with coordinates or grid systems</li>
                <li>For faster integer conversion than parseInt()</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Difference from floor():</h3>
              <p>For positive numbers, trunc() behaves like floor(), but for negative numbers, trunc() moves toward zero while floor() moves toward negative infinity.</p>
            </div>
          </section>

          {/* Math.random() */}
          <section ref={randomRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.random()</h2>
            <p className="mb-4">Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic random number
console.log(Math.random()); // 0.123456789 (example)

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Password generator example
function generatePassword(length) {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  let password = "";
  
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  
  return password;
}

console.log(generatePassword(12)); // Example: "xK3$9jLp2#qW"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>For generating random numbers or selections</li>
                <li>Creating random test data</li>
                <li>Implementing games or chance-based features</li>
                <li>When you need non-cryptographic randomness</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Not cryptographically secure (use crypto.getRandomValues() for security)</li>
                <li>The distribution is uniform but pseudo-random</li>
                <li>Always combine with Math.floor() for integer ranges</li>
              </ul>
            </div>
          </section>

          {/* Math.min()/max() */}
          <section ref={minMaxRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.min() and Math.max()</h2>
            <p className="mb-4">Returns the smallest or largest of zero or more numbers.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic usage
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3

// With arrays (using spread operator)
const numbers = [4, 2, 8, 6];
console.log(Math.min(...numbers)); // 2
console.log(Math.max(...numbers)); // 8

// Practical use: Clamping values
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(15, 0, 10)); // 10`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Finding extremes in a set of numbers</li>
                <li>Implementing value clamping</li>
                <li>Data validation (ensuring values are within bounds)</li>
                <li>Statistical calculations</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Special Cases:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Math.min() with no arguments returns Infinity</li>
                <li>Math.max() with no arguments returns -Infinity</li>
                <li>With NaN in arguments, returns NaN</li>
              </ul>
            </div>
          </section>

          {/* Math.pow()/sqrt() */}
          <section ref={powSqrtRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.pow() and Math.sqrt()</h2>
            <p className="mb-4">Math.pow() returns the base to the exponent power. Math.sqrt() returns the square root.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic power operations
console.log(Math.pow(2, 3));    // 8 (2³)
console.log(2 ** 3);            // 8 (ES6 exponentiation operator)

// Square root
console.log(Math.sqrt(16));     // 4
console.log(Math.sqrt(2));      // 1.4142135623730951

// Practical use: Distance calculation (Pythagorean theorem)
function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance(0, 0, 3, 4)); // 5`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mathematical calculations requiring exponents</li>
                <li>Geometric calculations (distances, areas)</li>
                <li>Physics simulations</li>
                <li>Financial calculations (compound interest)</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Modern Alternative:</h3>
              <p>ES6 introduced the exponentiation operator (**) which is often clearer than Math.pow():</p>
              <pre className="bg-gray-900 p-2 rounded mt-2">
                <code>{`console.log(2 ** 3); // 8 (equivalent to Math.pow(2, 3))`}</code>
              </pre>
            </div>
          </section>

          {/* Math.abs()/sign() */}
          <section ref={absSignRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Math.abs() and Math.sign()</h2>
            <p className="mb-4">Math.abs() returns the absolute value. Math.sign() returns the sign of a number.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Absolute value
console.log(Math.abs(-4.5));    // 4.5
console.log(Math.abs(4.5));     // 4.5

// Sign function
console.log(Math.sign(4.5));    // 1 (positive)
console.log(Math.sign(-4.5));   // -1 (negative)
console.log(Math.sign(0));      // 0
console.log(Math.sign(-0));     // -0

// Practical use: Direction handling
function move(distance, direction) {
  const speed = Math.abs(distance) * 10;
  const dir = Math.sign(distance);
  console.log(\`Moving \${speed} units in direction \${dir}\`);
}

move(5);   // Moving 50 units in direction 1
move(-3);  // Moving 30 units in direction -1`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need to work with magnitude regardless of sign</li>
                <li>For physics calculations involving direction</li>
                <li>Normalizing values</li>
                <li>Implementing comparison functions</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Math.sign() Returns:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>1 if positive</li>
                <li>-1 if negative</li>
                <li>0 for positive zero</li>
                <li>-0 for negative zero</li>
                <li>NaN if the argument is NaN or not a number</li>
              </ul>
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

export default MathPage;