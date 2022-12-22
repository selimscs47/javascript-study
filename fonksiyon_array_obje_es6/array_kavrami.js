// // Verileri bir arada tutan yapılara array dizi denir
let arabaMarka1 = "Mercedes";
let arabaMarka2 = "Audi";
let arabaMarka3 = "BMW";

let arabaMarkalari = ["Mercedes", "Audi", "BMW"];
console.log(arabaMarkalari);
console.log(arabaMarkalari[2]);

arabaMarkalari[3] = "Şahin";
arabaMarkalari[4] = "Fluence";

arabaMarkalari[87] = "Doblo";
console.log(arabaMarkalari[6]);
console.log(arabaMarkalari.length);

// en büyük index, dizi eleman sayısının bir eksiğidir.
// dizi eleman sayısı 20 ise en büyük index 19dur.
// Çünkü index 0'dan başlar.


console.log("araba dizisi :" + arabaMarkalari.toString());

for (let i = 0; i < arabaMarkalari.length; i++) {

    console.log(arabaMarkalari[i]) ;

}
console.log("***********************");


for (let oankiDiziElemani of arabaMarkalari) {

    console.log(arabaMarkalari[oankiDiziElemani]);
}

let yeniDizi = [1, "selim", true];
for (let oankiDiziElemani of yeniDizi){
    console.log(oankiDiziElemani);
}