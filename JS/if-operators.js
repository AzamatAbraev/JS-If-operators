// If1

// let n = 4;

// // if (n > 0) {
// //   n++;
// // }

// // if (n > 0) n++;

// console.log(n);

// If2

// let n = -2;

// if (n > 0) {
//   n++;
// } else if (n < 0) {
//   n -= 2;
// } else {
//   n = 10;
// }

// console.log(n);

// If3

// let a = 2;
// let b = 0;
// let c = -4;

// let positiveNumber = 0;

// if (a > 0) positiveNumber++;
// if (b > 0) positiveNumber++;
// if (c > 0) positiveNumber++;

// console.log(positiveNumber);

// If4

// let a = 24;
// let b = 10;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// a > b ? console.log(a) : console.log(b);

// if5

// let a = 9;
// let b = 3;

// if (a < b) {
//   console.log(1);
// } else {
//   console.log(2);
// }

// a < b ? console.log(1) : console.log(2);

// If6

// let a = -3;
// let b = 7;

// if (a > b) {
//   console.log(a);
//   console.log(b);
// } else {
//   console.log(b);
//   console.log(a);
// }

// If7

// let A = 9;
// let B = 10;
// let a = A;

// if (A < B) {
//   console.log(A);
//   console.log(B);
// } else {
//   A = B;
//   B = a;
//   console.log(A);
//   console.log(B);
// }

// If8

// let A = 2;
// let B = 2;

// if (A == B ) {
//   A = 0;
//   B = 0;
// } else {
//   A += B;
//   B = A;
// }

// console.log(A);
// console.log(B);

// If9

// let A = 3;
// let B = 3;

// if (A != B) {
//   console.log(Math.max(A, B));
// } else {
//   A = 0;
//   B = 0;
//   console.log(A);
//   console.log(B);
// }

// If10

// let A = 1;
// let B = 2;
// let C = 0;

// 1-usul

// console.log(Math.min(A, B, C));

// 2-usul

// if (A < B && A < C ) {
//   console.log(A);
// } else if (B < A && B < C) {
//   console.log(B);
// } else if (C < A && C < B) {
//   console.log(C);
// }

// If11

// let A = 6;
// let B = 4;
// let C = 3;

// if ((A < B && A > C) || (A < C && A > B)) console.log(A);
// if ((B < A && B > C) || (B < C && B > A)) console.log(B);
// if ((C < A && C > B) || (C < B && C > A)) console.log(C);

// If12

// let a = 1;
// let b = 2;
// let c = 3;

// if ((a + b > c) && (c < a && c < b) ) {
//   console.log(a);
//   console.log(b);
// }

// if ((a + c > b) && (b < a && b < c)) {
//   console.log(a);
//   console.log(c);
// }

// if ((b + c > a) && (a < b && a < c)) {
//   console.log(b);
//   console.log(c);
// }

// If13

// let A = 4;
// let B = 2;
// let C = 3;

// if (A < B && B < C) {
//   console.log(A * 2);
//   console.log(B * 2);
//   console.log(C * 2);
// } else {
//   console.log(-A);
//   console.log(-B);
//   console.log(-C);
// }

// If14

// let A = 4;
// let B = 2;
// let C = 1;

// if ((A < B && B < C) || (A > B && B > C)) {
//   console.log(A * 2);
//   console.log(B * 2);
//   console.log(C * 2);
// } else {
//   console.log(-A);
//   console.log(-B);
//   console.log(-C);
// }

// If15

// let a = 3;
// let b = 3;
// let c = 1;
// let d = 3;

// if (a == b && b == c) console.log(4);

// if (a == b && b == d) console.log(3);

// if (a == c && c == d) console.log(2);

// if (b == c && c == d) console.log(1);

// If16

// let x = -5;

// if (x <= 0) console.log(-x);

// if (x > 0 && x < 2) console.log(x ** 2);

// if (x >= 2) console.log(x = 4);

// If17

// let year = 1;

