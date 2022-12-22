let benimYasim = 22,
  onunYasi = 27;

if (benimYasim < onunYasi) {
  console.log("Ben ondan küçüğüm");
} else if (benimYasim === onunYasi) {
  console.log("Yaşıtız");
} else {
  console.log("Ben ondan büyüğüm");
}

let ismim = "Selim";
if (ismim == "Selim") {
  console.log("Merhaba Selim");
  console.log("Nasılsın");
}

let sayi1 = 15,
  sayi2 = 30;
if (sayi1 > sayi2) {
  if (sayi1 > 30) console.log("Sayi1 hem sayi2 den hem de 30 dan büyüktür ");
} else {
  console.log("Bu yargı doğru değildir");
}

let a = 10, b = 25, c = 0;

if (a > b) {
  c = a + b;

} else {
    c = a - b;
}
console.log("c değeri:" +c);

// ternary operatör (if in kısa kullanımı)
c = (a > b) ? (a + b) : (a - b)
console.log("c nin yeni değeri:" +c);



