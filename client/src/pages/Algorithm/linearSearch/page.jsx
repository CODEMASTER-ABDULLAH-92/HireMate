import Code from "../../../component/Code"

import React from 'react'

const page = () => {
  return (
    <div>
<Code heading={"Linear Search"}  text={`#include <iostream>
using namespace std;
int linearSearch(int arr[], int length, int key)
{
    for (int i = 0; i < length; i++)
    {
        if (arr[i] == key)
        {
            return i;
        }
    }
    return -1;
}
int main()
{
    int arr[] = {23, 54, 23, 22, 66};
    int result = linearSearch(arr, 5, 22);
    cout << "Result: " << result << endl;
    return 0;
}`}/>
    </div>
  )
}

export default page
