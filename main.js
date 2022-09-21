// // Ustoz masalalari
// function optional(attend , length){
//     if(typeof attend , length === "string" && typeof attend, length === "number" && attend, length > 0 && attend >= length){
//         const attend1 = Number(attend)
//         const length1 = Number(length)
//         console.log(attend1, length1);
//     }else{
//         console.log(false);
//     }
// }
// optional("44", 16);


// Problems
// N25
// let a = 123; 
// if(Math.floor(a / 100) != Math.floor(a % 100 / 10) && Math.floor(a % 100 / 10) != Math.floor(a % 10)){
//     console.log(true);
// }else{
//     console.log(false);
// }

// N26
// let num = 159;
// if(num / 100 < num % 100 / 10 && num % 100 / 10 < num % 10){
//     console.log(true);
// }else {
//     console.log(false);
// }

// N27
// let comp = [
//     {
//     name: prompt("Qaysi company? "),
//     priceApple: 15000,
//     priceAsus: 1000,
//     priceHp: 2000,
//     priceLenovo: 3000
//     }
// ]

// for(let i = 0; i < comp.length; i++){
//     if(comp[i]. name === "Apple"){
//         console.log(comp[i].priceApple);
//     }else if (comp[i]. name === "Asus") {
//         console.log(comp[i].priceAsus);
//     }else if (comp[i]. name === "Hp") {
//         console.log(comp[i].priceHp);
//     }else if (comp[i]. name === "Lenovo") {
//         console.log(comp[i].priceLenovo);
//     }else{
//         console.log("Bunday company topilmadi..");
//     }
// }

// Data types

// N1
// function metr(sm){
//     let m = 100
//     if(sm > 0){
//         console.log(Math.floor(sm / m));
//     }
// }
// metr(prompt("Sm kiriting: "))

// N2
    // let kg = prompt("Kg kiriting: ")
    // let tn = 1000
    // if (kg > 0){
    //     console.log(kg / tn);
    // }else{
    //     console.log("0 dan kichik son, yoki son emas");
    // }

// N3
// let a = 14, b = 3;
// if (a > b){
//     console.log(Math.floor(a/b));
// }else{
//     console.log("0 dan kichik yoki son emas");
// }

// N4
// let son = prompt("Son kirit: ");
// if(son > 9 && son < 100){
//     console.log("O'nlik: ", Math.floor(son / 10));
//     console.log("Birlik: ", son % 10);
// }

// N5
// let son = prompt("Son kirit: ");
// if(son > 9 && son < 100){
//     let a = Math.floor(son / 10),
//     b = son % 10;
//     console.log(a + b);
// }

// N6
// / let son = prompt("Son kirit: ");
// // if(son > 9 && son < 100){
// //     let a = Math.floor(son / 10),
// //     b = son % 10;
// //     console.log(a * b);
// // }

// N7
// let son = 1250;
// if (son > 999 && 10000){
//     console.log(Math.floor(son / 100));
// }

// // N8
// function time(sek){
//     let soat = Math.floor(sek / 3600);
//     let minut = sek % 3600;
//     return `${soat} soat ${Math.floor(minut / 60)} minut o'tdi`
// }

// console.log(time(prompt("Sekund kiriting: ")));


// FOR
// N1
// var k = 3;
// var n = 6;
// for(var i = 0; i < n; i++ ) {
//     console.log(k)
// }
 
//N2
// let a = 50 , b = 6;
// for(let i = b; i <= a; i++) {
//     console.log(i)
// }

// N3
// function kamay(){
//     let a = 10 , b = 2;
//     for(let i = a - 1; i > b; i-- ) {
//     console.log(i);
//     }
// }
// kamay()

// N4
// function konfet(){
//     let kg = 10000;
//     for(let i = 0; i < 10; i++){
//         console.log(kg)
//         kg += 10000;
//     }
// }
// konfet()

// N5
// function konfet(){
//     let kg = 1000;
//     for(let i = 0; i < 10; i++){
//         console.log(kg);
//         kg += 1000
//     }
// }
// konfet()

// N6
// function konfet(){
//     let kg1 = 10000;
//     let gram = 1.2;
//     for(let i = gram; i < 2; i += 0.2){
//         kg1 += 10000 / 5;
//         console.log(kg1);
//     }
// }
// konfet()

// N7
// function sum(){
//     var a = 3, b = 5, sum = 0;
//     for(var i = a; i <= b; i++){
//         sum += i;
//     }
//     console.log(sum);
// }
// sum()

// N8
// function kop(){
//         var a = 2, b = 5, kop = 1;
//         for(var i = a; i <= b; i++){
//             kop = kop * i ;
//             console.log(kop);
//         }
//     }
//     kop()

// N9
// function kv(){
//     let a = 2, b = 4, kv = 0;
//     for(let i = a; i <= b; i++){
//         kv += i * i
//     }
//     console.log(kv)
// }
// kv()

// N10

// N11
// function toq(){
//     let n = 11;
//     for (let i = 0; i <= n; i++){
//         if(i % 2 != 0){
//             console.log(i);
//         }
//     }
// }

// toq()

// N12
// function juft(){
//     let n = 11;
//     for (let i = 0; i <= n; i++){
//         if(i % 2 == 0){
//             console.log(i);
//         }
//     }
// }

