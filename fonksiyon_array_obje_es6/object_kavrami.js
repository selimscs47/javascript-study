let selim = {
  adi: "Selim Can",
  soyadi: "Sağdıç",
  dogumYili: "2000",
  takimi: "Fenerbahçe",
  sevdiğiRenkler: ["sarı", "lacivert"],
  yasiHesapla: function () {
    return 2022 - this.dogumYili;
  },
};

console.log(selim);
console.log(selim.dogumYili);
console.log(selim["adi"]);

let yasi = selim.yasiHesapla();
console.log(selim.yasiHesapla());

let jesus = {
  adi: "Jorge",
  soyadi: "Jesus",
  dogumYili: "1954",
  takimi: "Fenerbahçe",
  sevdiğiRenkler: ["siyah", "lacivert"],
  nickname: "DEDEM",
  yasiHesapla: function () {
    this.yas = 2022 - this.dogumYili;
  },
};

console.log(jesus);
console.log(jesus.dogumYili);
console.log(jesus.nickname);

jesus.yasiHesapla();
console.log(jesus.yas);

let kisiler = [selim, jesus];
console.log(kisiler);
console.log(kisiler[0].dogumYili);

let palavan = new Object();
(palavan.adi = "Ahmet"), 
(palavan.dogumYili = 2000);
console.log(palavan.nickname);
