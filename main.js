let sum = 1;
// Oddiy masalalar:
//1. 1 dan 100 gacha bo'lgan barcha sonlarni konsolga chiqaring.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
//2. 1 dan 50 gacha bo'lgan juft sonlarni konsolga chiqaring.
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
//3. 1 dan 30 gacha bo'lgan toq sonlarni konsolga chiqaring.
for (let i = 1; i <= 30; i += 2) {
  console.log(i);
}
//4. 1 dan 20 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring.
for (let i = 1; i <= 20; i++) {
  console.log(i ** 2);
}
//5. 10 dan 1 gacha bo'lgan sonlarni teskari tartibda chiqaring.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// 6. 1 dan 100 gacha bo'lgan sonlarning yig'indisini hisoblang.
let counter = 0;

for (let i = 1; i <= 100; i++) {
  counter += i;
}
console.log(counter);
//7. 1 dan 20 gacha bo'lgan barcha juft sonlarning yig'indisini hisoblang.
let counter1 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    counter1 += i;
  }
}
console.log(counter1);

//8. 1 dan 15 gacha bo'lgan barcha toq sonlarning ko'paytmasini hisoblang.
let sum1 = 1;
for (let i = 1; i <= 15; i++) {
  if (i % 2 == 1) {
    sum1 *= i;
  }
}
console.log(sum1);

//9. 5 dan 25 gacha bo'lgan sonlarning kublarini konsolga chiqaring.
for (let i = 5; i <= 25; i++) {
  console.log(`${i} sonining kubi ${i ** 3} ga teng`);
}

//10. 1 dan 10 gacha bo'lgan sonlarning kvadrat ildizlarini konsolga chiqaring.
for (let i = 1; i <= 10; i++) {
  console.log(`${i} sonining kvadrat ildizi: ${Math.sqrt(i)}`);
}
// O‘rtacha murakkablikdagi masalalar:
//1. 1 dan 50 gacha bo'lgan barcha sonlar orasida 3 ga karrali sonlarni toping va konsolga chiqaring.
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
//2. 1 dan 100 gacha bo'lgan barcha sonlarni qo'shish davomida yig'indining oxirgi qiymatini konsolga chiqaring.
let counter2 = 0;
for (let i = 1; i <= 100; i++) {
  counter2 += i;
}
console.log(counter2);
//3. 1 dan 100 gacha bo'lgan barcha sonlardan faqat 7 ga bo'linadigan sonlarni konsolga chiqaring.
for (let i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}
//4. 1 dan 100 gacha bo'lgan barcha sonlarni qo'shib, natijaning o'rtacha qiymatini toping.
let count = 100;
let counter3 = 0;
for (let i = 1; i <= 100; i++) {
  counter3 += i;
}
let average = counter3 / count;
console.log(`Yig'indi: ${counter3}. O'rtacha qiymat: ${average} `);
//5. 1 dan 20 gacha bo'lgan sonlarning faqat toqlari bilan ishlash uchun sikl yozing va ularning yig'indisini hisoblang.
let counter4 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
    counter4 += i;
  }
  console.log(counter4);
}
//6. Foydalanuvchidan son kiriting. Shu sondan kichik barcha juft sonlarni konsolga chiqaring.
let son1 = +prompt(`son kiriting`);
for (let i = son1 - 1; i >= 2; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//7. 1 dan 50 gacha bo'lgan sonlarning faqat 5 ga va 3 ga bo'linadiganlarini aniqlang.
for (let i = 1; i <= 50; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log(i);
  }
}
//8. 1 dan 30 gacha bo'lgan sonlarning har birining kvadratini hisoblang va ularning yig'indisini toping.
let counter5 = 0;
for (let i = 1; i <= 30; i++) {
  console.log(`${i} ning kvadrati: ${i ** 2}`);
  counter5 += i ** 2;
}
console.log("Kvadratlarning yig'indisi:", counter5);
//9. 1 dan 100 gacha bo'lgan barcha toq sonlarni konsolga chiqaring va ular sonini hisoblang.
let counter6 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
    counter6 += 1;
  }
}
console.log(counter6);

