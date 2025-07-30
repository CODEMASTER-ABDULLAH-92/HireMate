import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`Inverted Alphabet Pyramid Pattern`} text={` #include<iostream>
using namespace std;
int main(){
 for(char row = 'A'; row<= 'E'; row++){
    for(char col = 'A'; col <= 'E' - (row - 'A'); col++){
        cout<<col<<" ";
    }
    cout<<endl;
 }  
return 0;
}`}/>
    </div>
  )
}

export default page
