document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik =
      document.getElementById("inputNama").value.length;
    const jumlahKarakterMaksimal =
      document.getElementById("inputNama").maxLength;

    console.log("jumlahKarakterDiketik: ", jumlahKarakterDiketik);
    console.log("jumlahKarakterMaksimal: ", jumlahKarakterMaksimal);
    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText =
      sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById("sisaKarakter").innerText =
        "Batas maksimal tercapai!";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("inputNama: focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "visible";
  });

  document.getElementById("inputNama").addEventListener("blur", function () {
    console.log("inputNama: blur");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "hidden";
  });

  document
    .getElementById("inputCaptcha")
    .addEventListener("change", function () {
      console.log("inputCaptcha: change");

      const inputCaptcha = document.getElementById("inputCaptcha").value;
      const submitStatus = document.getElementById("submitButton");

      if (inputCaptcha === "PRNU") {
        submitStatus.removeAttribute("disabled");
      } else {
        submitStatus.setAttribute("disabled", "");
      }
    });

  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("Berhasil di copy");
  });

  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda telah mem-paste sebuah teks...");
  });

  document
    .getElementById("formInputData")
    .addEventListener("submit", function (event) {
      const inputCaptcha = document.getElementById("inputCaptcha").value;

      if (inputCaptcha === "PRNU") {
        alert("Selamat anda lolos");
      }

      event.preventDefault();
    });

  const formData = document.getElementById("formInputData");

  formData.addEventListener("submit", function (event) {
    const inputNama = document.getElementById("inputNama").value;
    const inputPaste = document.getElementById("inputPaste").value;
    const message = "Hasil Input data anda:";

    alert(`${message} ${inputNama} ${inputPaste}`);
    document.getElementById(
      "hasilInput"
    ).innerText = `${message} ${inputNama} ${inputPaste}`;

    document.getElementById("hasilInput").style.color = "green";

    formData.reset();

    event.preventDefault();
  });
});
