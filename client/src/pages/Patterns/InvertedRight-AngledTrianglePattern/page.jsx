import Code from '../../../component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`InvertedRight-AngledTrianglePattern`} text={`#include<iostream>
using namespace std;
int main(){
 for(int row = 5; row>=1; --row){
    for(int col = 1; col<=row; col++){
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
