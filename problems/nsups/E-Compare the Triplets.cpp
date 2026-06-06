/*
 * Problem  : Compare the Triplets
 * Link     : https://vjudge.net/contest/819533#problem/E
 * Date     : 2026-06-05
 * Resources:
 *   - 
 */

#include <bits/stdc++.h>
using namespace std;

int main(){
    int arrA[3], arrB[3];
    int scoreA = 0, scoreB = 0;

    for(int i =0; i<3; i++){
        cin >> arrA[i];
    }

    for(int i=0 ; i< 3;i++){
        cin >> arrB[i];
    }

    /* Index 0 */
    if(arrA[0] > arrB[0]){
        scoreA++;
    }else if(arrA[0] < arrB[0]){
        scoreB++;
    }

    /* Index 1 */
    if(arrA[1] > arrB[1]){
        scoreA++;
    } else if(arrA[1] < arrB[1]){
        scoreB++;
    };

    /* Index 2 */
    if(arrA[2] > arrB[2]){
        scoreA++;
    } else if(arrA[2] < arrB[2]){
        scoreB++;
    };

    cout << scoreA << " " << scoreB << endl;

    return 0;



}
