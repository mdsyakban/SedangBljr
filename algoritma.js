// Latihan 1
function convert(jam, detik) {
    return jam * detik
}
console.log(convert(2, 3600));

// Latihan 2
let bil1 = 10
let bil2 = 10

if (bil1 > bil2) {
    console.log(bil1);
}else if (bil2 > bil1) {
    console.log(bil2);
} else {
    console.log(bil1 || bil2);
}

// Latihan 3
function harga_total(jumlah_traveler, harga_tiket) {
    return jumlah_traveler * harga_tiket
}
console.log(harga_total(2, 600000));

// Latihan 4
let nilai = 100

for (nilai = 1; nilai<=100; nilai++)
console.log(nilai);

// Latihan 5
let angka = 15
for (let i = 1; i <= angka; i++) {
  if(i % 3 === 0) {
    console.log("FIZZ")
  } else if (i % 5 === 0) {
    console.log("BUZZ")
  } else if (i % 5 !== 0 && i % 3 !== 0) {
    console.log("FIZZ BUZZ")
  } else {
    console.log(i)
  }
}
