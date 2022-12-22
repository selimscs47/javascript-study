// const isimler = ["selim", "furkan", "aliş", "palavan"];

// const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

// const ogrenciler = [
//   { id: 12, isim: "selim", yas: 25 },
//   { id: 22, isim: "furkan", yas: 15 },
//   { id: 32, isim: "palavan", yas: 55 },
//   { id: 13, isim: "alii", yas: 19 },
//   { id: 92, isim: "kemal", yas: 45 },
//   { id: 15, isim: "mustafa", yas: 75 },
//   { id: 44, isim: "ceren", yas: 30 },
// ];

// string diziyi a-z sıralama
// const adanZyeSiraliDizi = isimler.sort();
// console.log(isimler);
// console.log(adanZyeSiraliDizi);

// string diziyi z-a sıralama
// reverse çalışması için sıralanmış bir dizi olmalıdır.
// const zdenAyaSiraliDizi = adanZyeSiraliDizi.reverse();
// console.log(zdenAyaSiraliDizi);

// const kisa = isimler.sort().reverse()
// console.log(kisa);

// sayıları küçükten büyüğe - büyükten küçüğe sıralama
// const sirali = sayilar.sort(function (a, b) {
//   // return a-b;
//   return b - a;
// });
// console.log(sirali);

// nesneleri sıralama

// ogrenciler.sort(function (a, b) {
// pozitif negatif veya 0 değerini döndüren bir yapıdır

//   if (a.isim < b.isim) {
//     return -1;
//   } else if (a.isim > b.isim) {
//     return 1;
//   } else return 0;

// return  (a.isim < b.isim) ? 1 : (a.isim > b.isim ? -1 : 0);

// });

// console.log(ogrenciler);

const isimler = ["selim", "furkan", "aliş", "palavan"];

const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const ogrenciler = [
  { id: 12, isim: "selim", yas: 25 },
  { id: 22, isim: "furkan", yas: 15 },
  { id: 32, isim: "palavan", yas: 55 },
  { id: 13, isim: "alii", yas: 19 },
  { id: 92, isim: "kemal", yas: 45 },
  { id: 15, isim: "mustafa", yas: 75 },
  { id: 44, isim: "ceren", yas: 30 },
];

// arrayleri kopyalamak
let kopya = [];

// for (let isim of isimler){
//     kopya.push(isim);
// }

// kopya = Array.from(isimler);

// spread operator
kopya = [...isimler];

kopya.sort();

console.log(kopya);
console.log(isimler);

const isim = "selim sağdıç";

let harflerDizisi = isim.split("");

harflerDizisi = [...isim];
console.log(harflerDizisi);

function sayilariTopla(...parametreler) {
    let toplam = 0;
 for (let s of parametreler){
    toplam = toplam + s;
 }
    console.log(toplam);
}

sayilariTopla(1, 4);
sayilariTopla(1, 4, 5, 8);
sayilariTopla();
