
import React, { useState } from 'react';

const GeneratorExamples = () => {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);

  // OTP Generator function
  const generateOtp = () => {
    const length = 6;
    const num = "0123456789";
    let otp = "";
    
    for(let i = 0; i < length; i++) {
      let randomOTP = num[Math.floor(Math.random() * num.length)];
      otp += randomOTP;
    }
    
    console.log("OTP: ", otp);
    setOtp(otp);
    return otp;
  };

  // Password Generator function
  const generateStrongPassword = (length = passwordLength) => {
    const digits = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*";
    
    const allChar = digits + lowercase + uppercase + symbols;
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomPass = allChar[Math.floor(Math.random() * allChar.length)];
      password += randomPass;
    }

    console.log("Generated Password: ", password);
    setPassword(password);
    return password;
  };

  return (
    <div className="bg-gray-900 p-6  shadow-lg space-y-8">
      {/* OTP Generator Section */}
      <section className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">OTP Generator</h2>
        <div className="mb-4">
          <p className="text-gray-300 mb-4">Generates a 6-digit numeric OTP using Math.random() and Math.floor():</p>
          <pre className="bg-gray-900 p-4 text-amber-200 rounded overflow-x-auto">
            <code>{`const generateOtp = () => {
  const length = 6;
  const num = "0123456789";
  let otp = "";
  
  for(let i = 0; i < length; i++) {
    let randomOTP = num[Math.floor(Math.random() * num.length)];
    otp += randomOTP;
  }
  return otp;
};`}</code>
          </pre>
        </div>
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h3 className="text-lg font-semibold text-orange-200 mb-2">How It Works:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Creates a string of numbers 0-9</li>
            <li>Loops 6 times (for 6-digit OTP)</li>
            <li>Math.random() generates a float between 0-0.999...</li>
            <li>Multiplies by num.length (10) to get index 0-9</li>
            <li>Math.floor() converts to integer index</li>
            <li>Concatenates each random digit to form OTP</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button 
            onClick={generateOtp}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Generate OTP
          </button>
          {otp && (
            <div className="bg-gray-700 p-3 rounded">
              <span className="font-mono text-xl">{otp}</span>
            </div>
          )}
        </div>
      </section>

      {/* Password Generator Section */}
      <section className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Password Generator</h2>
        <div className="mb-4">
          <p className="text-gray-300 mb-4">Generates a strong random password with mixed characters:</p>
          <pre className="bg-gray-900 p-4 text-amber-200 rounded overflow-x-auto">
            <code>{`const generatePassword = (length = 10) => {
  const digits = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*";
  
  const allChar = digits + lowercase + uppercase + symbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomPass = allChar[Math.floor(Math.random() * allChar.length)];
    password += randomPass;
  }
  return password;
};`}</code>
          </pre>
        </div>
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Features:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Combines 4 character types: digits, lowercase, uppercase, symbols</li>
            <li>Math.random() gives float between 0-0.999...</li>
            <li>Multiplies by allChar.length to get proper index range</li>
            <li>Math.floor() converts to integer index</li>
            <li>Builds password character by character</li>
            <li>Customizable length (default 10 characters)</li>
          </ul>
          <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Security Notes:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>For cryptographic purposes, use window.crypto.getRandomValues()</li>
            <li>Minimum 8 characters recommended for basic security</li>
            <li>Include at least 3 character types for stronger passwords</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <div className="flex items-center gap-2">
            <label htmlFor="length" className="text-gray-300">Length:</label>
            <input
              type="number"
              id="length"
              min="6"
              max="32"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value) || 10)}
              className="bg-gray-700 text-white p-2 rounded w-16"
            />
          </div>
          <button 
            onClick={() => generateStrongPassword()}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Generate Password
          </button>
          {password && (
            <div className="bg-gray-700 p-3 rounded overflow-x-auto max-w-full">
              <span className="font-mono text-sm sm:text-base">{password}</span>
            </div>
          )}
        </div>
      </section>

      {/* Combined Notes Section */}
      <section className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Implementation Notes</h2>
        <div className="p-4 bg-gray-700 rounded">
          <h3 className="text-lg font-semibold text-orange-200 mb-2">Common Techniques Used:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <span className="font-bold">Math.random():</span> Generates pseudo-random float between 0 (inclusive) and 1 (exclusive)
            </li>
            <li>
              <span className="font-bold">Math.floor():</span> Rounds down to nearest integer (combined with random() for index selection)
            </li>
            <li>
              <span className="font-bold">String Concatenation:</span> Builds the result string character by character
            </li>
            <li>
              <span className="font-bold">Character Pool:</span> Pre-defined strings of allowed characters for each type
            </li>
          </ul>
          
          <h3 className="text-lg font-semibold text-orange-200 mt-4 mb-2">When to Use:</h3>
          <table className="min-w-full bg-gray-800 mt-2">
            <thead>
              <tr>
                <th className="px-4 text-gray-300  py-2 text-left border-b border-gray-600">Generator</th>
                <th className="px-4 text-gray-300 py-2 text-left border-b border-gray-600">Best For</th>
                <th className="px-4 text-gray-300 py-2 text-left border-b border-gray-600">Security Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b text-gray-300 border-gray-600">OTP Generator</td>
                <td className="px-4 py-2 border-b text-gray-300 border-gray-600">One-time passwords, verification codes</td>
                <td className="px-4 py-2 border-b text-gray-300 border-gray-600">Medium (for non-critical use)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b text-gray-300 border-gray-600">Password Generator</td>
                <td className="px-4 py-2 border-b text-gray-300 border-gray-600">User account passwords, temporary access</td>
                <td className="px-4 py-2 border-b text-gray-300 border-gray-600">High (when length ≥ 12)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default GeneratorExamples;