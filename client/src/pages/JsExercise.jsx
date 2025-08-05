import NavbarCode365 from "../Component/NavbarCode365";
import Heading from "../Component/Code365/Heading";
import BackgroundGradient from "../Component/Code365/BackgroundGradient";

const JsExercise = () => {
  // All exercises organized by category
  const topics = [
    {
      name: "Loop Exercises",
      color: "text-yellow-400",
      questions: [
        {
          question: "1. Write a JS program to print all natural numbers from 1 to n (using while loop)"
        },
        {
          question: "2. Write a JS program to print all natural numbers in reverse (from n to 1) (using while loop)"
        },
        {
          question: "3. Write a JS program to print all alphabets from a to z (using while loop)"
        },
        {
          question: "4. Write a JS program to print all even numbers between 1 to 100 (using while loop)"
        },
        {
          question: "5. Write a JS program to print all odd numbers between 1 to 100"
        },
        {
          question: "6. Write a JS program to find sum of all natural numbers between 1 to n"
        },
        {
          question: "7. Write a JS program to find sum of all even numbers between 1 to n"
        },
        {
          question: "8. Write a JS program to find sum of all odd numbers between 1 to n"
        }
      ]
    },
    {
      name: "Conditional Exercises",
      color: "text-green-400",
      questions: [
        {
          question: "1. Write a JS program to find maximum between two numbers"
        },
        {
          question: "2. Write a JS program to find maximum between three numbers"
        },
        {
          question: "3. Write a JS program to check whether a number is negative, positive or zero"
        },
        {
          question: "4. Write a JS program to check whether a number is divisible by 5 and 11 or not"
        },
        {
          question: "5. Write a JS program to check whether a number is even or odd"
        },
        {
          question: "6. Write a JS program to check whether a year is leap year or not"
        },
        {
          question: "7. Write a JS program to check whether a character is alphabet or not"
        },
        {
          question: "8. Write a JS program to input any alphabet and check whether it is vowel or consonant"
        },
        {
          question: "9. Write a JS program to input any character and check whether it is alphabet, digit or special character"
        },
        {
          question: "10. Write a JS program to check whether a character is uppercase or lowercase alphabet"
        },
        {
          question: "11. Write a JS program to input week number and print week day"
        },
        {
          question: "12. Write a JS program to input month number and print number of days in that month"
        },
        {
          question: "13. Write a JS program to count total number of notes in given amount"
        },
        {
          question: "14. Write a JS program to input angles of a triangle and check whether triangle is valid or not"
        },
        {
          question: "15. Write a JS program to input all sides of a triangle and check whether triangle is valid or not"
        },
        {
          question: "16. Write a JS program to check whether the triangle is equilateral, isosceles or scalene triangle"
        },
        {
          question: "17. Write a JS program to find all roots of a quadratic equation"
        },
        {
          question: "18. Write a JS program to calculate profit or loss"
        },
        {
          question: "19. Write a JS program to input marks of five subjects and calculate percentage and grade"
        },
        {
          question: "20. Write a JS program to input basic salary and calculate Gross salary"
        },
        {
          question: "21. Write a JS program to input electricity units and calculate total bill"
        }
      ]
    },
    {
      name: "Function Exercises",
      color: "text-blue-400",
      questions: [
        {
          question: "1. Write a JS program to find cube of any number using function"
        },
        {
          question: "2. Write a JS program to find diameter, circumference and area of circle using functions"
        },
        {
          question: "3. Write a JS program to find maximum and minimum between two numbers using functions"
        },
        {
          question: "4. Write a JS program to check whether a number is even or odd using functions"
        },
        {
          question: "5. Write a JS program to check whether a number is prime, Armstrong or perfect number using functions"
        },
        {
          question: "6. Write a JS program to find all prime numbers between given interval using functions"
        },
        {
          question: "7. Write a JS program to print all strong numbers between given interval using functions"
        },
        {
          question: "8. Write a JS program to print all Armstrong numbers between given interval using functions"
        },
        {
          question: "9. Write a JS program to print all perfect numbers between given interval using functions"
        },
        {
          question: "10. Write a JS program to find power of any number using function"
        },
        {
          question: "11. Write a JS program to print all natural numbers between 1 to n using function"
        },
        {
          question: "12. Write a JS program to print all even or odd numbers in given range using function"
        },
        {
          question: "13. Write a JS program to find sum of all natural numbers between 1 to n using function"
        },
        {
          question: "14. Write a JS program to find sum of all even or odd numbers in given range using function"
        },
        {
          question: "15. Write a JS program to find reverse of any number using function"
        },
        {
          question: "16. Write a JS program to check whether a number is palindrome or not using function"
        },
        {
          question: "17. Write a JS program to find sum of digits of a given number using function"
        },
        {
          question: "18. Write a JS program to find factorial of any number using function"
        },
        {
          question: "19. Write a JS program to generate nth Fibonacci term using function"
        },
        {
          question: "20. Write a JS program to find GCD (HCF) of two numbers using function"
        },
        {
          question: "21. Write a JS program to find LCM of two numbers using function"
        },
        {
          question: "22. Write a JS program to display all array elements using function"
        },
        {
          question: "23. Write a JS program to find sum of elements of array using function"
        },
        {
          question: "24. Write a JS program to find maximum and minimum elements in array using function"
        }
      ]
    },
    {
      name: "Array Exercises",
      color: "text-purple-400",
      questions: [
        {
          question: "1. Write a JS program to read and print elements of array"
        },
        {
          question: "2. Write a JS program to print all negative elements in an array"
        },
        {
          question: "3. Write a JS program to find sum of all array elements"
        },
        {
          question: "4. Write a JS program to find maximum and minimum element in an array"
        },
        {
          question: "5. Write a JS program to find second largest element in an array"
        },
        {
          question: "6. Write a JS program to count total number of even and odd elements in an array"
        },
        {
          question: "7. Write a JS program to count total number of negative elements in an array"
        },
        {
          question: "8. Write a JS program to copy all elements from an array to another array"
        },
        {
          question: "9. Write a JS program to insert an element in an array"
        },
        {
          question: "10. Write a JS program to delete an element from an array at specified position"
        },
        {
          question: "11. Write a JS program to count frequency of each element in an array"
        },
        {
          question: "12. Write a JS program to print all unique elements in the array"
        },
        {
          question: "13. Write a JS program to count total number of duplicate elements in an array"
        },
        {
          question: "14. Write a JS program to delete all duplicate elements from an array"
        },
        {
          question: "15. Write a JS program to merge two array to third array"
        },
        {
          question: "16. Write a JS program to find reverse of an array"
        },
        {
          question: "17. Write a JS program to put even and odd elements of array in two separate array"
        },
        {
          question: "18. Write a JS program to search an element in an array"
        },
        {
          question: "19. Write a JS program to sort array elements in ascending or descending order"
        },
        {
          question: "20. Write a JS program to sort even and odd elements of array separately"
        },
        {
          question: "21. Write a JS program to left rotate an array"
        },
        {
          question: "22. Write a JS program to right rotate an array"
        }
      ]
    },
    {
      name: "Object Exercises",
      color: "text-red-400",
      questions: [
        {
          question: "1. Write a JavaScript program to list the properties of a JavaScript object",
          code: `var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
// Sample Output: name,sclass,rollno`
        },
        {
          question: "2. Write a JavaScript program to delete the rollno property from an object and print before/after",
          code: `var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};`
        },
        {
          question: "3. Write a JavaScript program to get the length of a JavaScript object",
          code: `var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};`
        },
        {
          question: "4. Write a JavaScript program to display reading status of books",
          code: `var library = [ 
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
  }];`
        },
        {
          question: "5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes",
          code: `// Volume of a cylinder : V = πr²h
// where r is the radius and h is the height of the cylinder.`
        },
        {
          question: "6. Write a Bubble Sort algorithm in JavaScript",
          code: `// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]`
        },
        {
          question: "7. Write a JavaScript program which returns a subset of a string",
          code: `// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]`
        },
        {
          question: "8. Write a JavaScript program to create a Clock",
          code: `// Note: The output will come every second
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"`
        },
        {
          question: "9. Write a JavaScript program to calculate the area and perimeter of a circle",
          code: `// Note: Create two methods to calculate the area and perimeter
// The radius of the circle will be supplied by the user`
        },
        {
          question: "10. Write a JavaScript program to sort an array of JavaScript objects",
          code: `var library = [ 
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }];
/* Expected Output:
[{
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}] */`
        },
        {
          question: "11. Write a JavaScript function to print all the methods in a JavaScript object",
          code: `// Test Data:
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]`
        },
        {
          question: "12. Write a JavaScript function to parse an URL"
        },
        {
          question: "13. Write a JavaScript function to retrieve all property names (own and inherited)"
        },
        {
          question: "14. Write a JavaScript function to retrieve all property values"
        },
        {
          question: "15. Write a JavaScript function to convert an object into [key, value] pairs"
        },
        {
          question: "16. Write a JavaScript function to swap keys and values in an object"
        },
        {
          question: "17. Write a JavaScript function to check if object contains given property"
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Navbar */}
      <NavbarCode365 />

      {/* Background Gradient */}
      <BackgroundGradient />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white max-w-6xl mx-auto px-6 py-16">
        <Heading Heading={"JavaScript Exercises ⚡"} />

        <p className="mt-6 max-w-2xl text-lg text-gray-300 flex items-center justify-center gap-2 text-center">
          🚀 Master JavaScript with {topics.reduce((acc, topic) => acc + topic.questions.length, 0)}+ coding challenges 🎯💻
        </p>

        {/* Questions Section */}
        <div className="mt-10 w-full max-w-4xl bg-slate-900/70 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">
            Comprehensive JavaScript Practice
          </h2>

          {topics.map((topic, index) => (
            <div key={index} className="mb-10">
              <h3 className={`text-xl font-semibold mb-4 ${topic.color}`}>
                {topic.name} ({topic.questions.length} exercises)
              </h3>
              <ul className="space-y-3">
                {topic.questions.map((q, i) => (
                  <li
                    key={i}
                    className="bg-slate-800/60 rounded-lg p-3 shadow hover:shadow-lg transition"
                  >
                    <p className="text-gray-200">{q.question}</p>
                    {q.code && (
                      <pre className="mt-2 p-2 bg-slate-900/50 rounded text-xs text-gray-300 overflow-x-auto">
                        <code>{q.code}</code>
                      </pre>
                    )}
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-gray-400 italic">
                        🛠 Solution: <span className="text-red-400">Pending</span>
                      </p>
                      <button className="text-xs bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 px-2 py-1 rounded">
Solution
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>




      </div>
    </div>
  );
};

export default JsExercise;