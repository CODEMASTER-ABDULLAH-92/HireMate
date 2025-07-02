import Code from '../../../component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code  text={`#include<iostream>
using namespace std;
void printArr(int arr[], int length){
    for(int i =0; i<length; i++){
        cout<<arr[i]<<" ";
    }
}
void evenOdd(int arr[], int length){
    int evenArr[length];
    int oddArr[length];

    int evenIndex =0;
    int oddIndex = 0;


    for(int i =0; i<length;i++){
        if (arr[i] % 2 == 0)
        {
            evenArr[evenIndex] = arr[i];
            evenIndex++;
        }
        else
        {
            oddArr[oddIndex] = arr[i];
            oddIndex++;
        }
    }
    cout<<"Even Array: ";
printArr(evenArr,evenIndex);
    cout<<"Odd Array: ";
printArr(oddArr,oddIndex);

}
int main(){
    int arr[] = {1,2,3,4,5,6};
    printArr(arr,6);
    evenOdd(arr,6);
return 0;
}`} heading={`Seperate Even and Odd`} />
    </div>
  )
}

export default page
