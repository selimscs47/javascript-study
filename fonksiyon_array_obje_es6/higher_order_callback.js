// let person = {
//   ad: "selim",
//   yas: 22,
//   evliMi: false,
// };

// console.log(person.ad);
// console.log(typeof person);
// console.log(person instanceof Object);

// let renkler = ["sarı"];
// console.log(renkler[0]);
// console.log(typeof renkler);
// console.log(renkler instanceof Array);
// console.log(renkler instanceof Object);

// const fonksiyon = function () {
//   console.log("merhaba");
// };
// fonksiyon();

// // fonksiyon.test = "PALAVAN <3 YAĞMUR";

// console.log(typeof fonksiyon);
// console.log(fonksiyon instanceof Function);

// // console.log(fonksiyon.test);

// let sayi = 5;

// const fonk = function (sayi) {
//   sayi = sayi * 2;
//   return sayi;
// };

// console.log(fonk(sayi));
// console.log(sayi);

// let myDizi = [1, 2, 3];

// const diziElemanlariniIkiyleCarp = function (dizi) {
//   let geciciDizi = [];
//   for (let i = 0; i < dizi.length; i++) {
//     geciciDizi[i] = dizi[i] * 2;
//   }
//   return geciciDizi;
// };
// console.log("kopya dizi" + diziElemanlariniIkiyleCarp(myDizi));

// console.log("kaynak ana dizi" + myDizi);

/*
const diziyiKopyalaveIkiIleCarp = function (dizi) {
  let geciciDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    geciciDizi[i] = dizi[i] * 2;
  }
  console.log(geciciDizi);
};

const diziyiKopyalaveIkiIleBol = function (dizi) {
  let geciciDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    geciciDizi[i] = dizi[i] / 2;
  }
  console.log(geciciDizi);
};

const diziyiKopyalaveDortEkle = function (dizi) {
  let geciciDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    geciciDizi[i] = dizi[i] + 4;
  }
  console.log(geciciDizi);
};
console.log(myDizi);
diziyiKopyalaveIkiIleCarp(myDizi);
diziyiKopyalaveIkiIleBol(myDizi);
diziyiKopyalaveDortEkle(myDizi);

*/

let myDizi = [1, 2, 3];

// firs class function
const ikiIleCarp = function (sayi) {
  return sayi * 2;
};

const ikiIleBol = function (sayi) {
  return sayi / 2;
};

const ikiEkle = function (sayi) {
  return sayi + 2;
};

const diziIslemleri = function (dizi, islem) {
  let geciciDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    //  geciciDizi[i] = dizi[i] + 4;
    geciciDizi[i] = islem(dizi[i]);
  }
  console.log(geciciDizi);
};

// higher order function : parametre olarak fonksiyon alan ve/veya return olarak fonksiyon döndüren fonksiyonlardır.
// dizi işlemleri higher order fonksiyondur.
//ikiIleCarp veya ikiIleBol callback fonksiyonlardır.  

diziIslemleri(myDizi, ikiIleCarp);
diziIslemleri(myDizi, ikiIleBol);
diziIslemleri(myDizi, ikiEkle);


console.log(myDizi);


function adimiSoyle(ad,soyad){
  console.log("Merhaba "+ ad + " " +soyad);
}
adimiSoyle("Selim Can" , "Sağdıç");
function adimiBagir(ad,soyad, callback){
  const mesaj = " MERHABA " + ad.toUpperCase() + " " + soyad.toUpperCase();
cancelIdleCallback(mesaj)
}

adimiBagir("Selim Can ", "Sağdıç", function(mesaj){;
console.log(mesaj);
});

// function mesajGoster(mesaj){
//   console.log(mesaj);
// }


function numaramiSoyle(numara){
  console.log("Telefon Numaran "+ numara);
}
numaramiSoyle("05330225893");
function numaramiBagir (numara, callback) {
  const mesaj = "Telefon Numaran" + numara;
  callback(mesaj);
}
numaramiBagir(" 05330225893", function(mesaj){
  console.log(mesaj);
});