const sayilar = [1, 2, 3, 4, 5, 6];

function kendiMapYapim(sayilar, islem) {
  const yeniDizi = [];
  for (let i = 0; i < sayilar.length; i++){
    yeniDizi.push(islem(sayilar[i]));
  }
  
  return yeniDizi;

}

const olusanYeniDizi = kendiMapYapim(sayilar, function (sayi) {
return sayi / 5;
  
});
console.log(olusanYeniDizi);

// const yeniSayilar = sayilar.map(function (sayi) {
//   return sayi * 2;
// });

// console.log(sayilar);
// console.log(yeniSayilar);
// console.log(sayilar);

// const diziler = [
//   { adi: "Ezel", bolumSayisi: 65 },
//   { adi: "Gibi", bolumSayisi: 80 },
//   { adi: "KVP", bolumSayisi: 255 },
// ];

// const bolumSayilari = diziler.map(function (dizi) {
//   return dizi.bolumSayisi;
// });
// console.log(bolumSayilari);

// const kisiler = [
//   { adi: "selim", soyadi: "sağdıç" },
//   { adi: "ahmet", soyadi: "palavan" },
//   { adi: "furkan", soyadi: "tanrıöver" },
// ];

// const yeniIsimler = kisiler.map((kisi) => kisi.adi.toUpperCase() + " " + kisi.soyadi.toUpperCase());
// console.log(yeniIsimler);
