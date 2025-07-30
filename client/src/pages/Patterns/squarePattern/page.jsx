import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`Square Pattren`} text={`#include<iostream>
 using namespace std;
 int main(){
     for(int row = 1; row<=5; row++){
         for(int col = 1; col<=5; col++){
             cout<<"* ";
         }
         cout<<endl;
     }
 return 0;
 }`}/>
    </div>
  )
}

export default page
