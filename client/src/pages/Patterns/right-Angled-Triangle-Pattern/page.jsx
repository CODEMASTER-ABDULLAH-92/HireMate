import Code from '../../../component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include<iostream>
using namespace std;
int main(){
 for(int row = 1; row<=5; row++){
    for(int col = 1; col<=row; col++){
        cout<<"* ";
    }
    cout<<endl;
 }   
return 0;
}`} heading={`Right Angled Triangle Pattern`}/>
    </div>
  )
}

export default page
