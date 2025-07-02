
import React, { useRef } from 'react';

const STLReferencePage = () => {
  // Refs for each STL component
  const containersRef = useRef(null);
  const iteratorsRef = useRef(null);
  const algorithmsRef = useRef(null);
  const utilitiesRef = useRef(null);
  const arrayRef = useRef(null);
  const vectorRef = useRef(null);
  const dequeRef = useRef(null);
  const listRef = useRef(null);
  const stackRef = useRef(null);
  const queueRef = useRef(null);
  const priorityQueueRef = useRef(null);
  const setRef = useRef(null);
  const mapRef = useRef(null);
  const minHeapRef = useRef(null);
  const maxHeapRef = useRef(null);
  const algoFunctionsRef = useRef(null);

  // Scroll function
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    ref.current.style.color = "#f97316"; // orange-500
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">C++ STL Reference</h1>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => scrollToRef(containersRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            Containers
          </button>
          <button onClick={() => scrollToRef(algorithmsRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            Algorithms
          </button>
          <button onClick={() => scrollToRef(arrayRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            array
          </button>
          <button onClick={() => scrollToRef(vectorRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            vector
          </button>
          <button onClick={() => scrollToRef(dequeRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            deque
          </button>
          <button onClick={() => scrollToRef(listRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            list
          </button>
          <button onClick={() => scrollToRef(stackRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            stack
          </button>
          <button onClick={() => scrollToRef(queueRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            queue
          </button>
          <button onClick={() => scrollToRef(priorityQueueRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            priority_queue
          </button>
          <button onClick={() => scrollToRef(setRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            set
          </button>
          <button onClick={() => scrollToRef(mapRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
            map
          </button>
        </div>

        {/* STL Sections */}
        <div className="space-y-8">
          {/* Containers Overview */}
          <section ref={containersRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">STL Containers</h2>
            <p className="mb-4">STL provides various container classes to store and manage collections of objects.</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Sequence Containers</h3>
                <ul className="list-disc pl-5">
                  <li><code>vector</code> - Dynamic array</li>
                  <li><code>deque</code> - Double-ended queue</li>
                  <li><code>list</code> - Doubly linked list</li>
                  <li><code>forward_list</code> - Singly linked list</li>
                  <li><code>array</code> - Fixed-size array</li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Associative Containers</h3>
                <ul className="list-disc pl-5">
                  <li><code>set</code> - Unique keys, sorted</li>
                  <li><code>multiset</code> - Allows duplicate keys</li>
                  <li><code>map</code> - Key-value pairs</li>
                  <li><code>multimap</code> - Multiple values per key</li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Container Adapters</h3>
                <ul className="list-disc pl-5">
                  <li><code>stack</code> - LIFO structure</li>
                  <li><code>queue</code> - FIFO structure</li>
                  <li><code>priority_queue</code> - Priority-based</li>
                </ul>
              </div>
            </div>
          </section>

          {/* array */}
          <section ref={arrayRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">array&lt;T,N&gt;</h2>
            <p className="mb-4">Fixed-size array container (safer alternative to C-style arrays).</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <array>
array<int,4> a = {1,2,3,4};
cout << a.empty();    // 0 (false)
cout << a.back();     // 4
cout << a.front();    // 1
cout << a.at(2);      // 3`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>at(index)</code> - Access element with bounds checking</li>
                  <li><code>front()</code>, <code>back()</code> - First/last elements</li>
                  <li><code>size()</code>, <code>empty()</code> - Capacity info</li>
                  <li><code>fill(value)</code> - Set all elements to value</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>Fixed size at compile time - cannot grow or shrink. Safer than C arrays with bounds checking.</p>
                </div>
              </div>
            </div>
          </section>

          {/* vector */}
          <section ref={vectorRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">vector&lt;T&gt;</h2>
            <p className="mb-4">Dynamic array with automatic resizing when elements are added/removed.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <vector>
vector<int> arr;
arr.push_back(1);
arr.push_back(2);
cout << arr.at(0);    // 1
cout << arr.size();   // 2
arr.pop_back();
for(int i : arr) {
  cout << i << " ";   // 1
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push_back()</code>, <code>pop_back()</code> - Add/remove from end</li>
                  <li><code>insert()</code>, <code>erase()</code> - Modify at position</li>
                  <li><code>resize()</code>, <code>reserve()</code> - Manage capacity</li>
                  <li><code>clear()</code> - Remove all elements</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>Dynamic resizing makes it flexible. Fast random access. Insertions/deletions at end are O(1), but O(n) in middle.</p>
                </div>
              </div>
            </div>
          </section>

          {/* deque */}
          <section ref={dequeRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">deque&lt;T&gt;</h2>
            <p className="mb-4">Double-ended queue with efficient insertion/removal at both ends.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <deque>
deque<int> dq;
dq.push_back(10);
dq.push_front(5);
cout << dq.front();   // 5
dq.pop_front();
cout << dq.back();    // 10`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push_front()</code>, <code>pop_front()</code> - End operations</li>
                  <li><code>push_back()</code>, <code>pop_back()</code> - Front operations</li>
                  <li><code>insert()</code>, <code>erase()</code> - Positional operations</li>
                  <li>Same interface as vector for access methods</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>Unlike vector, supports efficient insertion/deletion at both ends. Slightly slower than vector for middle operations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* list */}
          <section ref={listRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">list&lt;T&gt;</h2>
            <p className="mb-4">Doubly linked list with efficient insertion/removal anywhere.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <list>
list<int> li;
li.push_front(11);
li.push_front(12);
li.push_front(13);
li.remove(12);  // Remove all 12s
li.unique();    // Remove consecutive duplicates
li.sort();      // Sort the list`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push_front()</code>, <code>push_back()</code></li>
                  <li><code>pop_front()</code>, <code>pop_back()</code></li>
                  <li><code>remove(x)</code> - Remove all occurrences of x</li>
                  <li><code>sort()</code>, <code>unique()</code>, <code>reverse()</code></li>
                  <li><code>merge()</code>, <code>splice()</code> - Combine lists</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>Doubly linked list - efficient insertions/deletions anywhere (O(1)). No random access (must traverse). Special list operations like merge and splice.</p>
                </div>
              </div>
            </div>
          </section>

          {/* stack */}
          <section ref={stackRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">stack&lt;T&gt;</h2>
            <p className="mb-4">Last-In-First-Out (LIFO) data structure.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <stack>
stack<string> s; 
s.push("Muhammad");
s.push("Abdullah");
cout << s.top();  // "Abdullah"
s.pop();
cout << s.top();  // "Muhammad"`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push(x)</code> - Add element to top</li>
                  <li><code>pop()</code> - Remove top element</li>
                  <li><code>top()</code> - Access top element</li>
                  <li><code>empty()</code>, <code>size()</code></li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>LIFO principle. Implemented as container adapter (default uses deque). No iterator support - can only access top element.</p>
                </div>
              </div>
            </div>
          </section>

          {/* queue */}
          <section ref={queueRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">queue&lt;T&gt;</h2>
            <p className="mb-4">First-In-First-Out (FIFO) data structure.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <queue>
queue<string> q;
q.push("Muhammad");
q.push("Abdullah");
cout << q.front();  // "Muhammad"
q.pop();
cout << q.front();  // "Abdullah"`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push(x)</code> - Add to back</li>
                  <li><code>pop()</code> - Remove from front</li>
                  <li><code>front()</code> - Access front element</li>
                  <li><code>back()</code> - Access back element</li>
                  <li><code>empty()</code>, <code>size()</code></li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>FIFO principle. Container adapter (default uses deque). No iterator support - can only access front and back.</p>
                </div>
              </div>
            </div>
          </section>

          {/* priority_queue */}
          <section ref={priorityQueueRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">priority_queue&lt;T&gt;</h2>
            <p className="mb-4">Priority-based queue (default max-heap).</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <queue>
// Max-heap (default)
priority_queue<int> maxHeap;
maxHeap.push(3);
maxHeap.push(1);
maxHeap.push(4);
cout << maxHeap.top();  // 4

// Min-heap
priority_queue<int, vector<int>, greater<int>> minHeap;
minHeap.push(3);
minHeap.push(1);
cout << minHeap.top();  // 1`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>push(x)</code> - Insert element</li>
                  <li><code>pop()</code> - Remove top element</li>
                  <li><code>top()</code> - Access top element</li>
                  <li><code>empty()</code>, <code>size()</code></li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>Default is max-heap (largest element on top). Can configure as min-heap. Implemented as container adapter (default uses vector).</p>
                </div>
              </div>
            </div>
          </section>

          {/* set */}
          <section ref={setRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">set&lt;T&gt;</h2>
            <p className="mb-4">Collection of unique elements, sorted automatically.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <set>
set<int> s = {1,2,3,4,5,2,3,1};
for(int i : s) {
  cout << i << " ";  // 1 2 3 4 5
}
s.insert(6);
s.erase(3);
if(s.find(4) != s.end()) {
  cout << "4 exists";
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>insert(x)</code> - Add element</li>
                  <li><code>erase(x)</code> - Remove element</li>
                  <li><code>find(x)</code> - Check existence</li>
                  <li><code>count(x)</code> - Returns 1 or 0</li>
                  <li><code>lower_bound()</code>, <code>upper_bound()</code></li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>Stores unique elements only. Automatically sorted. Implemented as balanced binary search tree (usually red-black tree).</p>
                </div>
              </div>
            </div>
          </section>

          {/* map */}
          <section ref={mapRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">map&lt;K,V&gt;</h2>
            <p className="mb-4">Collection of key-value pairs, sorted by keys.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`#include <map>
map<int,string> students;
students[102] = "Abdullah";
students[103] = "Sabir";
students[104] = "Muhammad";

for(auto& pair : students) {
  cout << pair.first << ": " << pair.second << endl;
}
students.erase(103);
if(students.count(102)) {
  cout << "102 exists";
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Key Methods</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>operator[]</code> - Access/insert elements</li>
                  <li><code>insert({`k,v`})</code> - Add key-value pair</li>
                  <li><code>erase(k)</code> - Remove by key</li>
                  <li><code>find(k)</code>, <code>count(k)</code></li>
                  <li><code>lower_bound()</code>, <code>upper_bound()</code></li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <h4 className="font-semibold text-orange-200">Key Notes:</h4>
                  <p>Keys are unique and sorted. Implemented as balanced BST. Each element is a pair of key and value. Similar to dictionary in other languages.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Algorithms */}
          {/* <section ref={algorithmsRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">STL Algorithms</h2>
            <p className="mb-4">Powerful algorithms that work on ranges of elements.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-orange-200 mb-2">Example Code</h3>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                  <code>{`# */}

</div>
</div>
</div>
  )}
export default  STLReferencePage;