//10. Foydalanuvchi kiritgan ikkita son orasidagi barcha sonlarning yig'indisini hisoblang.
let son2 = +prompt(`Son 1ni kiriting`);
let son3 = +prompt(`Son 2ni kiriting`);
let counter7 = 0;
for (let i = son2; i <= son3; i++) {
  counter7 += i;
}
console.log(counter7);
// Murakkabroq masalalar:
//1. 1 dan 50 gacha bo'lgan barcha sonlar ichidan faqat 3 ga karrali bo'lmagan sonlarni chiqaring.
for (let i = 1; i <= 50; i++) {
  if (i % 3 !== 0) {
    console.log(i);
  }
}
//2. 1 dan 20 gacha bo'lgan sonlarni konsolga chiqarishda faqat toqlari chiqsin, juftlari o'rniga "Juft son" so'zi chiqsin.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  } else {
    console.log(`Juft son`);
  }
}
//3. 1 dan 100 gacha bo'lgan sonlar yig'indisini hisoblang, lekin faqat 10 ga bo'linmaydigan sonlar uchun.
let counter8 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 10 !== 0) {
    counter8 += i;
  }
}
console.log(counter8);
//4. 1 dan 30 gacha bo'lgan barcha sonlarning ko'paytmasini hisoblang.
sum3 = 1;
for (let i = 1; i <= 30; i++) {
  sum3 *= i;
}
console.log(sum3);

//5. Foydalanuvchidan boshlang'ich va tugash sonlarini kiritishni so'rang va shu oralig'dagi sonlarni konsolga chiqaring.
let son4 = +prompt(`Boshlang'ich sonni kiriting`);
let son5 = +prompt(`Tugash sonni kiriting`);
for (let i = son4; i <= son5; i++) {
  console.log(i);
}
//6. 1 dan 100 gacha bo'lgan sonlardan faqat 3 ga va 5 ga bo'linadiganlarini konsolga chiqaring.
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
//7. Foydalanuvchidan kiritilgan sonning faktorialini hisoblang.
let son6 = +prompt("Sonni kiriting");
let faktorial = 1;
for (let i = 1; i <= son; i++) {
  faktorial *= i;
}
console.log(`Faktorial: ${faktorial}`);

//8. 1 dan 50 gacha bo'lgan barcha sonlarning juftlarini yig'ing, toqlarini esa chiqarib yuboring.
let sum4 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sum4 += i;
  }
}
console.log(sum4);

//9. 1 dan 10 gacha bo'lgan barcha sonlarning kublarini konsolga chiqaring va ularning yig'indisini hisoblang.
let sum5 = 0;
for (let i = 1; i <= 10; i++) {
  sum5 += i ** 3;
  console.log(i ** 3);
}
console.log(sum5);
//10. 1 dan 20 gacha bo'lgan barcha sonlarni konsolga chiqaring va har biriga "Bu sonning kvadrati: [kvadrat]" qo'shimchasini yozing.
for (let i = 1; i <= 20; i++) {
  console.log(`${i} sonning kvadrati ${i ** 2}`);
}
// Matematik masalalar:
//1. 1 dan 100 gacha bo'lgan sonlar ichidan faqat 7 ga bo'linadigan sonlarni toping va ularning ko'paytmasini hisoblang.
let sum6 = 1;
for (let i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    sum6 *= i;
  }
}
console.log(sum6);
//2. 1 dan 30 gacha bo'lgan sonlarni o'nlikda aylantirib (har bir sonni 10 ga ko'paytirib) konsolga chiqaring.
for (let i = 1; i <= 30; i++) {
  console.log(i * 10);
}
//3. 1 dan 20 gacha bo'lgan sonlardan faqat musbat bo'lganlarini konsolga chiqaring. (masala mantiqan xato)
//4. Foydalanuvchidan bitta musbat son kiriting. Shu sondan kichik barcha juft sonlarning yig'indisini hisoblang.
let sum7 = 0;
let son8 = +prompt("Musbat son kiriting:");

for (let i = 2; i <= num; i += 2) {
  sum7 += i;
}

