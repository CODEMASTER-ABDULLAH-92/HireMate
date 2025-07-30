import Code from "../../../Component/Code"

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include<iostream>
using namespace std;
void printArr(int arr[], int length){
    for(int i =0; i<length; i++){
        cout<<arr[i]<<" ";
    }
}
void bubbleSort(int arr[], int length){
    for(int i =0; i<length; i++){
        for(int j =0; j<length - i - 1; j++){
            if (arr[j + 1] < arr[j])
            {
                swap(arr[j+1],arr[j]);
            }
        }
    }
}
int main(){
    int arr[] = {9,8,7,6,5,4,3,2,1};
    bubbleSort(arr,9);
    printArr(arr,9);
return 0;
}`} heading={"Bubble Sort Algo"}/>
    </div>
  )
}

export default page

