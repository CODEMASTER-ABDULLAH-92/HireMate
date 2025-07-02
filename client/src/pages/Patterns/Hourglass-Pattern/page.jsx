import Code from '../../../component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`Hourglass-Pattern`} text={`#include<iostream>
using namespace std;
int main(){
    int n = 4;
 for(int row = 1; row<=n; row++){
    for(int col = 1; col<=row; col++){
        cout<<col;
    }
    for(int col = 1; col<= n - row; col++){
        cout<<" ";
    }
    for(int col = 1; col<= n - row; col++){
        cout<<" ";
    }
    for(int col = 1; col<=row; col++){
        cout<<col;
    }
    cout<<endl;
 }   
return 0;
}`}/>
    </div>
  )
}

export default page