console.log(`Juft sonlarning yig'indisi: ${sum7}`);
//5. Foydalanuvchidan kiritilgan 2 ta sonning o'rtasidagi barcha sonlarning ko'paytmasini hisoblang.
let son9 = +prompt("Birinchi sonni kiriting:");
let son10 = +prompt("Ikkinchi sonni kiriting:");
let sum8 = 1;
for (let i = son9 + 1; i <= son10; i++) {
  sum8 *= i;
}
console.log(
  `Kiritilgan sonlar orasidagi barcha sonlarning ko'paytmasi: ${sum8}`
);
//6. Foydalanuvchidan kiritilgan musbat sondan katta bo'lgan barcha 10 ga bo'linadigan sonlarni toping va chiqaring.
let son11 = +prompt("Musbat son kiriting:");
for (let i = son11 + 1; i <= 100; i++) {
  if (i % 10 == 0) {
    console.log(i);
  }
}
//7. 1 dan 15 gacha bo'lgan barcha sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.
let sum9 = 0;
for (let i = 1; i <= 15; i++) {
  let counter9 = i ** 2;
  console.log(`Son: ${i}, Kvadrati: ${counter9}`);
  sum9 += counter9;
}
console.log(`Kvadratlarning yig'indisi: ${sum9}`);
//8. 1 dan 10 gacha bo'lgan sonlarning faktorialini chiqaruvchi sikl yozing.
for (let i = 1; i <= 10; i++) {
  let factorial3 = 1;
  for (let j = 1; j <= i; j++) {
    factorial3 *= j;
  }
  console.log(`${i}ning faktoriali: ${factorial3}`);
}
//9. Foydalanuvchidan musbat son kiritishni so'rang va 1 dan shu songacha bo'lgan sonlarning kvadratlarini chiqarib, yig'indisini hisoblang.
let son13 = +prompt(`Musbat son kiriting`);
let sum10 = 0;
for (i = 1; i <= son13; i++) {
  console.log(i ** 2);
  sum10 += i ** 2;
}
console.log(sum10);
//10. Foydalanuvchi kiritgan musbat sondan kichik barcha sonlarni teskari tartibda konsolga chiqaring.
let son14 = +prompt(`Musbat son kiriting`);
for (i = son14 - 1; i >= 1; i--) {
  console.log(i);
}
// Ijodiy masalalar:
//1. 1 dan 50 gacha bo'lgan barcha sonlarning har birining kubini chiqarishda faqat 2 ga bo'linadiganlarini tanlang.
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i ** 3);
  }
}
//2. 1 dan 100 gacha bo'lgan sonlardan faqat 5 ga bo'linmaydiganlarini chiqaring.
for (let i = 1; i <= 100; i++) {
  if (i % 5 !== 0) {
    console.log(i);
  }
}
//3. Foydalanuvchi kiritgan musbat sondan kichik bo'lgan barcha sonlarni ekranga chiqarib, ularning faqat 3 ga karralilarini hisoblang.
let son15 = +prompt("Musbat son kiriting");

let sum11 = 0;
for (let i = 1; i < son15; i++) {
  console.log(i);
  if (i % 3 === 0) {
    sum11 += i;
  }
}
console.log(`3 ga karrali sonlarning yig'indisi: ${sum}`);
//4. 1 dan 20 gacha bo'lgan sonlarni chiqarishda har bir juft son uchun "Juft son", toq son uchun "Toq son" so'zini chiqaring.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`juft son`);
  } else {
    console.log(`toq son`);
  }
}
//5. 1 dan 10 gacha bo'lgan sonlarni konsolga chiqarishda faqat toq sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.
let sum12 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i ** 2);
    sum12 += i ** 2;
  }
}
console.log(sum12);
//6. Foydalanuvchidan kiritilgan sonning kvadrati 100 dan oshmaguncha, har bir sonni chiqarib boruvchi sikl yozing.(ishlash ixtiyoriy while orqali ishlanar ekan)
//7. 1 dan 30 gacha bo'lgan sonlarni konsolga chiqarishda faqat 3 va 4 ga bo'linadiganlarini tanlang va ularni yig'indisini hisoblang.
let sum13 = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 4 == 0) {
    console.log(i);
    sum13 += i;
  }
}
console.log(sum13);
//8. 1 dan 50 gacha bo'lgan sonlarning har birini chiqarishda juft sonlarni chiqarib yuboring va faqat toqlarini ekranga chiqaring.
let sum14 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//9. Foydalanuvchidan son kiritishni so'rang va shu sondan kichik barcha 7 ga karrali sonlarning ko'paytmasini hisoblang.
let son16 = +prompt("Musbat son kiriting");
let sum15 = 1;
for (let i = 1; i <= son16 - 1; i++) {
  if (i % 7 == 0) {
    sum15 *= i;
  }
}
console.log(sum15);
//10. Foydalanuvchidan boshlang'ich va tugash sonini kiritishni so'rang va shu oraliqdagi har bir sonning kvadratini chiqarib, ularning yig'indisini hisoblang.
let son18 = +prompt("Boshlang'ich sonni kiriting");
let son19 = +prompt("Tugash sonni kiriting");
let sum16 = 0;

