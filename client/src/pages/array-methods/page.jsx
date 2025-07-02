
import React, { useRef } from 'react';

const ArrayMethodsPage = () => {
  // Refs for each method
  const forEachRef = useRef(null);
  const mapRef = useRef(null);
  const filterRef = useRef(null);
  const reduceRef = useRef(null);
  const pushRef = useRef(null);
  const popRef = useRef(null);
  const shiftRef = useRef(null);
  const unshiftRef = useRef(null);
  const concatRef = useRef(null);
  const sliceRef = useRef(null);
  const spliceRef = useRef(null);
  const indexOfRef = useRef(null);
  const findRef = useRef(null);
  const includesRef = useRef(null);
  const findIndexRef = useRef(null);
  const someRef = useRef(null);
  const everyRef = useRef(null);
  const sortRef = useRef(null);
  const reverseRef = useRef(null);
  const joinRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    ref.current.style.color = "red";
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript Array Methods</h1>
        
        {/* Navigation Buttons */}
        <div className=" hidden md:flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => scrollToRef(forEachRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            forEach
          </button>
          <button onClick={() => scrollToRef(mapRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            map
          </button>
          <button onClick={() => scrollToRef(filterRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            filter
          </button>
          <button onClick={() => scrollToRef(reduceRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            reduce
          </button>
          <button onClick={() => scrollToRef(pushRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            push
          </button>
          <button onClick={() => scrollToRef(popRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            pop
          </button>
          <button onClick={() => scrollToRef(shiftRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            shift
          </button>
          <button onClick={() => scrollToRef(unshiftRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            unshift
          </button>
          <button onClick={() => scrollToRef(concatRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            concat
          </button>
          <button onClick={() => scrollToRef(sliceRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            slice
          </button>
          <button onClick={() => scrollToRef(spliceRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            splice
          </button>
          <button onClick={() => scrollToRef(indexOfRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            indexOf
          </button>
          <button onClick={() => scrollToRef(findRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            find
          </button>
          <button onClick={() => scrollToRef(includesRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            includes
          </button>
          <button onClick={() => scrollToRef(findIndexRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            findIndex
          </button>
          <button onClick={() => scrollToRef(someRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            some
          </button>
          <button onClick={() => scrollToRef(everyRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            every
          </button>
          <button onClick={() => scrollToRef(sortRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            sort
          </button>
          <button onClick={() => scrollToRef(reverseRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            reverse
          </button>
          <button onClick={() => scrollToRef(joinRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            join
          </button>
        </div>

        {/* Method Sections */}
        <div className="space-y-8">
          {/* forEach */}
          <section ref={forEachRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">forEach()</h2>
            <p className="mb-4">Executes a provided function once for each array element.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [1, 2, 3];\nnumbers.forEach(num => console.log(num * 2));\n// Output: 2, 4, 6`}</code>
            </pre>
          </section>

          {/* map */}
          <section ref={mapRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">map()</h2>
            <p className="mb-4">Creates a new array with the results of calling a provided function on every element.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\n// doubled: [2, 4, 6]`}</code>
            </pre>
          </section>

          {/* filter */}
          <section ref={filterRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">filter()</h2>
            <p className="mb-4">Creates a new array with all elements that pass the test implemented by the provided function.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(num => num % 2 === 0);\n// evens: [2, 4]`}</code>
            </pre>
          </section>

          {/* reduce */}
          <section ref={reduceRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">reduce()</h2>
            <p className="mb-4">Executes a reducer function on each element, resulting in a single output value.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\n// sum: 10`}</code>
            </pre>
          </section>

          {/* push */}
          <section ref={pushRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">push()</h2>
            <p className="mb-4">Adds one or more elements to the end of an array and returns the new length.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['apple', 'banana'];\nfruits.push('orange');\n// fruits: ['apple', 'banana', 'orange']`}</code>
            </pre>
          </section>

          {/* pop */}
          <section ref={popRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">pop()</h2>
            <p className="mb-4">Removes the last element from an array and returns that element.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst last = fruits.pop();\n// last: 'orange'\n// fruits: ['apple', 'banana']`}</code>
            </pre>
          </section>

          {/* shift */}
          <section ref={shiftRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">shift()</h2>
            <p className="mb-4">Removes the first element from an array and returns that element.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst first = fruits.shift();\n// first: 'apple'\n// fruits: ['banana', 'orange']`}</code>
            </pre>
          </section>

          {/* unshift */}
          <section ref={unshiftRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">unshift()</h2>
            <p className="mb-4">Adds one or more elements to the beginning of an array and returns the new length.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['banana', 'orange'];\nfruits.unshift('apple');\n// fruits: ['apple', 'banana', 'orange']`}</code>
            </pre>
          </section>

          {/* concat */}
          <section ref={concatRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">concat()</h2>
            <p className="mb-4">Returns a new array that is the combination of two or more arrays.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst combined = arr1.concat(arr2);\n// combined: [1, 2, 3, 4]`}</code>
            </pre>
          </section>

          {/* slice */}
          <section ref={sliceRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">slice()</h2>
            <p className="mb-4">Returns a shallow copy of a portion of an array into a new array.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['apple', 'banana', 'orange', 'kiwi'];\nconst citrus = fruits.slice(1, 3);\n// citrus: ['banana', 'orange']`}</code>
            </pre>
          </section>

          {/* splice */}
          <section ref={spliceRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">splice()</h2>
            <p className="mb-4">Changes the contents of an array by removing or replacing existing elements and/or adding new elements.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['apple', 'banana', 'orange'];\n// Remove 1 element at index 1 and insert 'kiwi'\nconst removed = fruits.splice(1, 1, 'kiwi');\n// removed: ['banana']\n// fruits: ['apple', 'kiwi', 'orange']`}</code>
            </pre>
          </section>

          {/* indexOf */}
          <section ref={indexOfRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">indexOf()</h2>
            <p className="mb-4">Returns the first index at which a given element can be found in the array, or -1 if not present.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst index = fruits.indexOf('banana');\n// index: 1`}</code>
            </pre>
          </section>

          {/* find */}
          <section ref={findRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">find()</h2>
            <p className="mb-4">Returns the first element in the array that satisfies the provided testing function.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(num => num > 10);\n// found: 12`}</code>
            </pre>
          </section>

          {/* includes */}
          <section ref={includesRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">includes()</h2>
            <p className="mb-4">Determines whether an array includes a certain value among its entries.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const fruits = ['apple', 'banana', 'orange'];\nconst hasBanana = fruits.includes('banana');\n// hasBanana: true`}</code>
            </pre>
          </section>

          {/* findIndex */}
          <section ref={findIndexRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">findIndex()</h2>
            <p className="mb-4">Returns the index of the first element in the array that satisfies the provided testing function.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [5, 12, 8, 130, 44];\nconst index = numbers.findIndex(num => num > 10);\n// index: 1`}</code>
            </pre>
          </section>

          {/* some */}
          <section ref={someRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">some()</h2>
            <p className="mb-4">Tests whether at least one element in the array passes the test implemented by the provided function.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [1, 2, 3, 4, 5];\nconst hasEven = numbers.some(num => num % 2 === 0);\n// hasEven: true`}</code>
            </pre>
          </section>

          {/* every */}
          <section ref={everyRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">every()</h2>
            <p className="mb-4">Tests whether all elements in the array pass the test implemented by the provided function.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(num => num % 2 === 0);\n// allEven: true`}</code>
            </pre>
          </section>

          {/* sort */}
          <section ref={sortRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">sort()</h2>
            <p className="mb-4">Sorts the elements of an array in place and returns the sorted array.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [3, 1, 4, 2];\nnumbers.sort((a, b) => a - b); // ascending\n// numbers: [1, 2, 3, 4]\n\nconst fruits = ['banana', 'apple', 'orange'];\nfruits.sort();\n// fruits: ['apple', 'banana', 'orange']`}</code>
            </pre>
          </section>

          {/* reverse */}
          <section ref={reverseRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">reverse()</h2>
            <p className="mb-4">Reverses the order of the elements in an array.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const numbers = [1, 2, 3];\nnumbers.reverse();\n// numbers: [3, 2, 1]`}</code>
            </pre>
          </section>

          {/* join */}
          <section ref={joinRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">join()</h2>
            <p className="mb-4">Joins all elements of an array into a string.</p>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>{`const elements = ['Fire', 'Air', 'Water'];\nconst joined = elements.join(' - ');\n// joined: "Fire - Air - Water"`}</code>
            </pre>
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

export default ArrayMethodsPage;