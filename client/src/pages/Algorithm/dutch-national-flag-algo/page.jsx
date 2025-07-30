import Code from "../../../Component/Code"
import React from 'react'

const page = () => {
  return (
    <div>
      <Code text={`class Solution {
public:
       Counting Sort Solution
    void sortColors(vector<int>& nums) {
         int count0 = 0;
         int count1 = 0;
         int count2 = 0;
         int n = nums.size();
         for(auto i = 0; i < n; i++){
             if(nums[i] == 0)
             count0++;
             else if(nums[i] == 1)
             count1++;
             else
             count2++;
         }
         for(auto i = 0; i < count0; i++){
             nums[i] = 0;
         }
         for(auto i = count0; i < count0 + count1; i++){
             nums[i] = 1;
         }
         for(auto i = count0 + count1; i < n; i++){
             nums[i] = 2;
         }


         Second and best Approach | Dutch National Flag ALgo

        int low = 0;
        int medium = 0;
        int high = nums.size() - 1;

        while(medium <= high){
            if(nums[medium] == 0){
                swap(nums[low],nums[medium]);
                low++;
                medium++;
            }
            else if(nums[medium] == 1){
                medium++;
            }
            else {
                swap(nums[medium], nums[high]);
                high--;
            }
        }
    }
};`}/>
    </div>
  )
}

export default page
