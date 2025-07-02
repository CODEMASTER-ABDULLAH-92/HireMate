
import React from 'react'
import Code from '../../../component/Code'
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
void Even(int arr[], int length){
            int evenArr[length]; 
    for(int i =0; i<length; i++){
        if (arr[i] % 2 == 0)
        {
            evenArr[] = arr[i];
        }
    }
}
int main(){
    int arr[] = {1,2,3,4,5};
    Even(arr,5);
    printArr(arr,5);
return 0;
}`} heading={`Fiboncic Series`} />
    </div>
  )
}

export default page
