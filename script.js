
const couleurs = document.querySelector('.color')
const telechargement = document.querySelector('.dow')
//les deux triangles
const triangle1 = document.querySelector('.triangle')
const triangle2 = document.querySelector('.triangle2')
//la partie gauche et droite
const leftZone = document.querySelector('.left')
const rightZone = document.querySelector('.right')

let change1 = Math.floor(Math.random() * 0xFFFFFF).toString(16)
let change2 = Math.floor(Math.random() * 0xFFFFFF).toString(16)
// console.log(change);


couleurs.addEventListener('click', () => {
    leftZone.style.backgroundColor = '#' + change1
    rightZone.style.backgroundColor = '#' + change2
})


telechargement.addEventListener('click', () => {
    const cv = document.querySelector('.contenerCV')
    html2pdf().from(cv).save('cv.pdf')
})
