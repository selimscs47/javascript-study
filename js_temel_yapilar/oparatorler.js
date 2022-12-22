// // Aritmetik opatörler + -  * / %
// let sayi1 = 10;
// let sayi2 = 2;

// // let sonuc = sayi1 + sayi2;
// // sonuc = sayi1 - sayi2;
// // sonuc = sayi1 * sayi2;
// // sonuc = sayi1 / sayi2;

// // sonuc = sayi1 % sayi2;
// // console.log(sonuc);

// // let isim = "Selim";
// // let yas = 22;
// // let metinOlarakYas = "30";
// // let soyIsim = "Sağdıç";
// // let tamIsim = isim + soyIsim;
// // console.log(tamIsim);

// // console.log(metinOlarakYas + 100);
// // console.log(metinOlarakYas * 10 );

// // Arttırma azaltma Oparatörleri
// sayi1 = sayi1 + 1;
// sayi1++;
// ++sayi1;
// sayi1--; //sayi1 = sayi1 - 1//
// console.log(sayi1);

// console.log("Sayı 2 :" + sayi2);
// console.log("Sayı 2 :" + sayi2++);
// console.log("Sayı 2 :" +sayi2);

// let sayi3 = 20;
// console.log(++sayi3);
// console.log(sayi3);

// Aritmetik artma oparatörleri
// +=, -=, *=, /=, %=,
let sayi1 = 10;
let sayi2 = 4;
//  sayi2 +=sayi1; // sayi2 = sayi2 + sayi1;
// sayi2 -= sayi1; // sayi2 = sayi2 - sayi1;
console.log(sayi2);

console.log(sayi1 > sayi2);
console.log(sayi1 < sayi2);
console.log(sayi1 <= sayi2);
console.log(sayi1 >= sayi2);
console.log(sayi1 != sayi2);
console.log(sayi1 == sayi2);

let yas = 30;
let metinselYas = '30'
console.log(yas == metinselYas);  // değerler karşılaştırılır
console.log(yas === metinselYas); // hem değere hem de veri tipine bakar
console.log(yas !== metinselYas); // hem değere hem de veri tipine bakar

//  Mantıksal Oparatörler ve, veya &&=> ve demek  ||=> veya demek

console.log( (sayi1 > 5) && (sayi2 < 10) );
console.log( (sayi1 < 5) && (sayi2 < 10) );
console.log( (sayi1 < 5) || (sayi2 < 10) );


let sonuc = 4 + 10 /2 - 1 * 5;
let sonuc2 = (4 + 10) / ( (2 - 1) * 5);
// 4 + 10 / 2 - 5
// 4 + 5 - 5
// 9 - 5
console.log(sonuc);
console.log(sonuc2);