// let normalDays = year * 365;

// let kabisaDays = normalDays + year / 4;

// if (year % 4 == 0) {
//   console.log(kabisaDays);
// } else {
//   console.log(normalDays);
// }

// If18

// let n = 100;

// if (n > 0 && n < 100) {
//   if (n % 2 == 0) {
//     console.log("Ikki xonali juft son");
//   } else {
//     console.log("Ikki xonali toq son");
//   }
// } else if (n >= 100 && n < 1000) {
//   if (n % 2 == 0) {
//     console.log("Uch xonali juft son");
//   } else {
//     console.log("Uch xonali toq son");
//   }
// }

// case1

// let K = 6;

// switch (K) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log("Xato");
// }

// case2

// let month = 10;

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Autumn");
//     break;
// }

// case3

// let m = 6;

// switch (m) {
//   case 2:
//     console.log("28 kun");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 kun");
//     break;
//   default:
//     console.log("31 kun");
//     break;
// }

// case4

// let n = 1;
// let l = 900;

// let dm = n * 0.1 * l;
// let km = n * 1000 * l;
// let mt = n * l;
// let mm = n * 0.001 * l;
// let cm = n * 0.01 * l;

// switch (n) {
//   case 1:
//     console.log(dm + "meter");
//     break;
//   case 2:
//     console.log(km + "meter");
//     break;
//   case 3:
//     console.log(mt + "meter");
//     break;
//   case 4:
//     console.log(mm + "meter");
//     break;
//   case 5:
//     console.log(cm + "meter");
//     break;
//   default:
//     console.log("Xato");
// }

// case5

// let n = 2;
// let l = 900;

// let kg = n * l;
// let mg = n * 0.000001 * l;
// let gr = n * 0.001 * l;
// let tn = n * 1000 * l;
// let sn = n * 100 * l;

// switch (n) {
//   case 1:
//     console.log(kg + "kg");
//     break;
//   case 2:
//     console.log(mg + "kg");
//     break;
//   case 3:
//     console.log(gr + "kg");
//     break;
//   case 4:
//     console.log(tn + "kg");
//     break;
//   case 5:
//     console.log(sn + "kg");
//     break;
//   default:
//     console.log("Xato");
// }

// case6

// let ab = 23;

// let a = parseInt(ab / 10);
// let b = ab % 10;

// let m = 5;

// let res;

// switch (a) {
//   case 1:
//     res = "O'n";
//     break;
//   case 2:
//     res = "Yigirma";
//     break;
//   case 3:
//     res = "O'ttiz";
//     break;
//   default:
//     res = "...";
// }

// res += " ";

// switch (b) {
//   case 1:
//     res += "birinchi";
//     break;
//   case 2:
//     res += "ikkinchi";
//     break;
//   case 3:
//     res += "uchinchi";
//     break;
//   case 4:
//     res += "to`rtinchi";
//     break;
//   case 5:
//     res += "beshinchi";
//     break;
//   case 6:
//     res += "oltinchi";
//     break;
//   case 7:
//     res += "yettinchi";
//     break;
//   case 8:
//     res += "sakkizinchi";
//     break;
//   case 9:
//     res += "to'qqizinchi";
//     break;
// }

// res += " ";

// switch (m) {
//   case 1:
//     res += "Yanvar";
//     break;
//   case 2:
//     res += "Fevral";
//     break;
//   case 3:
//     res += "Mart";
//     break;
//   case 4:
//     res += "Aprel";
//     break;
//   case 5:
//     res += "May";
//     break;
//   case 6:
//     res += "Iyun";
//     break;
//   case 7:
//     res += "Iyul";
//     break;
//   case 8:
//     res += "Avgust";
//     break;
//   case 9:
//     res += "Sentabr";
//     break;
//   case 10:
//     res += "Oktabr";
//     break;
//   case 11:
//     res += "Noyabr";
//     break;
//   case 12:
//     res += "Dekabr"
//     break;
// }

// console.log(res);

