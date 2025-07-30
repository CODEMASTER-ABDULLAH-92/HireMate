import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`Second Maximun in Array`} text={` #include<iostream>
 using namespace std;

 int secondLargest(int arr[], int length) {
     if (length < 2) return -1; // If there are fewer than 2 elements, return -1

     int first = INT_MIN, second = INT_MIN;

     for (int i = 0; i < length; i++) {
         if (arr[i] > first) {  
             second = first;  // Update second largest before changing first
             first = arr[i];  // Update first largest
         } 
         else if (arr[i] > second && arr[i] != first) {  
             second = arr[i]; // Update second largest only if it's not equal to first
         }
     }
     return (second == INT_MIN) ? -1 : second; // Return -1 if no second largest found
 }

 int main() {
     int arr[] = {12, 34, 65, 23, 22};
     int response = secondLargest(arr, 5);
     cout << response << " ";
     return 0;
 }`}/>
    </div>
  )
}

export default page
