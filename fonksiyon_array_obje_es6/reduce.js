
// function toplamiBul() {
//   let toplam = 0;
//   for (let i = 0; i < sayilar.length; i++) {
//     toplam = toplam + sayilar[i];
//   }
//   console.log(toplam);
// }

// toplamiBul();

// const sonuc = sayilar.reduce(function (toplam, curr, index) {
//   return (toplam = toplam + curr);
// }, 0);

// console.log(sonuc);

// const yeniDizi = sayilar.map(function(sayi) {
//     return sayi * 2;
// });

// const yeniDiziwithReduce = sayilar.reduce(function(dizininOncekiHali,oankisayi) {
// dizininOncekiHali.push(oankisayi*5);
// return dizininOncekiHali;
// }, []);

// console.log(yeniDizi);
// console.log(yeniDiziwithReduce);

// REDUCE İLE FİLTER KULLANIMI //

// const yeniDizi = sayilar.filter(function (sayi, index) {
//   return sayi > 3;
// });

// const yeniDiziwithReduce = sayilar.reduce(function (pre, sayi, index) {
//   if (sayi > 3) {
//     pre.push(sayi);
// }
// return pre;
// }, []);

// console.log(yeniDizi);
// console.log(yeniDiziwithReduce);

// const bulunanEleman= sayilar.find(function (sayi, index){
// return sayi === 2;

// });

// console.log(bulunanEleman);

const sayilar = [11, 22, 33];


const bulunanElemanwithReduce = sayilar.reduce(function (pre, sayi, index) {
  console.log(pre, sayi, index);
  if (sayi === 2) {
    return sayi;
  } else {
    return pre;
  }
}, undefined);

console.log(bulunanElemanwithReduce);
