"use client";
import React, { useRef } from 'react';

const LoopsPage = () => {
  // Refs for each loop type
  const forRef = useRef(null);
  const whileRef = useRef(null);
  const doWhileRef = useRef(null);
  const forInRef = useRef(null);
  const forOfRef = useRef(null);
  const forEachRef = useRef(null);
  const mapRef = useRef(null);
  const breakContinueRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    ref.current.style.color = "red";
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript Loops</h1>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => scrollToRef(forRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            for
          </button>
          <button onClick={() => scrollToRef(whileRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            while
          </button>
          <button onClick={() => scrollToRef(doWhileRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            do...while
          </button>
          <button onClick={() => scrollToRef(forInRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            for...in
          </button>
          <button onClick={() => scrollToRef(forOfRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            for...of
          </button>
          <button onClick={() => scrollToRef(forEachRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            forEach
          </button>
          <button onClick={() => scrollToRef(mapRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            map
          </button>
          <button onClick={() => scrollToRef(breakContinueRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            break/continue
          </button>
        </div>

        {/* Loop Sections */}
        <div className="space-y-8">
          {/* for loop */}
          <section ref={forRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">for Loop</h2>
            <p className="mb-4">The most common loop in JavaScript. It repeats until a specified condition evaluates to false.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Looping through an array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you know exactly how many times you want to loop</li>
                <li>When you need to access the index of each element</li>
                <li>For traditional array iteration with index access</li>
              </ul>
            </div>
          </section>

          {/* while loop */}
          <section ref={whileRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">while Loop</h2>
            <p className="mb-4">Executes its statements as long as a specified condition evaluates to true.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic while loop
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

// Real-world example: reading until condition met
let userInput;
while (userInput !== 'quit') {
  userInput = prompt('Enter "quit" to exit:');
}`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When the number of iterations is unknown</li>
                <li>When you need to loop until a certain condition is met</li>
                <li>For event loops or game loops</li>
              </ul>
            </div>
          </section>

          {/* do...while loop */}
          <section ref={doWhileRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">do...while Loop</h2>
            <p className="mb-4">Similar to while loop but guarantees at least one execution of the loop body.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic do...while loop
let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);

// Always executes at least once
let condition = false;
do {
  console.log('This will run once');
} while (condition);`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need to execute the loop body at least once</li>
                <li>For input validation where you want to ask at least once</li>
                <li>When the condition check needs to happen after the first iteration</li>
              </ul>
            </div>
          </section>

          {/* for...in loop */}
          <section ref={forInRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">for...in Loop</h2>
            <p className="mb-4">Iterates over the enumerable properties of an object, including inherited enumerable properties.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Iterating over object properties
const person = { name: 'John', age: 30, job: 'developer' };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
  // Output:
  // name: John
  // age: 30
  // job: developer
}

// With arrays (not recommended)
const colors = ['red', 'green', 'blue'];
for (const index in colors) {
  console.log(colors[index]); // red, green, blue
}`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need to iterate over object properties</li>
                <li>For debugging or inspection of object contents</li>
                <li>Not recommended for arrays (use for...of or forEach instead)</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Caveats:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Iterates over all enumerable properties, including inherited ones</li>
                <li>Order of iteration is not guaranteed</li>
                <li>Use hasOwnProperty() to filter out inherited properties</li>
              </ul>
            </div>
          </section>

          {/* for...of loop */}
          <section ref={forOfRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">for...of Loop</h2>
            <p className="mb-4">Creates a loop iterating over iterable objects (arrays, strings, maps, sets, etc.).</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Iterating over arrays
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, orange
}

// Iterating over strings
const str = 'hello';
for (const char of str) {
  console.log(char); // h, e, l, l, o
}

// Iterating over maps
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key, value); // a 1, b 2
}`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need to iterate over arrays, strings, or other iterables</li>
                <li>When you don't need the index (cleaner syntax than for loop)</li>
                <li>For working with collections like Map and Set</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Advantages:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cleaner syntax than traditional for loops</li>
                <li>Works with any iterable object</li>
                <li>Can use with break and continue</li>
              </ul>
            </div>
          </section>

          {/* forEach method */}
          <section ref={forEachRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">forEach() Method</h2>
            <p className="mb-4">Executes a provided function once for each array element.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic forEach
const numbers = [1, 2, 3];
numbers.forEach(num => {
  console.log(num * 2); // 2, 4, 6
});

// With index parameter
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you want to perform an operation on each array element</li>
                <li>When you need a more functional programming style</li>
                <li>When you don't need to break out of the loop early</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Limitations:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cannot use break or continue (use return for similar effect)</li>
                <li>Doesn't work with async/await as expected</li>
                <li>Returns undefined (not chainable like map/filter)</li>
              </ul>
            </div>
          </section>

          {/* map method */}
          <section ref={mapRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">map() Method</h2>
            <p className="mb-4">Creates a new array with the results of calling a provided function on every element.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Basic map
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// doubled: [2, 4, 6]

// Mapping objects
const users = [{name: 'Alice'}, {name: 'Bob'}];
const names = users.map(user => user.name);
// names: ['Alice', 'Bob']`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need to transform each element of an array</li>
                <li>When you want to create a new array based on an existing one</li>
                <li>For data transformation pipelines</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Key Points:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Returns a new array (doesn't mutate original)</li>
                <li>Chainable with other array methods</li>
                <li>Pure function when callback is pure</li>
              </ul>
            </div>
          </section>

          {/* break and continue */}
          <section ref={breakContinueRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">break and continue</h2>
            <p className="mb-4">Control statements that alter the normal flow of loops.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// break example
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exits the loop completely
  }
  console.log(i); // 0, 1, 2, 3, 4
}

// continue example
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skips the current iteration
  }
  console.log(i); // 0, 1, 3, 4
}

// Labeled statements (rarely used)
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // breaks out of both loops
    }
    console.log(i, j);
  }
}`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Differences:</h3>
              <table className="min-w-full bg-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left border-b border-gray-600">Statement</th>
                    <th className="px-4 py-2 text-left border-b border-gray-600">Effect</th>
                    <th className="px-4 py-2 text-left border-b border-gray-600">Works With</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-600">break</td>
                    <td className="px-4 py-2 border-b border-gray-600">Exits the loop immediately</td>
                    <td className="px-4 py-2 border-b border-gray-600">for, while, do...while, switch</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-600">continue</td>
                    <td className="px-4 py-2 border-b border-gray-600">Skips current iteration and continues with next</td>
                    <td className="px-4 py-2 border-b border-gray-600">for, while, do...while</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Best Practices:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use break to exit loops early when condition is met</li>
                <li>Use continue to skip specific iterations</li>
                <li>Avoid excessive use as it can make code harder to follow</li>
                <li>Consider alternative approaches like return or filtering</li>
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

export default LoopsPage;