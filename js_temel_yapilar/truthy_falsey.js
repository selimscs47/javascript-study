// truthy falsey
// FALSE, 0, "", null, underfined, Nan FALSEY diğer her şey truthy
// içeride değer varsa true yoksa false uyarısı alınır.

let yas = 32;
yas = 0;

let isim = "Selim"
isim = "";
isim = null;
isim = undefined;

let dogumYili = 2000;
dogumYili = "Selim";
// selim99


if (dogumYili + 99) {
    console.log("bu true ifadedir");
} else {
    console.log("bu false ifadedir");
}