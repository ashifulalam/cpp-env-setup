/*
 * Problem  : C - A Very Big Sum
 * Link     : https://vjudge.net/contest/819533#problem/C
 * Date     : 4 June 2026
 * Resources:
 *   - 
 */

#include <bits/stdc++.h>
using namespace std;

int main(){
    
    long long arrSize;
    cin >> arrSize;

    long long arr[arrSize], sum = 0;
    
    for (int i=0 ; i < arrSize; i++){
        cin >> arr[i];
    }

    for (int i=0 ; i < arrSize; i++){
        sum = sum + arr[i];
    }

    cout << sum << endl;

    return 0;
}
