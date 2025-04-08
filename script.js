const couleurs = document.querySelector(".color");
const telechargement = document.querySelector(".dow");
//les deux triangles
const triangle1 = document.querySelector(".triangle");
const triangle2 = document.querySelector(".triangle2");
//la partie gauche et droite
const leftZone = document.querySelector(".left");
const rightZone = document.querySelector(".right");
//
const goBack = document.querySelector(".goBack");

// console.log(change);

couleurs.addEventListener("click", () => {
  let change1 = Math.floor(Math.random() * 0xffffff).toString(16);
  //   let change2 = Math.floor(Math.random() * 0xffffff).toString(16);
  leftZone.style.backgroundColor = "#" + change1;
  //   rightZone.style.backgroundColor = "#" + change2;
});

telechargement.addEventListener("click", () => {
  const cv = document.querySelector(".container");

  html2pdf().from(cv).save("cv.pdf");
});

goBack.addEventListener("click", () => {
  window.location.href = "index.html";
});