// case7

// let ab = 19;

// let a = parseInt(ab / 10);
// let b = ab % 10;

// let m = 5;

// let res;

// switch (a) {
//   case 1:
//     res = "O'n";
//     break;
//   case 2:
//     res = "Yigirma";
//     break;
//   case 3:
//     res = "O'ttiz";
//     break;
//   default:
//     res = "...";
// }

// switch (b) {
//   case 9:
//     res += "inchi";
// }

// res += " ";

// switch (++b) {
//   case 1:
//     res += "birinchi";
//     break;
//   case 2:
//     res += "ikkinchi";
//     break;
//   case 3:
//     res += "uchinchi";
//     break;
//   case 4:
//     res += "to'rtinchi";
//     break;
//   case 5:
//     res += "beshinchi";
//     break;
//   case 6:
//     res += "oltinchi";
//     break;
//   case 7:
//     res += "yettinchi";
//     break;
//   case 8:
//     res += "sakkizinchi";
//     break;
//   case 9:
//     res += "to'qqizinchi";
//     break;
// }

// res += " ";

// switch (m) {
//   case 1:
//     res += "Yanvar";
//     break;
//   case 2:
//     res += "Fevral";
//     break;
//   case 3:
//     res += "Mart";
//     break;
//   case 4:
//     res += "Aprel";
//     break;
//   case 5:
//     res += "May";
//     break;
//   case 6:
//     res += "Iyun";
//     break;
//   case 7:
//     res += "Iyul";
//     break;
//   case 8:
//     res += "Avgust";
//     break;
//   case 9:
//     res += "Sentabr";
//     break;
//   case 10:
//     res += "Oktabr";
//     break;
//   case 11:
//     res += "Noyabr";
//     break;
//   case 12:
//     res += "Dekabr"
//     break;
// }

// console.log(res);

// case8

// let Y = 1;
// let K = 3;

// let res;

// switch (Y) {
//   case 1:
//     res = "Shimol tomonga harakatlan";
//     break;
//   case 2:
//     res = "Janub tomonga harakatlan";
//     break;
//   case 3:
//     res = "Sharq tomonga harakatlan";
//     break;
//   case 4:
//     res = "G'arq tomonga harakatlan";
//     break;
//   default:
//     res = "..";
// }

// res += " ";

// switch (K) {
//   case 1:
//     res += "va harakatni davom ettir.";
//     break;
//   case 2:
//     res += "va chapga buril.";
//     break;
//   case 3:
//     res += "va o`ngga buril.";
//     break;
//     default:
//       res += ".."
// }

// console.log(res);

// case9

// let N = 4;
// let M = 1;

// let res;

// switch (N) {
//   case 6:
//     res = "Olti";
//     break;
//   case 7:
//     res = "Yetti";
//     break;
//   case 8:
//     res = "Sakkiz";
//     break;
//   case 9:
//     res = "To'qqiz";
//     break;
//   case 10:
//     res = "O'n";
//     break;
//   case 11:
//     res = "Valet";
//     break;
//   case 12:
//     res = "Dama";
//     break;
//   case 13:
//     res = "Qirol";
//     break;
//   case 14:
//     res = "Tuz";
//   default:
//     res = "'Mavjud emas'"
// }

// res += " ";

// switch (M) {
//   case 1:
//     res += "g`isht";
//     break;
//   case 2:
//     res += "olma";
//     break;
//   case 3:
//     res += "chillak";
//     break;
//   case 4:
//     res += "qarg`a";
//     break;
// }

// console.log(res);

// case10

// let ab = 3;

// let b = ab % 10;
// let a = (ab - b) / 10;

// let res;

// switch (a) {
//   case 1:
//     res = "O'n";
//     break;
//   case 2:
//     res = "Yigirma";
//     break;
//   case 3:
//     res = "O'ttiz";
//     break;
//   case 4:
//     res = "...";
//     break;
//   default:
//     res = "...";
// }

