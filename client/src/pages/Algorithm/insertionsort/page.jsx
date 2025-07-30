import Code from "../../../Component/Code"
import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading='Insertion Sort Algorithm' text={`#include<iostream>
using namespace std;
void printArr(int arr[], int length){
    for(int i =0; i< length; i++){
        cout<<arr[i]<<" ";
    }
}
void insertionSort(int arr[], int length){
    for(int i = 1; i < length; i++){ // start from index 1
        for(int j = i; j > 0; j--){ // go backward till the beginning
            if (arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
            } else {
                break; // optimization: break if already in correct position
            }
        }
    }
}

int main(){
int arr[] = {5,4,3,2,1};
insertionSort(arr,5);
printArr(arr,5);
    return 0;
}`}/>
    </div>
  )
}

export default page
