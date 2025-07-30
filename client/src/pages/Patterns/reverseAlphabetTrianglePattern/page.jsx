import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`reverseAlphabetTrianglePattern`} text={`#include <iostream>
using namespace std;

int main() {
    for (char row = 'E'; row >= 'A'; row--) {  // Controls the number of rows
        for (char col = 'E'; col >= row; col--) {  // Prints decreasing characters from 'E'
            cout << col << " ";
        }
        cout << endl;
    }
    return 0;
}`}/>
    </div>
  )
}

export default page
