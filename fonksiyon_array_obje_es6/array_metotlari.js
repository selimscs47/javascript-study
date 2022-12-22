let isimler = ["selim", "palavan", "furkan"];

console.log(isimler.toString());
console.log(isimler.join(" | "));

let diziElemanSayisi = isimler.push("Aliş");
console.log(isimler.toString() + " dizinin eleman sayisi:" + diziElemanSayisi);

let dizidenCikarilanEleman = isimler.pop();
console.log(isimler + " çıkarılan eleman:" + dizidenCikarilanEleman);

// dizinin ilk elemanını çıkarır.
isimler.shift();
console.log(isimler.toString());

// dizinin en başına eleman ekler.
isimler.unshift("Yeni eleman");
console.log(isimler.toString());

delete isimler[1];
console.log(isimler.toString() + " " + isimler[1]);

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sayilar.splice(9, 0, 10, 11, 12);
console.log(sayilar.toString());

let silinenler = sayilar.splice(0, 4, 15, 20, 25, 30);
console.log(sayilar.toString());
console.log(silinenler);

let tekSayilar = [1, 3, 5];
let ciftSayilar = [2, 4, 6];

let sayilarim = tekSayilar.concat(ciftSayilar);
console.log(sayilarim.toString());

let yeniDizi = sayilarim.slice(0, 3);

console.log(yeniDizi.toString() + " " + sayilarim.toString());
