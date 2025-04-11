let son1 = Number(prompt("1-sonni kiriting:"));
let amal = Number(prompt("Amal tanlang:\n1) *\n2) /\n3) +\n4) -"));


if (amal < 1 || amal > 4) {
  alert("Xato! Faqat 1 dan 4 gacha raqam tanlang.");
} else {
  let son2 = Number(prompt("2-sonni kiriting:"));

  let belgi = "";

  if (amal === 1) belgi = "*";
  if (amal === 2) belgi = "/";
  if (amal === 3) belgi = "+";
  if (amal === 4) belgi = "-";

  document.getElementById("ifoda").textContent = `${son1} ${belgi} ${son2}`;

  function hisobla() {
    let natija;

    if (amal === 1) {
      natija = son1 * son2;
    } else if (amal === 2) {
      natija = son1 / son2;
    } else if (amal === 3) {
      natija = son1 + son2;
    } else if (amal === 4) {
      natija = son1 - son2;
    }

    document.getElementById("javob").textContent = `Natija: ${natija}`;
  }}
