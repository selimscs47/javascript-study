//Soru1 Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız

// let birinciSayi = parseInt(prompt("Birinci sayıyı giriniz", "25"))
// let ikinciSayi = parseInt(prompt("İkinci sayıyı giriniz", "50"))
// let ucuncuSayi = parseInt(prompt("Üçüncü sayıyı giriniz", "15"))

// let ortalama = (birinciSayi + ikinciSayi +ucuncuSayi) / 3;
// alert("Girdiğiniz sayıların ortalaması :" + ortalama);

//Soru2 Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulamayı yazınız.

// let birinciKenar = parseInt(prompt("Birinci kenarı giriniz", "8"));
// let ikinciKenar = parseInt(prompt("İkinci kenarı giriniz", "6"));
// let ucuncuKenar = parseInt(prompt("Üçüncü kenarı giriniz", "10"));

// if ( (birinciKenar == ikinciKenar) && (birinciKenar == ucuncuKenar)) {
//   alert("Bu bir eşkenar üçgendir");
// } else if (
//   birinciKenar != ikinciKenar &&
//   birinciKenar != ucuncuKenar &&
//   ikinciKenar != ucuncuKenar
// ) {
//   alert("Bu bir çeşit kenar üçgendir");
// } else {
//   alert("Bu bir ikizkenar üçgendir");
// }

//Soru 3 Klavyeden girilen vize ve final notlarınına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.(Geçme notu : 50, vizenin %40ı, finalin %60ı geçerlidir.)

let vizeNotu = parseInt(prompt("vize notunu giriniz", "58"));
let finalNotu = parseInt(prompt("Final notunu giriniz", "80"));

let ortalama = ( vizeNotu * 0.4 + finalNotu * 0.6);

if (ortalama  >= 50) {
  alert ("Tebrikler bu dersi geçtiniz ortalamanız :"  + ortalama);
} else {
  alert ("Maalesef bu dersten kaldınız ortalamanız :" + ortalama);
}