
import React, { useRef } from 'react';


const JsDataTypesPage = () => {
  // Refs for each section
  const primitiveRef = useRef(null);
  const objectRef = useRef(null);
  const specialRef = useRef(null);
  const typeConversionRef = useRef(null);
  const typeofRef = useRef(null);
  const bestPracticesRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript Data Types</h1>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => scrollToRef(primitiveRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Primitive Types
          </button>
          <button 
            onClick={() => scrollToRef(objectRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Object Types
          </button>
          <button 
            onClick={() => scrollToRef(specialRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Special Types
          </button>
          <button 
            onClick={() => scrollToRef(typeConversionRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Type Conversion
          </button>
          <button 
            onClick={() => scrollToRef(typeofRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            typeof Operator
          </button>
          <button 
            onClick={() => scrollToRef(bestPracticesRef)} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Best Practices
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Primitive Types Section */}
          <section ref={primitiveRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Primitive Data Types</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. Number</h3>
                <p>Represents both integer and floating-point numbers.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let age = 25;\nlet price = 99.99;`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. String</h3>
                <p>Represents textual data enclosed in quotes.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let name = "John";\nlet message = 'Hello World';`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. Boolean</h3>
                <p>Logical entity with true or false values.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let isActive = true;\nlet canEdit = false;`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">4. Undefined</h3>
                <p>A variable that has been declared but not assigned a value.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let x;\nconsole.log(x); // undefined`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">5. Null</h3>
                <p>Represents the intentional absence of any object value.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let user = null;`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">6. Symbol (ES6)</h3>
                <p>A unique and immutable primitive value.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const id = Symbol('id');`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">7. BigInt (ES2020)</h3>
                <p>Represents integers larger than 2^53 - 1.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`const bigNum = 1234567890123456789012345678901234567890n;`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Object Types Section */}
          <section ref={objectRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Object Data Types</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. Object</h3>
                <p>Collections of key-value pairs.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let person = {\n  name: "John",\n  age: 30\n};`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. Array</h3>
                <p>Ordered collections of values.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let colors = ["red", "green", "blue"];`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. Function</h3>
                <p>Callable objects that execute a block of code.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`function greet(name) {\n  return "Hello " + name;\n}`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">4. Date</h3>
                <p>Represents dates and times.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`let now = new Date();`}</code>
                </pre>
              </div>

          
            </div>
          </section>

          {/* Special Types Section */}
          <section ref={specialRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Special Data Types</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">NaN (Not a Number)</h3>
                <p>Represents a value that is "not a number" from an operation that should return a number.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`console.log(0 / 0); // NaN\nconsole.log(Number("hello")); // NaN`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">Infinity</h3>
                <p>Represents the mathematical Infinity ∞, greater than any number.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`console.log(1 / 0); // Infinity`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Type Conversion Section */}
          {/* <section ref={typeConversionRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Type Conversion</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">Implicit Conversion (Coercion)</h3>
                <p>JavaScript automatically converts types in certain operations.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`console.log("5" + 1); // "51" (string concatenation)\nconsole.log("5" - 1); // 4 (numeric subtraction)`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">Explicit Conversion</h3>
                <p>Manually converting between types.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`// String to Number\nlet num = Number("123");\n\n// Number to String\nlet str = String(123);\n\n// Boolean Conversion\nlet bool = Boolean(1); // true`}</code>
                </pre>
              </div>
            </div>
          </section> */}

          {/* typeof Operator Section */}
          <section ref={typeofRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">typeof Operator</h2>
            <div className="bg-gray-700 p-4 rounded">
              <p>Returns a string indicating the type of the operand.</p>
              <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                <code>{`console.log(typeof 42); // "number"\nconsole.log(typeof "hello"); // "string"\nconsole.log(typeof true); // "boolean"\nconsole.log(typeof undefined); // "undefined"\nconsole.log(typeof null); // "object" (historical bug)\nconsole.log(typeof {}); // "object"\nconsole.log(typeof []); // "object"\nconsole.log(typeof function() {}); // "function"`}</code>
              </pre>
            </div>
          </section>

          {/* Best Practices Section */}
          <section ref={bestPracticesRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">1. Use strict equality checks</h3>
                <p>Prefer <code>===</code> and <code>!==</code> over <code>==</code> and <code>!=</code> to avoid type coercion.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`// Good\nif (value === 5) { ... }\n\n// Avoid\nif (value == 5) { ... }`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">2. Initialize variables properly</h3>
                <p>Avoid <code>undefined</code> by initializing variables.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`// Good\nlet count = 0;\n\n// Avoid\nlet count; // undefined`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">3. Check for null and undefined</h3>
                <p>Handle cases where values might be missing.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`if (value == null) { ... } // checks for both null and undefined`}</code>
                </pre>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200">4. Use type checking when needed</h3>
                <p>Explicitly check types when necessary.</p>
                <pre className="bg-gray-900 p-2 rounded mt-2 overflow-x-auto">
                  <code>{`if (typeof value === 'string') { ... }`}</code>
                </pre>
              </div>
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

export default JsDataTypesPage;