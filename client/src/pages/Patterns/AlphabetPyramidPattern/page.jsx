import Code from '../../../component/Code'
import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include<iostream>
using namespace std;
int main(){
 for(char row = 'A'; row<='E'; row++){
    for(char col = 'A'; col <= row; col++){
        cout<<col<<" ";
    }
    cout<<endl;
 }   
return 0;
}`} heading={`Alphabet Pyramid Pattern`}/>
    </div>
  )
}

export default page
