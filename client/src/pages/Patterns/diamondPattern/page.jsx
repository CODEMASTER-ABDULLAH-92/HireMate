import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include <iostream>
using namespace std;

int main() {
      int n = 5; // Number of rows for the upper and lower parts of the diamond

     // Upper part of the diamond
     for (int row = 1; row <= n; row++) {
         // Print spaces
         for (int col = 1; col <= n - row; col++) {
             cout << "  ";
         }
         // Print stars for the left and middle parts
         for (int col = 1; col <= row; col++) {
             cout << "* ";
         }
         // Print stars for the right part
         for (int col = 1; col < row; col++) {
             cout << "* ";
         }
         cout << endl;
     }
 
     // Lower part of the diamond
     for (int row = 1; row < n; row++) {
         // Print spaces
         for (int col = 1; col <= row; col++) {
             cout << "  ";
         }
        // Print stars for the left and middle parts
         for (int col = 1; col <= n - row; col++) {
             cout << "* ";
         }
        // Print stars for the right part
         for (int col = 1; col < n - row; col++) {
             cout << "* ";
         }
         cout << endl;
     }

     return 0;
 }`} heading={`Diamond Pattern`}/>
    </div>
  )
}

export default page
