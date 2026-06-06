/*
 * Problem  : F - Diagonal Difference
 * Link     : https://vjudge.net/contest/819533#problem/F
 * Date     : 5 June 2026
 * Resources:
 *
 https://www.geeksforgeeks.org/cppcpp-multidimensional-array/


 */


#include <bits/stdc++.h>
using namespace std;

int main(){

    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }


    return 0;
}
