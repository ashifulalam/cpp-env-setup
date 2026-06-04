function twoChar(charL){
   return charL.length === 1 ? '0' + charL : charL ;
}



function colorOf(r,g,b){
    let red =twoChar(r.toString(16)) ;
    let green =twoChar(g.toString(16)) ;
    let blue =twoChar(b.toString(16)) ;


    return (`#${red}${green}${blue}`);

}


let x = colorOf(0,111,0);
console.log(x);