// Aslında 2 tip veri türü vardır;
// Primitive ve Referans Veri Türleri

// Primitive tipler : Number, String, Boolean, Underfined, Null, Symbol
// Referans Tipler: Object

let sayi = 50;
console.log(sayi);
console.log(typeof sayi);

let ondalikSayi = 25.545;
console.log(ondalikSayi);
console.log(typeof ondalikSayi);

let negatifSayi = -25;
console.log(negatifSayi);
console.log(typeof negatifSayi);

let isim= "Selim"
let soyisim='Sağdıç'

// let cumle= 'Selim in Bilgisayarı';
let cumle= "Selim' in Bilgisayarı";
console.log(cumle);


let tamisim=isim + " " + soyisim

// template literal - backtick
let tamisim2=`${isim}  ${soyisim}`
console.log("template literal: " + tamisim2);
console.log(`template literal ile yazdır ${tamisim2}`);

console.log(tamisim);
console.log(isim);
console.log(typeof soyisim);


let asalSayimi= true
console.log("Veri türümüzün değeri " + asalSayimi + " veri tipi:" + typeof asalSayimi);

console.log(`Veri türümüzün değeri ${asalSayimi} veritipi : ${typeof asalSayimi}`);


let renk;
renk="Yeşil"
console.log(renk);
console.log(typeof renk);

let yas = null;
console.log("değer :"  + yas + " veri  tipi:" + typeof yas);

