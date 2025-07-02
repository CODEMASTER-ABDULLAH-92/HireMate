// Pattren NO 1
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
<!-- // #include<iostream>
// using namespace std;
// int main(){
//     for(int row = 1; row<=5; row++){
//         for(int col = 1; col<=5; col++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
// return 0;
// } -->



// Pattren 2
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 1; row<=5; row++){
//     for(int col = 1; col<=row; col++){
//         cout<<"* ";
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->

// Pattren 3

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 1; row<=5; row++){
//     for(int col = 1; col<=row; col++){
//         cout<<col<<" ";
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->

// Pattren 4
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 1; row<=5; row++){
//     for(int col = 1; col<=row; col++){
//         cout<<row<<" ";
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->

// Pattren 5 
// * * * * * 
// * * * * 
// * * * 
// * * 
// *
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 5; row>=1; --row){
//     for(int col = 1; col<=row; col++){
//         cout<<"* ";
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->

// pattren 6
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 5; row>=1; --row){
//     for(int col = 1; col<=row; col++){
//         cout<<col<<" ";
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->



// Pattren 7

//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 

<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 1; row<=5; row++){
//     for(int col = 1; col <= 5 - row; col++){
//         cout<<"  ";
//     }
//     for(int col = 1; col<=row; col++){
//         cout<<"* ";
//     }
//     for(int col = 1; col<=row - 1; col++){
//         cout<<"* ";
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->


// Pattren 8
//   * * * * * * * * * 
//     * * * * * * * 
//       * * * * * 
//         * * * 
//           * 
// #include<iostream>
// using namespace std;
// int main(){
//  for(int row =1; row<=5; row++){
//     for(int col = 1; col<=row; col++){
//         cout<<"  ";
//     }
//     for(int col = 5; col>=row; col--){
//         cout<<"* ";
//     }
//     for(int col = 4; col >= row; col--){
//         cout<<"* ";
//     }
//     cout<<endl;
//  }   
// return 0;
// }



//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 

<!-- //  #include <iostream>
//  using namespace std;

//  int main() {
//      int n = 5; // Number of rows for the upper and lower parts of the diamond

//     // Upper part of the diamond
//     for (int row = 1; row <= n; row++) {
//         // Print spaces
//         for (int col = 1; col <= n - row; col++) {
//             cout << "  ";
//         }
//         // Print stars for the left and middle parts
//         for (int col = 1; col <= row; col++) {
//             cout << "* ";
//         }
//         // Print stars for the right part
//         for (int col = 1; col < row; col++) {
//             cout << "* ";
//         }
//         cout << endl;
//     }
 
//     // Lower part of the diamond
//     for (int row = 1; row < n; row++) {
//         // Print spaces
//         for (int col = 1; col <= row; col++) {
//             cout << "  ";
//         }
//         // Print stars for the left and middle parts
//         for (int col = 1; col <= n - row; col++) {
//             cout << "* ";
//         }
//         // Print stars for the right part
//         for (int col = 1; col < n - row; col++) {
//             cout << "* ";
//         }
//         cout << endl;
//     }

//     return 0;
// } -->


// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 1; row<=5; row++){
//     for(int col = 1; col<=row; col++){
//         cout<<"* ";
//     }
//     cout<<endl;
//  }   
//  for(int row = 1; row<=5; row++){
//     for(int col = 1; col<= 5 - row; col++ ){
//         cout<<"* ";
//     }
//     cout<<endl;
//  }
// return 0;
// } -->

// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1 
<!-- // #include <iostream>
// using namespace std;

// int main() {
//     int start;
//     for (int row = 1; row <= 5; row++) {
//         // Determine the starting value based on the row number
//         if (row % 2 == 0) {
//             start = 0; // Start with 0 for even rows
//         } else {
//             start = 1; // Start with 1 for odd rows
//         }

//         for (int col = 1; col <= row; col++) {
//             cout << start<<" "; // Print the current value
//             start = 1 - start; // Toggle between 1 and 0
//         }
//         cout << endl; // Move to the next row
//     }

//     return 0;
// } -->


//Pattren No 12



// 1      1
// 12    12
// 123  123
// 12341234
<!-- // #include<iostream>
// using namespace std;
// int main(){
//     int n = 4;
//  for(int row = 1; row<=n; row++){
//     for(int col = 1; col<=row; col++){
//         cout<<col;
//     }
//     for(int col = 1; col<= n - row; col++){
//         cout<<" ";
//     }
//     for(int col = 1; col<= n - row; col++){
//         cout<<" ";
//     }
//     for(int col = 1; col<=row; col++){
//         cout<<col;
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->


// Pattren No 13
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
<!-- // #include<iostream>
// using namespace std;
// int main(){
//     int start = 1;
//  for(int row = 1; row<=5; row++){
//     for(int col = 1; col<=row; col++){
//         cout<<start<<" ";
//         start++;
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->


// Pattren No 14
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(char row = 'A'; row<='E'; row++){
//     for(char col = 'A'; col <= row; col++){
//         cout<<col<<" ";
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->


// Pattren 15 

// A B C D E 
// A B C D 
// A B C 
// A B 
// A 
<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(char row = 'A'; row<= 'E'; row++){
//     for(char col = 'A'; col <= 'E' - (row - 'A'); col++){
//         cout<<col<<" ";
//     }
//     cout<<endl;
//  }  
// return 0;
// } -->



// pattren No 16
// E 
// E D 
// E D C 
// E D C B 
// E D C B A 
<!-- // #include <iostream>
// using namespace std;

// int main() {
//     for (char row = 'E'; row >= 'A'; row--) {  // Controls the number of rows
//         for (char col = 'E'; col >= row; col--) {  // Prints decreasing characters from 'E'
//             cout << col << " ";
//         }
//         cout << endl;
//     }
//     return 0;
// } -->






//Pattren No 21

// * * * * * * * * * * * * * * * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// *                           * 
// * * * * * * * * * * * * * * * 
// #include <iostream>
// using namespace std;

// int main() {
//     int n = 15; // Size of the square box

//     for (int row = 0; row < n; row++) {  // Loop for rows
//         for (int col = 0; col < n; col++) {  // Loop for columns
//             // Print '*' for the first and last row, or first and last column
//             if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
//                 cout << "* ";
//             } else {
//                 cout << "  ";  // Print space for inner empty area
//             }
//         }
//         cout << endl;
//     }

//     return 0;
// }




//Pattren No 22
// 4 4 4 4 4 4 4 
// 4 3 3 3 3 3 4 
// 4 3 2 2 2 3 4 
// 4 3 2 1 2 3 4 
// 4 3 2 2 2 3 4 
// 4 3 3 3 3 3 4 
// 4 4 4 4 4 4 4 

<!-- // #include<iostream>
// using namespace std;
// int main(){
//  for(int row = 1; row <=7; row++){
//     for(int col = 1; col<=7; col++){
//         if (row == 1 || row == 7 || col == 1  ||  col == 7)
//         {
//             cout<<"4 ";
//         }
//         else if(row == 2 || row == 6 || col == 2  ||  col == 6)
//         {
//             cout<<"3 ";
//         }
//         else if(row == 3 || row == 5 || col == 3  ||  col == 5)
//         {
//             cout<<"2 ";
//         }
//         else{
//             cout<<"1 ";
//         }
//     }
//     cout<<endl;
//  }   
// return 0;
// } -->
