// Code your solutions in this file
const a = ["Guadalupe", "Ollie", "Aki"] ;
const newArray =[];

function writeCards(a, event){
    

    for (let i=0; i< a.length ; i++){
        newArray.push (`Thank you, ${a[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}
 function countDown(num){
    let countup = 0;
    while ( countup <= num){
        console.log(countup++)
    }
 }