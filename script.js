const couleurs = document.querySelector(".color");
const telechargement = document.querySelector(".dow");
//les deux triangles
const triangle1 = document.querySelector(".triangle");
const triangle2 = document.querySelector(".triangle2");
//la partie gauche et droite
const leftZone = document.querySelector(".left");
const rightZone = document.querySelector(".right");

// console.log(change);

couleurs.addEventListener("click", () => {
  let change1 = Math.floor(Math.random() * 0xffffff).toString(16);
  let change2 = Math.floor(Math.random() * 0xffffff).toString(16);
  leftZone.style.backgroundColor = "#" + change1;
  rightZone.style.backgroundColor = "#" + change2;
});

telechargement.addEventListener("click", () => {
  const cv = document.querySelector(".contenerCV");
  const opt = {
    margin: 0,
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 0.9 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(cv).save();
});
