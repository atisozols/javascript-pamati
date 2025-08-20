let skaitlis = Math.abs(Math.ceil(Math.random() * 10 + 1) - 5);
// divi varianti, kā iegūt elementus no HTML
const ievade = document.querySelector("#ievade");
const izvade = document.getElementById("izvade");
console.log(skaitlis);

// document.getElementById("ievade").addEventListener("input", () => {
//   if (document.querySelector("#ievade").value == skaitlis) {
//     izvade.textContent = "Uzminēji";
//   } else {
//     izvade.textContent = "Neuzminēji";
//   }
// });

document.getElementById("minet").addEventListener("click", () => {
  if (ievade.value == skaitlis) {
    izvade.textContent = "Uzminēji";
  } else {
    izvade.textContent = "Neuzminēji";
  }
  ievade.focus(); // ielikam kursoru atpakaļ ievades laukā
});

document.getElementById("sakt").addEventListener("click", () => {
  skaitlis = Math.abs(Math.ceil(Math.random() * 10 + 1) - 5);
  izvade.textContent = "";
  ievade.value = "";
  ievade.focus(); // ielikam kursoru atpakaļ ievades laukā
});
