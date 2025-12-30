#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for(int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int target;
    cin >> target;

    int pos = -1;
    for(int i = 0; i < n; i++) {
        if(a[i] == target) {
            pos = i;
            break;
        }
    }

    if(pos == -1)
        cout << "Not Found\n";
    else
        cout << "Found at index " << pos << "\n";

    return 0;
}