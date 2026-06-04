/*
 * Problem  : B - Simple Array Sum
 * Link     : https://vjudge.net/contest/819533#problem/B
 * Date     : 1 June 2026
 * Resources:
 *   - 
 */

#include <bits/stdc++.h>
using namespace std;

int main(){
    int arrSize;
    cin >> arrSize;
    int arr[arrSize];
    int sum = 0;

    for (int i = 0; i < arrSize; i++){
        cin >> arr[i];
    }
    
    
    for(int i = 0; i < arrSize; i++){
        sum = sum+ arr[i];
    }

    cout<< sum <<endl;



    return 0;
}
