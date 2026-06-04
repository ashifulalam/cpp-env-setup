// var str="this is an example.";

// let words = str.split(' ');

// for (let w in words){
//     words[w] = words[w][0].toUpperCase() + words[w].slice(1)   ;

// }

// let x = words.join(' ');



// let str = "Hello world";
// let newStr = str.replace('world', 'Js');
// console.log(newStr);

// let str = "apple banana apple";
// let newStr = str.replace(/a/, 'A');
// console.log(newStr);



function alienLanguage(str){
    words = str.toUpperCase().split(' ');

    for(let w in words){
        words[w] = words[w].slice(0, words[w].length-1) + words[w][words[w].length-1].toLowerCase(); 
        
    }
    return words.join(' ');

    
}


console.log(alienLanguage("My name is John"));