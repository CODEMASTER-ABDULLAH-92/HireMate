import Code from "../../component/Code";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen montserrat-alternates-thin bg-gradient-to-br from-gray-900 to-black p-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Code Block */}
          <Code
            text={`#include<iostream>
#include<cmath>  // Include cmath for sqrt function
using namespace std;

int findPrime(int length){
    if(length <= 1) return -1;  // 0 and 1 are not primes
    if(length == 2) return 1;   // 2 is the only even prime
    for(int i = 2; i <= sqrt(length); i++){  // Check up to √n
        if (length % i == 0) return -1;  // Early termination
    }
    return 1;  // Prime confirmed
}

int main(){   
    cout << "Enter The Number: ";
    int number;
    cin >> number;
    int res = findPrime(number);
    if (res == 1) {
        cout << number << " is a prime number." << endl;
    } else {
        cout << number << " is not a prime number." << endl;
    }
    return 0;
}`}
            language="cpp"
            heading="Prime Number Checker"
            problemHeading="prime_number_checker.cpp"
          />

          {/* Algorithm Card */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              Algorithm Overview
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">⟫</span>
                <span>Checks if a number is prime using mathematical optimizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">⟫</span>
                <span>Prime numbers are natural numbers greater than 1 with no divisors other than 1 and itself</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">⟫</span>
                <span>Efficiently checks divisibility only up to √n</span>
              </li>
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Optimization Card */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-medium text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
                Optimization Notes
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex">
                  <span className="text-pink-500 mr-2">◉</span>
                  <span>Checks only up to √n (mathematical optimization)</span>
                </li>
                <li className="flex">
                  <span className="text-pink-500 mr-2">◉</span>
                  <span>Early termination when divisor found</span>
                </li>
                <li className="flex">
                  <span className="text-pink-500 mr-2">◉</span>
                  <span>Special cases handled for 0,1,2</span>
                </li>
              </ul>
            </div>

            {/* Complexity Card */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-medium text-red-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Complexity Analysis
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="flex justify-between text-green-300">
                    <span>Time Complexity:</span>
                    <span className="font-mono bg-gray-900 px-2 py-1 rounded">O(√n)</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1 mt-1">
                    <div className="bg-gradient-to-r from-green-500 to-cyan-400 h-1 w-3/4"></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between text-blue-300">
                    <span>Space Complexity:</span>
                    <span className="font-mono bg-gray-900 px-2 py-1 rounded">O(1)</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1 mt-1">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-400 h-1 w-1/4"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
              <h3 className="text-xl font-medium text-yellow-400">Usage Examples</h3>
            </div>
            <div className="p-6">
              <div className="bg-black rounded-lg border border-gray-700 p-4 font-mono mb-4">
                <p className="text-green-400">$ ./prime_checker</p>
                <p className="text-gray-400">Enter The Number: <span className="text-white">17</span></p>
                <p className="text-green-400">17 is a prime number.</p>
              </div>
              <div className="bg-black rounded-lg border border-gray-700 p-4 font-mono">
                <p className="text-green-400">$ ./prime_checker</p>
                <p className="text-gray-400">Enter The Number: <span className="text-white">15</span></p>
                <p className="text-red-400">15 is not a prime number.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Prime Number Algorithm • Mathematical Optimization • C++ Implementation</p>
        </div>
      </div>
    </div>
  );
};

export default page;