import Code from '../../../Component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include<iostream>
using namespace std;
int main(){
 int n = 10;
 for(int row = 1; row <= n; row++){
    for(int col = 1; col<= row; col++){
        cout<<"* ";
    }
    for(int col = n; col > row; col--){
        cout<<"  ";
    }
    for(int col = n; col> row; col--){
        cout<<"  ";
    }
    for(int col = 1; col<=row; col++){
        cout<<"* ";
    }
    cout<<endl;
 }
 for(int row = 1; row <= n; row++){
    for(int col = n; col>= row; col--){
        cout<<"* ";
    }
    for(int col = 1; col < row; col++){
        cout<<"  ";
    }
    for(int col = 1; col< row; col++){
        cout<<"  ";
    }
    for(int col = n; col>=row; col--){
        cout<<"* ";
    }
    cout<<endl;
 }   
return 0;
}`} heading={`Butterfly Pattern`}/>
    </div>
  )
}

export default page
