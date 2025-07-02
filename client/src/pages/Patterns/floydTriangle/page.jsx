import Code from '../../../component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`Floyd-Triangle`} text={`#include<iostream>
using namespace std;
int main(){
    int start = 1;
 for(int row = 1; row<=5; row++){
    for(int col = 1; col<=row; col++){
        cout<<start<<" ";
        start++;
    }
    cout<<endl;
 }   
return 0;
}`}/>
    </div>
  )
}

export default page
