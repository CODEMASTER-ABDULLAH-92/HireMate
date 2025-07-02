import Code from '../../../component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include<iostream>
using namespace std;
void reverseAlternate(int arr[], int size){
    for(int i =0; i<size; i = i+2){
        if( i + 1 < size)
        //Size is length of array Not index No
        swap(arr[i],arr[i + 1]);
    }
}
void printArr(int arr[],int size){
    for(int i =0; i<size; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}
int main(){
int arr[6] = {4,6,3,6,2,9};
printArr(arr,6);
reverseAlternate(arr, 6);
printArr(arr,6);
return 0;
}`} heading={`Reverse alternatives`}/>
    </div>
  )
}

export default page
