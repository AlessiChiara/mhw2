document.addEventListener('DOMContentLoaded', function () {
  const locandina = document.getElementById('locandina3');
  const frecciaSinistra = document.getElementById('freccia_sinistra');
  const frecciaDestra = document.getElementById('freccia_destra');
  const images = [
    'images/img5.png',
    'images/img1.jpg',
    'images/img4.jpg',
    'images/img2.jpg',
    
  ];
  let currentImageIndex = 0;
  


  function updateImage() {
    locandina.src = images[currentImageIndex];
  }


  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  }


  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  }

  frecciaSinistra.addEventListener('click', showPreviousImage);

  frecciaDestra.addEventListener('click', showNextImage);


  updateImage();
});

const hamMenu = document.querySelector(".hambuger-menu");
const menuHidden= document.querySelector(".menu-comparsa");
console.log(hamMenu);
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("active");
    menuHidden.classList.toggle("active");
}
)