// juft()

// N13
// function mur(){
//     let n = 60;
//     for(let i = 2; i <= n; i++){
//         if(i % i == 0 && i % 3 != 0 && i % 5 != 0 && i % 2 != 0 ){
//             console.log(i);
//         }
//     }
// }

// mur()

// N14
// function kv(){
//     var n = 6, sum = 0, purse = 0;
//     for(var i = 0; i <= n; i++){
//         if(i % 2 == 0){
//             sum += i * i;
//         }
//         if(i % 2 != 0){
//             purse += i * i;
//         }
//     }
//     console.log("Juft " + sum);
//     console.log("Toq " + purse);
// }
// kv()

// N15
// function minus(){
//     let kam = 15;
//     for(let i = kam; i > 0; i--){
//         console.log(i);
//     }
// }
// minus()

// N16
// function karrali(kam){
//     for(let i = 0; i <= kam; i++){
//         if(i % 5 != 0){
//             console.log(i);
//         }
//     }
// }
// karrali(prompt("Son kiriting: "))

// N17
// function kop(son){
//     let sum = 0;
//     for(let i = 0; i <= son; i++){
//         sum += i * i
//     }
//     console.log(sum);
// }
// kop(4)

// N18
// function kop(son){
//     let sum = 0;
//     for (let i = 0; i <= son; i++){
//         sum += i * i + i
//     }
//     console.log(sum);
// }
// kop(5)

// N19

// N20
// function bolish(){
//     let n = 15;
//     let x = 3;
//     for(let i = 0; i <= n; i++){
//         if(i % x == 0){
//             console.log(i);
//         }
//     }   
// }
// bolish()

// N21

// SWITCH CASE
// N1
// let son = prompt("Son kiriting, haftani chiqaraman") - 0
// switch (son) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;

//     default:
//         console.log("Bunday hafta kuni yo'q");
//         break;
// }

// N2
// let baho = prompt("Bahoingizni kiriting: ") - 0
//     switch (baho) {
//         case 1:
//             console.log("Yaman");
//             break;
//         case 2:
//             console.log("Qoniqarsiz");
//             break;
//         case 3:
//             console.log("Qoniqarli");
//             break;
//         case 4:
//             console.log("Yaxshi");
//             break;
//         case 5:
//             console.log("Alo");
//             break;
//         default:
//             console.log("Bunday ball yo'q");
//             break;
//     }

// N3
// let oy = prompt("Oy raqamini kiritng") - 0;
// switch (oy) {
//     case 1:
//         console.log("Yanvar Qish");
//         break;
//     case 2:
//         console.log("Fevral Qish");
//         break;
//     case 3:
//         console.log("Mart Bahor");
//         break;
//     case 4:
//         console.log("Aprel Bahor");
//         break;
//     case 5:
//         console.log("May Bahor");
//         break;
//     case 6:
//         console.log("Iyun Yoz");
//         break;
//     case 7:
//         console.log("Iyul Yoz");
//         break;
//     case 8:
//         console.log("Avgust Yoz");
//         break;
//     case 9:
//         console.log("Sentabr Kuz");
//         break;
//     case 10:
//         console.log("Oktabr Kuz");
//         break;
//     case 11:
//         console.log("Noyabr Kuz");
//         break;
//     case 12:
//         console.log("Dekabr Qish");
//         break;

//     default:
//         console.log("Bunday oy yo'q");
//         break;
// }

// N4
// let oy = prompt("Oy raqamini kiriting: ") - 0
// switch(oy){
//     case 1:
//         console.log("31");
//         break;
//     case 2:
//         console.log("28");
//         break;
//     case 3:
//         console.log("31");
//         break;
//     case 4:
//         console.log("30");
//         break;
//     case 5:
//         console.log("31");
//         break;
//     case 6:
//         console.log("30");
//         break;
//     case 7:
//         console.log("31");
//         break;
//     case 8:
//         console.log("31");
//         break;
//     case 9:
//         console.log("30");
//         break;
//     case 10:
//         console.log("31");
//         break;
//     case 11:
//         console.log("30");
//         break;
//     case 12:
//         console.log("31");
//     default:
//         console.log("Bunday oy yo'q!");
//         break;
// } 

// N5
// let a = prompt("A son: ") - 0
// let amal = prompt("Amal kiriting: ")
// let b = prompt("B son: ") - 0

// switch (amal) {
//     case '+':
//         console.log(a + b);
//         break;
//     case '-':
//         console.log(a - b);
//         break;
//     case '*':
//         console.log(a * b);
//         break;
//     case '/':
//         console.log(a / b);
//         break;
//     default:
//         console.log("Bunday amal yo'q axir!!");
//         break;
// }

// N6
// let baho = prompt("Bahoingizni kiriting va stipendiyani oling: ") - 0
// switch (baho) {
//     case 2:
//         console.log("Stipendiya yoq!!");
//         break;
//     case 3:
//         console.log("Stipendiya: 300 000");
//         break;
//     case 4:
//         console.log("Stipendiya: 400 000");
//         break;
//     case 5:
//         console.log("Stipendiya: 500 000");
//         break;
//     default:
//         console.log("Bahoni tekshiring!!");
//         break;
// }  

