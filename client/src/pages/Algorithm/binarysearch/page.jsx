// import Code from '@/component/Code'
import Code from "../../../component/Code"
import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={"Binary Search"} text={`#include<iostream>
using namespace std;
int binarySearch2(int arr[],int length,int key){
    int start =0;
    int end = length - 1;
    int mid = start +(end - start)/2;
    while (start<=end)
    {
        if (arr[mid] == key)
        {
            return mid;
        }
        if (arr[mid] < key)
        {
            start = mid + 1;
        }
        if (arr[mid] > key)
        {
            end = mid - 1;
        }
        mid = start + (end - start)/2;
    }
    return -1;
}
int main(){
 int arr[] = {92,89,23,65,44};
int result = binarySearch2(arr,5,23);
cout<<result;
//  printArr(arr,5);
return 0;
}`}/>
    </div>
  )
}

export default page
