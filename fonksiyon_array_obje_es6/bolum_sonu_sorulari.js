// SORU 1
// sehirler diye bir dizi oluşturun
// her dizi elemanı sehirler ile ilgili bilgiler içermeli
// bu bilgiler sehrin adı, plaka numarası, ve sehrin komsuları olabilir

// diziyi olusturduktan sonra sehir adlarına göre z den a ya sıralayıp ekrana yazdırın

// CEVAP 1//

const sehirler = [
  { ad: "Bursa", plakaKod: 16, komsu: ["Istanbul", "Balıkesir"] },
  { ad: "Izmir", plakaKod: 35, komsu: ["Manisa", "Aydın"] },
  { ad: "Ankara", plakaKod: 6, komsu: ["Kırıkkale", "Eskisehir"] },
];

sehirler.sort(function (a, b) {
  if (a.ad < b.ad) {
    return 1;
  } else if (a.ad > b.ad) {
    return -1;
  } else return 0;
});
console.log(sehirler);

// SORU 2
// kullanıcıdan alınan değere kadar olan sayılar dizisini fibonacci seklinde yazdırın
// fibonacci örnek 0 1 1 2 3 5 8 13 21...
// iki sayının toplamı bir sonraki sayıyı oluşturur

// CEVAP 2 //

function fibonacci(sayi) {
  let sonucDizi = [0, 1];

  for (let i = 2; i < sayi; i++) {
    const oanHesaplananEleman = sonucDizi[i - 1] + sonucDizi[i - 2];
    if (oanHesaplananEleman < sayi) {
      sonucDizi[i] = oanHesaplananEleman;
    } else {
      break;
    }
  }
  return sonucDizi;
}
console.log(fibonacci(50));

// SORU 3
// öğrencileri tutan bir dizi oluştur
// her bir öğrenci nesnesinde ad, soyad ve id değerleri olmalı
// id numarası çift olan öğrencilerin adı ve soyadını birleştirilmiş halde tutan diziyi
// a dan z ye sıralı şekilde ekrana yazdır
// bunları yaparken map filter sort metotlarını kullan
// işlem bittikten sonra kodları arrow function ve zincirleme haline dönüştürün

// CEVAP 3 //

const ogrencilerDizisi = [
{ad: "selim", soyad: "sagdic", id:1},
{ad: "ahmet", soyad: "palavan", id:2},
{ad: "furkan", soyad: "tanriover", id:3},
{ad: "alisan", soyad: "karadas", id:4},
{ad: "sezer", soyad: "bengli", id:5},
{ad: "deniz", soyad: "uzum", id:6},
{ad: "ceyda", soyad: "akkol", id:7},
{ad: "kemal", soyad: "dinç", id:8},
{ad: "jorge", soyad: "jesus", id:9},
];

const sonucDizi = ogrencilerDizisi.filter(ogrenci => ogrenci.id % 2 ===0)
.map(ogrenci => ogrenci.ad + " " + ogrenci.soyad)
.sort();

console.log(sonucDizi);





// const idNoCiftOlanOgrencilerDizisi = ogrencilerDizisi.filter(function(ogrenci){
// return ogrenci.id %2 === 0;
// });

// const isimler = idNoCiftOlanOgrencilerDizisi.map(function (ogrenci){
// return ogrenci.ad + " " + ogrenci.soyad
// });

// isimler.sort()

// console.log(isimler);














