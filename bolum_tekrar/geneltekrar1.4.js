/*Soru 11:
Sıcak soguk oyunu yapalım. Sistem 100e kadar bir sayı üretsin. Kullanıcı bu sayıyı tahmin etmeye çalışsın. Kullanıcının girdiği değere göre kullanıcıyı arttır azalt diyerek uyaralım. Kullanıcı sayıyı bulana kadar tahmin istemeye devam edelim ve sayıyı buldugunda kaç denemeden sonra bulduğunu belirtelim.*/

// let uretilenSayi = parseInt(Math.random() * 101);
// console.log("Üretilen sayı:" + uretilenSayi);

// let tahmin = -1;
// let tahminSayisi = 0;

// while(tahmin != uretilenSayi) {

//   tahmin =  parseInt(prompt("Bir sayı giriniz"));
// tahminSayisi++;

//   if (tahmin == uretilenSayi) {
//     console.log("Tebrikler " + tahminSayisi + " seferde " + "bildiniz");
//   }else if (tahmin < uretilenSayi) {
//     console.log("Biraz daha çık");
//   }else {
//     console.log("Biraz daha in");
//   }
// }

/*
SORU 12:
Kullanıcıdan sürekli olarak sayı alan ve de kullanıcı 0a bastığında girdiği sayıların çarpımını sonuç olarak gösteren programı yazınız.*/

// let girilenSayi = parseInt(prompt("Bir sayı giriniz"));
// let carpimSonucu = 1;

// while (girilenSayi != 0) {

//     carpimSonucu = carpimSonucu * girilenSayi;
//     girilenSayi = parseInt(prompt("Bir sayı giriniz"));
// }
// console.log("Çarpım sonucu :" + carpimSonucu);

/* SORU 13:
Kullanıcıdan aldığınız iki tamsayı değerin en büyük ortak bölenini bulan uygulamayı yazınız Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır. */

// let sayi1 = parseInt(prompt("Birinci sayıyı giriniz"));
// let sayi2 = parseInt(prompt("İkinci  sayıyı giriniz"));

// let ebob = 1, kontrol = 2;

// while (kontrol <= sayi1 && kontrol <= sayi2) {

//     if (sayi1 % kontrol == 0 && sayi2 % kontrol == 0) {

//         ebob = kontrol;
//     }
//     kontrol++;
// }

// if (ebob == 1) {
//     console.log("Bu sayılar aralarında asaldır");

// } else {
//     console.log("Bu sayıların ortak böleni :" + ebob);
// }

/* SORU 14:
Kullanıcıdan aldığınız integer değere kadar olan tüm asal sayıları yazdıran programı yazınız.
10 için ekranda 2,3,5,7 değerleri olmalıdır */

// let girilenSayi = parseInt(prompt("Bir sayı giriniz", "10"));
// let gosterilecekMetin = "";
// for (let i = 2; i <= girilenSayi; i++) {

//     let asalSayiMi = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       asalSayiMi = false;
//       break;
//     }
//   }

//   if (asalSayiMi == true) {
//     gosterilecekMetin = gosterilecekMetin + i + " ";
//   }
// }
// console.log(gosterilecekMetin);

/*
1 + 2 + 4 + 7 + 11 + 16 + 20 + 23 + 25 + 26 + 28 + 31 + 35 = 229 ? işlemininin sonucunu bulan js kodunu yazınız. */

let artisMiktari = 0;
let artiyorMu = true;
let toplam = 0;
let gosterilecekMetin = "";

for (let i = 1; i <= 35; i = i + artisMiktari) {
  
if (i !=35) {
    toplam = toplam + i;
    gosterilecekMetin = gosterilecekMetin + i + " + ";
} else {
    toplam = toplam + i;
    gosterilecekMetin = gosterilecekMetin + i + " = " + toplam;
}


  if (artisMiktari <= 4 && artiyorMu == true) {
    
    artisMiktari++;
if (artisMiktari == 5) {
    artiyorMu = false;
    continue;
} 
} else {

    artisMiktari--;
    if (artisMiktari == 1) {
        artiyorMu = true;
        continue
        
    }
  }



    
}
console.log(gosterilecekMetin);

