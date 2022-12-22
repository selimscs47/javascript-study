let toplam = 0;
let toplam2 = 0;
for (let i = 0; i <= 10; i++) {
  toplam = toplam + i;
}

for (let i = 30; i <= 60; i++) {
  toplam2 = toplam2 + i;
}


let toplam11 = belliAraliktakiSayilariTopla(0, 10);
let toplam22 = belliAraliktakiSayilariTopla(30, 60);

console.log("toplam 1:" + toplam11 + " ve toplam2 :" + toplam2  );

function belliAraliktakiSayilariTopla(baslangicSayisi,bitisSayisi) {
    
    let toplam = 0;
    for (let i = baslangicSayisi; i <= bitisSayisi; i++ ) {
        toplam = toplam + i;
    }
    console.log("Toplam :" + toplam);
    return toplam;
}

selamVer();
// 10 ve 20 30 bu fonksiyonların argumanlarıdır
let sayilarinToplami = sayilariTopla(10,20,30);
console.log("Toplam :" + sayilarinToplami);

function selamVer() {
console.log("Merhaba");
}

// parametre alan fonksiyon, sayi1 ve sayi2 sayi2 parametredir.
function sayilariTopla(sayi1, sayi2, sayi3) {

console.log("Sayıların toplamı :" + (sayi1 + sayi2 + sayi3) );
return sayi1 + sayi2 +sayi3

}



let sayi =10;
console.log(typeof sayi);
console.log(typeof selamVer);