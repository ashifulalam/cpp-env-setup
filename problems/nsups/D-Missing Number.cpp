/*
 * Problem  : D - Missing Number
 * Link     : https://vjudge.net/contest/819533#problem/D
 * Date     : 4 June 2026
 * Resources:
 *   - 
 */

#include <bits/stdc++.h>
#include <codecvt>
#include <vector>
using namespace std;

int main(){
    
    int sum, missingNumber;
    cin >> sum;
    int num;
    vector<int> numbers;
    int totalSum = 0;

    while (cin >> num){
        numbers.push_back(num);
    };

    for(int i=0 ; i < numbers.size(); i++){
        totalSum = totalSum + numbers[i];
    }

    missingNumber = sum - totalSum;

    cout << missingNumber <<endl;
    
        
}
