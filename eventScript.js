// function welcome() {
//   alert("Sim salabim muncullah elemen-elemen HTML!");
//   const contents = document.querySelector(".contents");
//   contents.removeAttribute("hidden");
// }

// function increment() {
//   document.getElementById("count").innerText++;

//   if (document.getElementById("count").innerText == 7) {
//     const hiddenMessage = document.createElement("h4");
//     hiddenMessage.innerText = "Selamat anda mendapatkan hadiah tersembunyi...";

//     const img = document.createElement("img");
//     img.setAttribute(
//       "src",
//       "https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg"
//     );

//     const contents = document.querySelector(".contents");
//     contents.appendChild(hiddenMessage).appendChild(img);

//     document.getElementById("incrementButton").style.display = "none";
//   }
// }
// document.getElementById("incrementButton").onclick = increment;
// document.body.onload = welcome;

// window.addEventListener("load", welcome);
// document.getElementById("incrementButton").addEventListener("click", increment);

// Custom event

// const customEvent = new Event("eventBuatanKita");

// Element.addEventListener("eventBuatanKita");

// const changeCaption = new Event("changeCaption");

// window.addEventListener("load", function () {
//   const tombol = document.getElementById("tombol");

//   tombol.addEventListener("changeCaption", customEventHandler);
//   tombol.addEventListener("click", function () {
//     tombol.dispatchEvent(changeCaption);
//   });
// });

// function customEventHandler(ev) {
//   console.log("Event " + ev.type + " telah dijalankan");
//   const caption = document.getElementById("caption");
//   caption.innerText = "Anda telah membangkitkan custom event";
// }

// EVENT BUBBLING

// const divs = document.getElementsByTagName("div");
// for (let el of divs) {
//   el.addEventListener(
//     "click",
//     function () {
//       alert("ELEMEN " + el.getAttribute("id").toUpperCase());
//     },
//     true
//   );
// }

// EVENT FORM

const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener("submit", function (event) {
  const inputName = document.getElementById("inputName").value;
  const inputCity = document.getElementById("inputCity").value;
  const hiddenMessage = `Halo ${inputName}. Bagaimana Cuaca di ${inputCity}?`;

  document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
  event.preventDefault();
});
