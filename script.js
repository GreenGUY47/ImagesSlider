const image = document.getElementById("mainImage");
const btnP = document.getElementById("btnP");
const btnA = document.getElementById("btnA");
const stock = document.getElementById("mainStock");

const images = [
  "./images/benjamin-chambon-ax7D0Uwt8sk-unsplash.jpg",
  "./images/bob-brewer-AwEuTojkQdA-unsplash.jpg",
  "./images/dmytro-koplyk-q9iC2KKQw0M-unsplash.jpg",
  "./images/doncoombez-_9DeqIMvCe0-unsplash.jpg",
  "./images/hansjorg-rath-dMp-ozvn2iE-unsplash.jpg",
  "./images/helena-lopes-CQsv1JOL_Mc-unsplash.jpg",
  "./images/lukas-konvica--Jv1N_TQNQU-unsplash.jpg",
  "./images/nenad-radojcic-i-gvs4OB5Fk-unsplash.jpg",
  "./images/nikita-pishchugin-8C77cCMyZ8c-unsplash.jpg",
  "./images/polina-kuzovkova-BbgjCY5Mt54-unsplash.jpg",
];
let counter = 0;
image.style.backgroundImage = `url(${images[counter]})`;
stock.children[0].style.backgroundImage = `url(${images[counter + 1]})`;
stock.children[1].style.backgroundImage = `url(${images[counter + 2]})`;
stock.children[2].style.backgroundImage = `url(${images[counter + 3]})`;
stock.children[3].style.backgroundImage = `url(${images[counter + 4]})`;
stock.children[4].style.backgroundImage = `url(${images[counter + 5]})`;

btnA.addEventListener("click", () => {
  if (counter < images.length) {
    counter = (counter + 1) % images.length;
    updateUI()
  }
});
function updateUI(){
    image.style.backgroundImage = `url(${images[counter]})`;
    const thumbs = stock.children;
    for(let i = 0; i < thumbs.length; i++){
        let index = counter + i + 1;
        if(index >= images.length){
            index = index % images.length;
        }
        thumbs[i].style.backgroundImage = `url(${images[index]})`;
    }
}
btnP.addEventListener("click", () => {
    counter = (counter - 1 + images.length) % images.length;
    updateUI();
}); 