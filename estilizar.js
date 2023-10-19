// estilizar.js

// Função para exibir detalhes do projeto
function showDetails(projectId) {
    const projectDetails = document.getElementById(`project-details-${projectId}`);
    projectDetails.style.display = "block";
}

// Função para ocultar detalhes do projeto
function hideDetails(projectId) {
    const projectDetails = document.getElementById(`project-details-${projectId}`);
    projectDetails.style.display = "none";
}

// Funções para a galeria de imagens
const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");
let currentImageIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
    currentImageIndex = index;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Event listeners para as setas da galeria
const nextArrow = document.querySelector("#next-arrow");
const prevArrow = document.querySelector("#prev-arrow");

nextArrow.addEventListener("click", nextImage);
prevArrow.addEventListener("click", previousImage);

// Mostrar a primeira imagem ao carregar a página
showImage(currentImageIndex);

