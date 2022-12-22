// for dönüsü
// for (ilk atama ; dongu_calistirma_sarti ; her_calisma_sonrası_ne_olacak)

// for (let i = 0; i < 10; i++) {
//   console.log("benim adım Selim");
//   console.log("nasılsın");
// }

// for (let i = 0, j = 0; (i + j) < 20; i=i+5, j=j+2) {
//     console.log("Döngü çalıştı");
//     console.log("i değeri:"+i+" j değeri:" +j);
// }
// // fordan sonra ; olmaz
//  for( let i = 0; i < 5; i++) {
//     console.log("Merhaba");
//  }

//  sonsuz döngü oluşturulur
/* 
for (; ;) {

  } */

for (let j = 5; j < 15; j++) {
  console.log("Selam");
}

let sayi = 5;

while (sayi < 15) {
  console.log("Merhaba");
  sayi++;
}

let yas = 22;
do {
  console.log("Do while merhaba");
  yas++;
} while (yas < 30);

// break, continue, return

for (let i = 0; i < 50; i++)
  if (i == 12) {
    break;
  }
console.log("Break kullanımı");

for (let i = 10; i < 30; i++) {
  if (i == 15) {
    continue;
  }
  console.log("Continue kullanımı" + i);
}

// // for içinde return kullanımı sadece fonksiyon içindeyse olur aksi taktirde İllegal return statement hatası alınır
// for (let i = 0; i < 10; i++) {
//   if (i ==5) {
//     return;
//   }
//   console.log("Return kullanumı" + i);
// }