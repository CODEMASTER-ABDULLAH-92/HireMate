import Code from '../../../component/Code'

import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`#include <iostream>
using namespace std;
void print(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}
void reser(int arr[], int size)
{
    int s = 0;
    int end = size - 1;
    while (s <= end)
    {
        swap(arr[s], arr[end]);
        s++;
        end--;
    }
    {
        /* code */
    }
}
int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    reser(arr, 5);
    print(arr, 5);
    return 0;
}`} heading={`Reverse an array`}/>
    </div>
  )
}

export default page
