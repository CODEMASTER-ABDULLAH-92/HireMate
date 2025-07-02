import Code from '../../../component/Code'

import React from 'react'
const page = () => {
  return (
    <div>
      <Code text={`
#include<iostream>
using namespace std;
int missingNumber(int arr[], int length){
    int sum = 0;
    int ans = 0;

    for(int i =0; i< length-1; i++){
        sum = sum + arr[i];
    }
    ans = length *(length + 1)/2;
    return ans - sum;
}
int main(){
    int arr[] = {1,2,3,4,6};
    int res = missingNumber(arr,5);
    cout<<res<<" \n";
return 0;
}`} heading={`Missing Number in an array`}/>
    </div>
  )
}

export default page
