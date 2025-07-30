import Code from "../../../Component/Code"
import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include<iostream>
using namespace std;
void printArr(int arr[], int n){
    for(int i =0; i< n; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}

void selectionSort(int arr[], int n){
    for(int i = 0; i< n- 1; i++){
        int minIndex = i;
        // Why we use the int j = i + 1 in line no 14 because that the left side of array is sorted we don't need to move back 
        //Such that 92,72,5,12,45
        //In 1st Round The 5 is swapped by 92 and 5 is placed at correct position we don't need to check out the 5 at the 2 Round that's why we use the int j = i + 1;
        for(int j = i + 1; j< n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        swap(arr[minIndex],arr[i]);
    }
}
int main(){
int arr[5] = {92,72,5,12,45};
selectionSort(arr,5);
printArr(arr,5);
return 0;
}`} heading={`Selection Sort`}/>
    </div>
  )
}

export default page
