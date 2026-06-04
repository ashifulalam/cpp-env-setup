/*
 indexOf - start counting from starting to end
 lastIndexOf - start counting from end to start 

 However, the index both indexof/lastIndexOf returns is still based on the normal left-to-right numbering of the string.

 search - /word/i
 --> with i it is not case sensetive


 */

function firstToLast(str,c){
    let firstPosition = str.indexOf(c);
    console.log(firstPosition);
    let lastPosition = str.lastIndexOf(c);
    console.log(lastPosition);
    
    if(firstPosition === -1){
        return -1;
    }


    return lastPosition - firstPosition;
}




//console.log(firstToLast("ababc","a"));
console.log(firstToLast("ababc","c"));
//console.log(firstToLast("ababc","d"));