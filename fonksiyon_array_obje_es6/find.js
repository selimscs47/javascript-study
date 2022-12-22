const kisiler = [
  { id: 1, ad: "selim1" },
  { id: 2, ad: "selim2" },
  { id: 3, ad: "selim3" },
  { id: 4, ad: "selim4" },
  { id: 5, ad: "selim5" },
  { id: 6, ad: "selim6" },
  { id: 7, ad: "selim7" },
  { id: 8, ad: "selim8" },
  { id: 9, ad: "selim9" },
];

function kendiFindMetotum(kisiler, aranilanDeger) {
  let bulunanEleman = undefined;
  for (let i = 0; i < kisiler.length; i++) {
    if (aranilanDeger(kisiler[i])) {
      return kisiler[i];
    }
  }
  return bulunanEleman;
}

const sonuc = kendiFindMetotum(kisiler, function (kisi) {
  return kisi.id === 7;
});

console.log(sonuc);

// const sonuc = kisiler.find(function (kisi) {
//   return kisi.id === 7;
// });

// function findMetot(kisiler) {
//   for (let i = 0; i < kisiler.length; i++) {
//     if (kisiler[i].id === 7) {
//       return kisiler[i];
//     }
//   }
// }

// console.log(findMetot(kisiler));