for (let i = son18; i <= son19; i++) {
  let sum17 = i ** 2;
  console.log(`${i} ning kvadrati: ${sum17}`);
  sum16 += sum17;
}

console.log(`Yig'indi: ${sum16}`);

// Ixtiyoriy masalalar

// Qiyin masalalar:
//1. Foydalanuvchidan bitta musbat son kiritishni so'rang. Shu sonning barcha bo'luvchilarini toping va ularning yig'indisini hisoblang.

//2. 1 dan 100 gacha bo'lgan sonlardan faqat tub (prime) sonlarni aniqlang va ularning yig'indisini hisoblang.

//3. Foydalanuvchidan ikkita musbat son kiritishni so'rang. Shu ikki son orasidagi barcha juft sonlarni toping va ularning kvadratlarini chiqaring.

//4. 1 dan 50 gacha bo'lgan sonlarni chiqarishda har 5-chi sondan keyin "*" belgisi konsolga chiqsin.

//5. Foydalanuvchidan son kiritishni so'rang. Shu sonni "reverse" qilish (teskari tartibga keltirish) uchun sikl ishlating va natijani chiqarib bering.

//6. 1 dan 100 gacha bo'lgan barcha sonlardan faqat 4 ga karrali va 6 ga bo'linadiganlarini toping va ularning ko'paytmasini hisoblang.

//7. Foydalanuvchidan son kiritishni so'rang. Shu sonning faktorialini toping. (Masalan, 5! = 5 × 4 × 3 × 2 × 1).

//8. Foydalanuvchidan ikkita musbat son kiritishni so'rang. Shu sonlar orasidagi eng katta umumiy bo'luvchini (EKUB) toping.

//9. Foydalanuvchidan ikkita son kiritishni so'rang. Shu sonlar orasidagi barcha toq sonlarni konsolga chiqarishda ularning tartib raqamini ham yozing.

//10. 1 dan 500 gacha bo'lgan barcha sonlarni o'rganib, faqat raqamlari yig'indisi 10 ga teng bo'lgan sonlarni aniqlang.

// Murakkabroq masalalar:
//1. Foydalanuvchidan musbat son kiriting. Shu sonning raqamlarini yig'indisini hisoblang, lekin raqamlar faqat toq bo'lishi kerak.

//2. Foydalanuvchidan bitta musbat son kiritishni so'rang. Shu sonning barcha raqamlari o'zaro bir xil bo'lsa, natijani konsolga chiqaring ("Barcha raqamlar bir xil"). Aks holda, "Turli raqamlar bor" deb yozing.

//3. 1 dan 100 gacha bo'lgan sonlar orasida faqat uch xonali raqamlar yig'indisi 15 ga teng bo'lgan sonlarni aniqlang va chiqarib bering.

//4. Foydalanuvchidan musbat son kiriting. Shu sondan kichik bo'lgan barcha tub sonlarni aniqlab, ularning o'rtacha qiymatini toping.

//5. 1 dan 300 gacha bo'lgan sonlarning raqamlar yig'indisini hisoblang, faqat raqamlari o'zaro har xil bo'lgan sonlar uchun.

//6. Foydalanuvchidan son kiritishni so'rang. Shu sonni yozuvga qarama-qarshi qilib konsolga chiqaring. Masalan, 12345 → 54321.

//7 1 dan 50 gacha bo'lgan sonlarni konsolga chiqaring. Juft sonlar o'rniga "Juft", toq sonlar o'rniga esa "Toq" so'zini yozing.

//8. Foydalanuvchidan musbat son kiriting. Shu sonning raqamlaridan eng kattasini toping.

//9. 1 dan 1000 gacha bo'lgan sonlarning har birining raqamlari yig'indisini toping va yig'indilari faqat 15 ga bo'linadigan sonlarni chiqaring.

//10. Foydalanuvchidan ikkita musbat son kiritishni so'rang. Shu sonlar orasidagi barcha juft sonlar yig'indisini, toq sonlar esa ko'paytmasini hisoblang.
