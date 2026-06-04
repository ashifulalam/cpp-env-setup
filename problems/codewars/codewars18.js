function splitAndMerge(string, separator){
    let words = string.split(" ");

    for(let w in words){
        words[w] = words[w].split("").join(separator);
        console.log(words[w]);
    }

    return words.join(' ');

}

console.log(splitAndMerge("My name is John", " "));