import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code heading={`repeated-Number-Triangle-Pattern`} text={`#include<iostream>
using namespace std;
int main(){
 for(int row = 1; row<=5; row++){
    for(int col = 1; col<=row; col++){
        cout<<row<<" ";
    }
    cout<<endl;
 }   
return 0;
}`}/>
    </div>
  )
}

export default page
