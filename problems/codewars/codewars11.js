
let dolls = ["Hello Kitty","Barbie doll","Big Doll","Hello Kitty","Anabella", "mango"];

function grabDoll (dolls) {
    let bag = [];

    for(let doll of dolls){
        if (doll == "Hello Kitty" || doll == "Barbie doll" ){
            bag.push(doll);
        }else {
            continue;
        }

        if(bag.length == 3){
            break;
        }

    }

    return bag;

}

console.log(grabDoll(dolls));