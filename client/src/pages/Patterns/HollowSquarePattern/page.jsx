import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`Hollow Square Pattern`} text={`#include <iostream>
 using namespace std;

 int main() {
     int n = 15; // Size of the square box

     for (int row = 0; row < n; row++) {  // Loop for rows
         for (int col = 0; col < n; col++) {  // Loop for columns
            // Print '*' for the first and last row, or first and last column
            if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
                cout << "* ";
            } else {
                cout << "  ";  // Print space for inner empty area
            }
        }
    }
//         cout << endl;

    return 0;
}`}/>
    </div>
  )
}

export default page
