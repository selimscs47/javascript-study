let birinciSayi = parseInt(prompt("Birinci sayıyı giriniz", "5"));
let ikinciSayi = parseInt(prompt("İkinci sayıyı giriniz", "10"));
let ucuncuSayi = parseInt(prompt("Üçüncü sayıyı giriniz", "30"));

let ortalama = (birinciSayi + ikinciSayi + ucuncuSayi) / 3;
alert("Girdiğiniz sayıların ortalaması :" + ortalama);

let birinciKenar = parseInt(prompt("Birinci kenarı giriniz", "5"));
let ikinciKenar = parseInt(prompt("İkinci kenarı giriniz", "5"));
let ucuncuKenar = parseInt(prompt("Üçüncü kenarı giriniz", "8"));

if (birinciKenar == ikinciKenar && birinciKenar == ucuncuKenar) {
  alert("Bu bir eşkenar üçgendir");
} else if (
  birinciKenar != ikinciKenar &&
  birinciKenar != ucuncuKenar &&
  ikinciKenar != ucuncuKenar
) {
  alert("Bu bir çeşit kenar üçgendir");
} else {
  alert("Bu bir ikizkenar üçgendir");
}

let vizeNotu = parseInt(prompt("Vize notunu giriniz", "60"));
let finalNotu = parseInt(prompt("Final notunu giriniz", "80"));

let ortalama1 = (vizeNotu * 0.4 + finalNotu * 0.6);

if (ortalama1 >= 50) {
  alert("Tebrikler bu dersi geçtiniz ortalamanız :" + ortalama1);
} else {
  alert("Malesef bu dersten kaldınız ortalamanız :" + ortalama1);
}