// switch (b) {
//   case 0:
//     res += "ta";
//     break;
// }

// res += " ";

// switch (b) {
//   case 1:
//     res += "bitta";
//     break;
//   case 2:
//     res += "ikkita";
//     break;
//   case 3:
//     res += "uchta";
//     break;
//   case 4:
//     res += "to'rtta";
//     break;
//   case 5:
//     res += "beshta";
//     break;
//   case 6:
//     res += "oltita";
//     break;
//   case 7:
//     res += "yettita";
//     break;
//   case 8:
//     res += "sakkizta";
//     break;
//   case 9:
//     res += "to'qqizta";
//     break;
// }

// res += " " + "masala";

// console.log(res);


// case11

// let abc = 206;

// let bc = abc % 100;
// let a = (abc - bc) / 100;
// let c = bc % 10;
// let b = (bc - c) / 10;

// let res;

// switch (a) {
//   case 1:
//     res = "Bir yuz";
//     break;
//   case 2:
//     res = "Ikki yuz";
//     break;
//   case 3:
//     res = "Uch yuz";
//     break;
//   case 4:
//     res = "To`rt yuz";
//     break;
//   case 5:
//     res = "Besh yuz";
//     break;
//   case 6:
//     res = "Olti yuz";
//     break;
//   case 7:
//     res = "Yetti yuz";
//     break;
//   case 8:
//     res = "Sakkiz yuz";
//     break;
//   case 9:
//     res = "To'qqiz yuz";
//     break;
// }

// res += " ";

// switch (b) {
//   case 1:
//     res += "o'n";
//     break;
//   case 2:
//     res += "yigirma";
//     break;
//   case 3:
//     res += "o'ttiz";
//     break;
//   case 4:
//     res += "qirq";
//     break;
//   case 5:
//     res += "ellik";
//     break;
//   case 6:
//     res += "oltmish";
//     break;
//   case 7:
//     res += "yetmish";
//     break;
//   case 8:
//     res += "sakson";
//     break;
//   case 9:
//     res += "to'qson";
//     break;
// }

// res += " ";

// switch (c) {
//   case 1:
//     res += "bir";
//     break;
//   case 2:
//     res += "ikki";
//     break;
//   case 3:
//     res += "uch";
//     break;
//   case 4:
//     res += "to'rt";
//     break;
//   case 5:
//     res += "besh";
//     break;
//   case 6:
//     res += "olti";
//     break;
//   case 7:
//     res += "yetti";
//     break;
//   case 8:
//     res += "sakkiz";
//     break;
//   case 9:
//     res += "to`qqiz";
//     break;
// }

// console.log(res);


// case12

// let y = 1984;

// let color = Math.ceil(y / 12);
// let animal = (y % 12);

// if (y % 12 == 0) {
//   animal = 12;
// }

// if (y > 60) {
//   color = Math.ceil((y % 60) / 12);
// }

// let res;

// switch (color) {
//   case 1:
//     res = "Yashil";
//     break;
//   case 2:
//     res = "Qizil";
//     break;
//   case 3:
//     res = "Sariq";
//     break;
//   case 4:
//     res = "Oq";
//     break;
//   case 5:
//     res = "Qora";
//     break;
// }

// res += " ";

// switch (animal) {
//   case 1:
//     res += "sichqon";
//     break;
//   case 2:
//     res += "sigir";
//     break;
//   case 3:
//     res += "yo'lbars";
//     break;
//   case 4:
//     res += "quyon";
//     break;
//   case 5:
//     res += "ajdar";
//     break;
//   case 6:
//     res += "ilon";
//     break;
//   case 7:
//     res += "ot";
//     break;
//   case 8:
//     res += "qo'y";
//     break;
//   case 9:
//     res += "maymun";
//     break;
//   case 10:
//     res += "tovuq";
//     break;
//   case 11:
//     res += "it";
//     break;
//   case 12: 
//     res += "to`ngiz";
//     break;
// }

// res += " " + "yili";

// console.log(res);