import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`Sorting of 0 1`} text={`#include<iostream>
using namespace std;
void sorting(int arr[],int size){
    int start =0;
    int end = size - 1;
    while (start <=end)
    {
        if(arr[start] == 0 && start<=end){
            start++;
        }
        if(arr[end] == 1 && start <=end){
            end--;
        }
        if(arr[start] == 1 && arr[end] == 0 && start<=end){
            swap(arr[start],arr[end]);
        }
    }
    
}
void printArr(int arr[], int size){
    for(int i =0; i<size; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}
int main(){

int arr[7] ={1,0,0,1,1,0,1};
printArr(arr,7);
sorting(arr,7);
printArr(arr,7);
return 0;
}`}/>
    </div>
  )
}

export default page
