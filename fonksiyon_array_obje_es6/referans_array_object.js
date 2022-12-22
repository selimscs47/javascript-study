// primitive

let yas = 32;
let yeniYas = yas;

yas = 40;

let isim = "selim";
let yeniİsim = isim;
isim = "ahmet";

console.log(yas, yeniYas);
console.log(isim, yeniİsim);

// referans tipli array object
let renkler = ["kırmızı", "yesil"];
let yeniRenkler = renkler;

renkler = ["kırmızı", "yeşil"]
renkler.push("mavi");

console.log(renkler, yeniRenkler);

let ogrenci={
    ad: "selim",
    yas : 22
}

let yeniOgrenci = ogrenci;

ogrenci.yas =23;

console.log(ogrenci, yeniOgrenci);
