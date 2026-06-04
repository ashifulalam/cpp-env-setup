

 function sum1_100(lastDigit){
    let sum = 0, num = 1;
    while (num <= lastDigit){
        sum = sum + num;
        num = num + 1 ;
    }
    console.log(sum);
};

function sum2_100(lastDigit){
    let sum = 0 , num = 1;

    do{
        sum = sum+num;
        num += 1;
    }while(num <= lastDigit)
        console.log(sum);
};

// Actual Problem

function padIt(str,n){
    let word = str;
    let i = 0;

    while(i < n){
        if(i%2 == 0){
            word = '*' + word;
        }else{
            word = word + '*';
        }
        i++
    }
    console.log(word);
}

padIt('bd', 10);

