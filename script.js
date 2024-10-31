// var textBody = document.getElementById("textBody");
// var nama = ["rizal", "zaril"];
// var btn = document.getElementsByClassName(".btnProfil");

// const tamu = prompt("Siapakah nama anda?");

// if (!nama.includes(tamu)) {
//   textBody.innerHTML = "Nama anda tidak memiliki akses!!!";
// } else if (!nama.includes(tamu.toLowerCase())) {
//   textBody.innerHTML = "Huruf harus kecil semua!!!";
// } else {
//   textBody.innerHTML = `Selamat datang ${tamu} `;
// }

// if ((textBody.hidden = false)) {
//   btn.hidden = true;
// }

// function btnProfil() {
//   var textProfil = document.getElementById("textProfil");

//   textProfil.innerHTML = `Nama anda adalah ${tamu}`;
//   document.addEventListener("click", () => {
//     if (tamu == ["zaril"]) {
//       textProfil.style.color = "red";
//       textProfil.style.transition = "transform 2s";
//       textProfil.style.transform = "translateY(50px) ";
//     } else {
//       textProfil.style.color = "green";
//       textProfil.style.transition = "transform 2s";
//       textProfil.style.transform = "translateY(50px) ";
//     }
//   });
// }

// function confirmButton() {
//   var textShow = document.getElementById("textShow");
//   var isConfirmed = confirm("Anda punya duit?");

//   if (isConfirmed === true) {
//     console.log(isConfirmed);
//     textShow.innerHTML =
//       "Selamat anda dapat membeli apa saja kecuali kebahagiaan :)";
//   } else {
//     console.log(isConfirmed);
//     textShow.innerHTML = "Minngir lu miskin!!!";
//   }
//   //   document.addEventListener("click", () => {});
// }

const newElement = document.createElement("li");
newElement.innerText = "Selamat menikmati";
const daftar = document.getElementById("daftar");

daftar.appendChild(newElement);

const firstElement = document.createElement("li");
firstElement.innerText = "Hidupkan kompor";

const firstItem = document.getElementById("awal");

daftar.insertBefore(firstElement, firstItem);
