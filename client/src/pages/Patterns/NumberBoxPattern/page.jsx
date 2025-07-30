import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include<iostream>
using namespace std;
int main(){
 for(int row = 1; row <=7; row++){
    for(int col = 1; col<=7; col++){
        if (row == 1 || row == 7 || col == 1  ||  col == 7)
        {
            cout<<"4 ";
        }
        else if(row == 2 || row == 6 || col == 2  ||  col == 6)
        {
            cout<<"3 ";
        }
        else if(row == 3 || row == 5 || col == 3  ||  col == 5)
        {
            cout<<"2 ";
        }
        else{
            cout<<"1 ";
        }
    }
    cout<<endl;
 }   
return 0;
}`} heading={`Number Box Pattern`}/>
    </div>
  )
}

export default page
