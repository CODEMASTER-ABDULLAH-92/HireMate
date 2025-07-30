import Code from '../../../Component/Code'

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
void rotateByOne(int arr[], int length){
    int temp = arr[length - 1];
    for(int i = length - 1; i>0; i--){
        arr[i] = arr[ i -1];
    }
    arr[0] = temp;
}
int main(){
    int arr[] = {2,5,8,9,11};
    cout<<"Before: ";
    printArr(arr,5);
    cout<<endl;
    cout<<"After: ";
    rotateByOne(arr,5);
    printArr(arr,5);
return 0;
}`} heading={`Rotate an Array by 1`}/>
    </div>
  )
}

export default page
