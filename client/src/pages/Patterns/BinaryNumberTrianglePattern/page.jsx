import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include <iostream>
using namespace std;

 int main() {
     int start;
     for (int row = 1; row <= 5; row++) {
//         // Determine the starting value based on the row number
         if (row % 2 == 0) {
             start = 0; // Start with 0 for even rows
         } else {
             start = 1; // Start with 1 for odd rows
         }

         for (int col = 1; col <= row; col++) {
             cout << start<<" "; // Print the current value
             start = 1 - start; // Toggle between 1 and 0
         }
         cout << endl; // Move to the next row
     }

    return 0;
}`} heading={`BinaryNumberTrianglePattern`}/>
    </div>
  )
}

export default page
