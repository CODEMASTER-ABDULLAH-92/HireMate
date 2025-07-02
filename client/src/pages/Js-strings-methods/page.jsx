
import React, { useRef } from 'react';

const StringMethodsPage = () => {
  // Refs for each method
  const charAtRef = useRef(null);
  const lengthRef = useRef(null);
  const concatRef = useRef(null);
  const caseRef = useRef(null);
  const includesRef = useRef(null);
  const sliceRef = useRef(null);
  const substringRef = useRef(null);
  const replaceRef = useRef(null);
  const trimRef = useRef(null);
  const splitRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    ref.current.style.color = "red";
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript String Methods</h1>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => scrollToRef(charAtRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            charAt()
          </button>
          <button onClick={() => scrollToRef(lengthRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            length
          </button>
          <button onClick={() => scrollToRef(concatRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            concat()
          </button>
          <button onClick={() => scrollToRef(caseRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            Case Methods
          </button>
          <button onClick={() => scrollToRef(includesRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            includes()
          </button>
          <button onClick={() => scrollToRef(sliceRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            slice()
          </button>
          <button onClick={() => scrollToRef(substringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            substring()
          </button>
          <button onClick={() => scrollToRef(replaceRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            replace()
          </button>
          <button onClick={() => scrollToRef(trimRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            trim()
          </button>
          <button onClick={() => scrollToRef(splitRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            split()
          </button>
        </div>

        {/* Method Sections */}
        <div className="space-y-8">
          {/* charAt() */}
          <section ref={charAtRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">charAt() Method</h2>
            <p className="mb-4">Returns the character at a specified index in a string.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let str = "abdullah";
let char = str.charAt(2);  // 'd'
console.log(char);`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Points:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Index starts at 0 (first character is index 0)</li>
                <li>Returns empty string if index is out of range</li>
                <li>Alternative: you can use array-like notation (str[2])</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Examples:</h3>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`console.log(str.charAt(0)); // 'a'
console.log(str.charAt(str.length - 1)); // 'h' (last character)`}</code>
              </pre>
            </div>
          </section>

          {/* length */}
          <section ref={lengthRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">length Property</h2>
            <p className="mb-4">Returns the number of characters in a string.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let str = "mara name abdullah hai ";
let length = str.length;
console.log(length); // 25`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Notes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>This is a property, not a method (no parentheses)</li>
                <li>Includes all whitespace characters</li>
                <li>Useful for loops and boundary checks</li>
              </ul>
            </div>
          </section>

          {/* concat() */}
          <section ref={concatRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">concat() Method</h2>
            <p className="mb-4">Combines two or more strings and returns a new string.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let str1 = "Muhammad ";
let str2 = "Abdullah";
let fullName = str1.concat(str2);
console.log(fullName); // "Muhammad Abdullah"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Alternatives:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Using + operator: <code className="bg-gray-800 px-1 rounded">str1 + str2</code></li>
                {/* <li>Template literals: <code className="bg-gray-800 px-1 rounded">`${str1}${str2}`</code></li> */}
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Best Practice:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>For simple concatenation, + operator is more readable</li>
                <li>concat() is useful when combining multiple strings in a chain</li>
              </ul>
            </div>
          </section>

          {/* Case Methods */}
          <section ref={caseRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Case Conversion Methods</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-orange-200 mb-2">toUpperCase()</h3>
              <p className="mb-2">Converts a string to uppercase letters.</p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`let name = "abdullah";
console.log(name.toUpperCase()); // "ABDULLAH"`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-200 mb-2">toLowerCase()</h3>
              <p className="mb-2">Converts a string to lowercase letters.</p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`let upperName = "ABDULLAH";
console.log(upperName.toLowerCase()); // "abdullah"`}</code>
              </pre>
            </div>

            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Common Use Cases:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Normalizing user input for case-insensitive comparisons</li>
                <li>Formatting strings for display</li>
                <li>Preparing data for case-sensitive operations</li>
              </ul>
            </div>
          </section>

          {/* includes() */}
          <section ref={includesRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">includes() Method</h2>
            <p className="mb-4">Determines whether a string contains another string.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let text = "abdullah";
console.log(text.includes("dull"));   // true
console.log(text.includes("hello")); // false`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Case-sensitive search</li>
                <li>Returns boolean (true/false)</li>
                <li>Optional second parameter for starting position</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Alternatives:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code className="bg-gray-800 px-1 rounded">indexOf()</code> - returns position or -1</li>
                <li><code className="bg-gray-800 px-1 rounded">search()</code> - supports regular expressions</li>
              </ul>
            </div>
          </section>

          {/* slice() */}
          <section ref={sliceRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">slice() Method</h2>
            <p className="mb-4">Extracts a section of a string and returns it as a new string.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let word = "frontend";
console.log(word.slice(0, 5));   // "front"
console.log(word.slice(-4));     // "end"
console.log(word.slice(1, -1));  // "ronten"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Parameters:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>start</strong>: Beginning index (inclusive)</li>
                <li><strong>end</strong>: Ending index (exclusive, optional)</li>
                <li>Negative values count from the end of the string</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Behavior:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Returns empty string if start equals end</li>
                {/* <li>If start > end, returns empty string</li> */}
                <li>Doesn't modify original string</li>
              </ul>
            </div>
          </section>

          {/* substring() */}
          <section ref={substringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">substring() Method</h2>
            <p className="mb-4">Extracts characters between two indices.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let str = "frontend";
console.log(str.substring(0, 5)); // "front"
console.log(str.substring(1, 4)); // "ron"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Differences from slice():</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Doesn't accept negative indices</li>
                {/* <li>Swaps parameters if start > end</li> */}
                <li>Treats negative parameters as 0</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">When to use:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When you need simple positive-index extraction</li>
                <li>When negative indices would complicate your code</li>
              </ul>
            </div>
          </section>

          {/* replace() */}
          <section ref={replaceRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">replace() Method</h2>
            <p className="mb-4">Replaces text in a string, using a string or regular expression.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let oldName = "abdullah";
let newName = "rajab";
console.log(oldName.replace(oldName, newName)); // "rajab"

// Replace single character
console.log("code".replace("c", "m")); // "mode"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Advanced Usage:</h3>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`// Using regular expressions
let text = "Visit Microsoft";
console.log(text.replace(/Microsoft/, "Google")); // "Visit Google"

// Global replacement
let str = "Apples are round, and apples are juicy";
console.log(str.replace(/apples/gi, "oranges"));`}</code>
              </pre>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Notes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>By default, only replaces first match</li>
                <li>Use regex with g flag for global replacement</li>
                <li>Case-sensitive by default (use i flag for case-insensitive)</li>
              </ul>
            </div>
          </section>

          {/* trim() */}
          <section ref={trimRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">trim() Method</h2>
            <p className="mb-4">Removes whitespace from both ends of a string.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`let spaced = "   abdullah   ";
console.log(spaced.trim()); // "abdullah"`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Variations:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><code className="bg-gray-800 px-1 rounded">trimStart()</code> - removes whitespace from start only</li>
                <li><code className="bg-gray-800 px-1 rounded">trimEnd()</code> - removes whitespace from end only</li>
              </ul>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Use Cases:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cleaning user input</li>
                <li>Preparing strings for comparison</li>
                <li>Removing accidental whitespace</li>
              </ul>
            </div>
          </section>

          {/* split() */}
          <section ref={splitRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">split() Method</h2>
            <p className="mb-4">Splits a string into an array of substrings.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`// Split by space
let sentence = "Hello my name is Abdullah";
let words = sentence.split(" ");
console.log(words); // ["Hello", "my", "name", "is", "Abdullah"]

// Split by comma
let fruits = "apple,banana,mango";
console.log(fruits.split(",")); // ["apple", "banana", "mango"]

// Split by character
console.log("abc".split("")); // ["a", "b", "c"]`}</code>
            </pre>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-2">Advanced Usage:</h3>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                <code>{`// Limit number of splits
console.log("a,b,c,d".split(",", 2)); // ["a", "b"]

// Using regular expressions
console.log("hello world".split(/\\s+/)); // ["hello", "world"]

// Splitting on multiple delimiters
console.log("apple,banana;mango".split(/[,;]/)); // ["apple", "banana", "mango"]`}</code>
              </pre>
              <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Common Use Cases:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Parsing CSV data</li>
                <li>Processing command-line arguments</li>
                <li>Tokenizing strings</li>
                <li>Converting strings to character arrays</li>
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

export default StringMethodsPage;